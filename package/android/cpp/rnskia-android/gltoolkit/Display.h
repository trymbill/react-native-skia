// Based on https://github.com/flutter/engine/tree/main/impeller/toolkit/egl
#pragma once

#include <memory>

#include "EGL/egl.h"
#include "GLES2/gl2.h"
#include "gltoolkit/Config.h"
#include "gltoolkit/Context.h"
#include "gltoolkit/Macros.h"

namespace RNSkia {

class Display {
public:
  Display();

  virtual ~Display();

  virtual bool IsValid() const;

  virtual std::unique_ptr<Config> ChooseConfig(ConfigDescriptor config) const;

  virtual std::unique_ptr<Context>
  CreateContext(const Config &config, const Context *share_context = nullptr);

  virtual std::unique_ptr<Surface>
  CreateWindowSurface(const Config &config, EGLNativeWindowType window);

  virtual std::unique_ptr<Surface>
  CreatePixelBufferSurface(const Config &config, size_t width, size_t height);

private:
  EGLDisplay display_ = EGL_NO_DISPLAY;

  DISALLOW_COPY_AND_ASSIGN(Display);
};
} // namespace RNSkia