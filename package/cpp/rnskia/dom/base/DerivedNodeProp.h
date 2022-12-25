#pragma once

#include "BaseNodeProp.h"
#include "JsiValue.h"

#include <memory>
#include <set>
#include <string>
#include <utility>
#include <vector>

namespace RNSkia {

template <typename T> class BackBuffered {
public:
  BackBuffered() { _activeBuffer = &_buffer1; }

  T &active() { return *_activeBuffer; }
  T &other() { return _activeBuffer == &_buffer1 ? _buffer2 : _buffer1; }
  void swap() {
    std::lock_guard<std::mutex> lock(_concurrencyLock);
    _activeBuffer = &other();
  }
  bool isEmpty() {
    std::lock_guard<std::mutex> lock(_concurrencyLock);
    return _activeBuffer->size() == 0;
  }

private:
  T _buffer1;
  T _buffer2;
  T *_activeBuffer;
  std::mutex _concurrencyLock;
};

/**
 Class for composing multiple properties into a derived property value
 */
class BaseDerivedProp : public BaseNodeProp,
                        public std::enable_shared_from_this<BaseDerivedProp> {
public:
  explicit BaseDerivedProp(PropertyDidUpdateCallback &propertyDidUpdate)
      : BaseNodeProp(propertyDidUpdate) {}

  /**
   Starts the process of updating and reading props
   */
  void updatePendingChanges() override {
    if (_changedProps.isEmpty()) {
      return;
    }

    _changedProps.swap();
    for (auto &prop : _changedProps.other()) {
      prop->updatePendingChanges();
    }
    updateDerivedValue();
  }

  /*
   Marks properties as no longer changed
   */
  void markAsResolved() override {
    for (auto &prop : _changedProps.other()) {
      prop->markAsResolved();
    }
    _changedProps.other().clear();
    _isChanged = false;
  }

  /**
   Returns the changed state of the prop
   */
  bool isChanged() override { return _isChanged; }

  /**
   Delegate read value to child nodes
   */
  void readValue(jsi::Runtime &runtime, const ReadPropFunc &read) override {
    for (auto &prop : _properties) {
      prop->readValue(runtime, read);
    }
  }

  /**
   Override to calculate the derived value from child properties
   */
  virtual void updateDerivedValue() {}

  /**
   Defines a property that will be updated with the container changes.
   */
  template <class _Tp, class... _Args,
            class = std::_EnableIf<!std::is_array<_Tp>::value>>
  _Tp *addProperty(_Args &&...__args) {
    auto prop =
        std::make_shared<_Tp>(std::forward<_Args>(__args)...,
                              std::bind(&BaseDerivedProp::propertyDidUpdate,
                                        this, std::placeholders::_1));
    _properties.push_back(prop);
    return prop.get();
  }

  /*
   Return name of properties in derived prop as a comma separated list
   */
  std::string getName() override {
    std::string v = "";
    for (size_t i = 0; i < _properties.size(); ++i) {
      v += _properties[i]->getName() + (i < _properties.size() - 1 ? ", " : "");
    }
    return v;
  }

  /**
   Returns true if one or more of the child props has values
   */
  bool isSet() override {
    for (auto &prop : _properties) {
      if (prop->isSet()) {
        return true;
      }
    }
    return false;
  }

private:
  void propertyDidUpdate(BaseNodeProp *prop) {
    // Save locally that we have a sub property change
    _changedProps.active().insert(prop);
    // Notify node that we have changed due to this
    callPropertyDidUpdate();
    // Mark as changed locally
    _isChanged = true;
  }

  std::vector<std::shared_ptr<BaseNodeProp>> _properties;
  BackBuffered<std::set<BaseNodeProp *>> _changedProps;
  std::atomic<bool> _isChanged = {false};
};

/**
 Class for composing multiple properties into a derived property value
 */
template <typename T> class DerivedProp : public BaseDerivedProp {
public:
  explicit DerivedProp(PropertyDidUpdateCallback &propertyDidUpdate)
      : BaseDerivedProp(propertyDidUpdate) {}

  /**
  Returns the derived value
   */
  std::shared_ptr<const T> getDerivedValue() { return _derivedValue; }

  /**
   Returns true if is optional and one of the child props has a value, or all
   props if optional is false.
   */
  bool isSet() override { return _derivedValue != nullptr; };

protected:
  /**
   Set derived value from sub classes
   */
  void setDerivedValue(std::shared_ptr<const T> value) {
    if (_derivedValue != value) {
      _derivedValue = value;
    }
  }

  /**
   Set derived value from sub classes
   */
  void setDerivedValue(const T &&value) {
    _derivedValue = std::make_shared<const T>(std::move(value));
  }

private:
  std::shared_ptr<const T> _derivedValue;
};

/**
 Class for composing multiple properties into a derived property value
 */
template <typename T> class DerivedSkProp : public BaseDerivedProp {
public:
  explicit DerivedSkProp(PropertyDidUpdateCallback &propertyDidUpdate)
      : BaseDerivedProp(propertyDidUpdate) {}

  /**
  Returns the derived value
   */
  sk_sp<T> getDerivedValue() { return _derivedValue; }

  /**
   Returns true if is optional and one of the child props has a value, or all
   props if optional is false.
   */
  bool isSet() override { return _derivedValue != nullptr; };

protected:
  /**
   Set derived value from sub classes
   */
  void setDerivedValue(sk_sp<T> value) {
    if (_derivedValue != value) {
      _derivedValue = value;
    }
  }

  /**
   Set derived value from sub classes
   */
  void setDerivedValue(const T &&value) {
    _derivedValue = sk_make_sp<T>(std::move(value));
  }

private:
  sk_sp<T> _derivedValue;
};

} // namespace RNSkia
