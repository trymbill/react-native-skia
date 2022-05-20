"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7857],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(a),k=r,N=d["".concat(l,".").concat(k)]||d[k]||c[k]||o;return a?n.createElement(N,p(p({ref:t},m),{},{components:a})):n.createElement(N,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9871:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),p=["components"],s={id:"runtime-shader",title:"Runtime Shader",sidebar_label:"Runtime Shader",slug:"/image-filters/runtime-shader"},l=void 0,i={unversionedId:"image-filters/runtime-shader",id:"image-filters/runtime-shader",title:"Runtime Shader",description:"The RuntimeShader image filter allows you to write your own Skia Shader as an image filter.",source:"@site/docs/image-filters/runtime-shader.md",sourceDirName:"image-filters",slug:"/image-filters/runtime-shader",permalink:"/react-native-skia/docs/image-filters/runtime-shader",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/image-filters/runtime-shader.md",tags:[],version:"current",frontMatter:{id:"runtime-shader",title:"Runtime Shader",sidebar_label:"Runtime Shader",slug:"/image-filters/runtime-shader"},sidebar:"tutorialSidebar",previous:{title:"Morphology",permalink:"/react-native-skia/docs/image-filters/morphology"},next:{title:"Backdrop Filters",permalink:"/react-native-skia/docs/backdrops-filters"}},m={},c=[{value:"Example",id:"example",level:2}],d={toc:c};function k(e){var t=e.components,s=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeShader")," image filter allows you to write your own ",(0,o.kt)("a",{parentName:"p",href:"/docs/shaders/overview"},"Skia Shader")," as an image filter.\nThis component receive the currently filtered image as a shader uniform (or the implicit source image if no children are provided). "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"source"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"SkRuntimeEffect")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shader to use as an image filter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children?"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ImageFilter")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optional image filter to be applied first")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The example below generates a circle with a green mint color.\nThe circle is first draw with the lightblue color ",(0,o.kt)("inlineCode",{parentName:"p"},"#add8e6")," and the runtime shader switches the blue and green channel: we get mint green ",(0,o.kt)("inlineCode",{parentName:"p"},"#ade6d8"),"."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Text: {\n    (props: AnimatedProps<TextProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Text"},"Text")),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: AnimatedProps<RuntimeShaderProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Skia: {\n    Typeface: import("./Typeface").TypefaceFactory;\n    MaskFilter: import("./MaskFilter").MaskFilterFactory;\n    RuntimeEffect: import("./RuntimeEffect").RuntimeEffectFactory;\n    Shader: import("./Shader").ShaderFactory;\n    ImageFilter: import("./ImageFilter").ImageFilterFactory;\n    PathEffect: import("./PathEffect").PathEffectFactory;\n    Data: import("./Data").DataFactory;\n    SVG: import("./SVG").SVGFactory;\n    FontMgr: import("./FontMgr").FontMgrFactory;\n    TextBlob: import("./TextBlob").TextBlobFactory;\n    Matrix: () => import("./Matrix").SkMatrix;\n    Font: (typeface?: import("./Typeface").SkTypeface | undefined, size?: number | undefined) => import("./Font").SkFont;\n    Point: (x: number, y: number) => import("./Point").SkPoint;\n    XYWHRect: (x: number, y: number, width: number, height: number) => import("./Rect").SkRect;\n    ... 13 more ...;\n    MakeVertices: (mode: import("./Vertices").VertexMode, positions: import("./Point").SkPoint[], textureCoordinates?: import("./Point").SkPoint[] | null | undefined, colors?: Float32Array[] | undefined, indices?: number[] | null | undefined, isVolatile?: boolean | undefined) => import("./Vertices").SkVertices;\n}\nimport Skia'},"Skia")),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: (props: AnimatedProps<GroupProps>) => JSX.Element\nimport Group"},"Group")),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: import("../../..").SkPoint;\n    };\n}\nimport Circle'},"Circle"),"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Skia: {\n    Typeface: import("./Typeface").TypefaceFactory;\n    MaskFilter: import("./MaskFilter").MaskFilterFactory;\n    RuntimeEffect: import("./RuntimeEffect").RuntimeEffectFactory;\n    Shader: import("./Shader").ShaderFactory;\n    ImageFilter: import("./ImageFilter").ImageFilterFactory;\n    PathEffect: import("./PathEffect").PathEffectFactory;\n    Data: import("./Data").DataFactory;\n    SVG: import("./SVG").SVGFactory;\n    FontMgr: import("./FontMgr").FontMgrFactory;\n    TextBlob: import("./TextBlob").TextBlobFactory;\n    Matrix: () => import("./Matrix").SkMatrix;\n    Font: (typeface?: import("./Typeface").SkTypeface | undefined, size?: number | undefined) => import("./Font").SkFont;\n    Point: (x: number, y: number) => import("./Point").SkPoint;\n    XYWHRect: (x: number, y: number, width: number, height: number) => import("./Rect").SkRect;\n    ... 13 more ...;\n    MakeVertices: (mode: import("./Vertices").VertexMode, positions: import("./Point").SkPoint[], textureCoordinates?: import("./Point").SkPoint[] | null | undefined, colors?: Float32Array[] | undefined, indices?: number[] | null | undefined, isVolatile?: boolean | undefined) => import("./Vertices").SkVertices;\n}\nimport Skia'},"Skia")),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) RuntimeEffect: RuntimeEffectFactory"},"RuntimeEffect")),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) RuntimeEffectFactory.Make: (sksl: string) => SkRuntimeEffect | null"},"Make")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"uniform shader image;")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"half4 main(float2 xy) {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"  return image.eval(xy).rbga;")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"!"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const RuntimeShaderDemo: () => JSX.Element"},"RuntimeShaderDemo")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: (props: AnimatedProps<GroupProps>) => JSX.Element\nimport Group"},"Group")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"         <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: AnimatedProps<RuntimeShaderProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) source: SkRuntimeEffect | SkiaReadonlyValue<SkRuntimeEffect>"},"source")),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source"),"} />")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"         <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: import("../../..").SkPoint;\n    };\n}\nimport Circle'},"Circle")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cx: number | SkiaReadonlyValue<number>"},"cx")),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r"),"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cy: number | SkiaReadonlyValue<number>"},"cy")),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r"),"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) r: number"},"r")),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r"),"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color: string"},"color")),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"lightblue"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: (props: AnimatedProps<GroupProps>) => JSX.Element\nimport Group"},"Group")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Text: {\n    (props: AnimatedProps<TextProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Text"},"Text")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: AnimatedProps<RuntimeShaderProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Skia: {\n    Typeface: import("./Typeface").TypefaceFactory;\n    MaskFilter: import("./MaskFilter").MaskFilterFactory;\n    RuntimeEffect: import("./RuntimeEffect").RuntimeEffectFactory;\n    Shader: import("./Shader").ShaderFactory;\n    ImageFilter: import("./ImageFilter").ImageFilterFactory;\n    PathEffect: import("./PathEffect").PathEffectFactory;\n    Data: import("./Data").DataFactory;\n    SVG: import("./SVG").SVGFactory;\n    FontMgr: import("./FontMgr").FontMgrFactory;\n    TextBlob: import("./TextBlob").TextBlobFactory;\n    Matrix: () => import("./Matrix").SkMatrix;\n    Font: (typeface?: import("./Typeface").SkTypeface | undefined, size?: number | undefined) => import("./Font").SkFont;\n    Point: (x: number, y: number) => import("./Point").SkPoint;\n    XYWHRect: (x: number, y: number, width: number, height: number) => import("./Rect").SkRect;\n    ... 13 more ...;\n    MakeVertices: (mode: import("./Vertices").VertexMode, positions: import("./Point").SkPoint[], textureCoordinates?: import("./Point").SkPoint[] | null | undefined, colors?: Float32Array[] | undefined, indices?: number[] | null | undefined, isVolatile?: boolean | undefined) => import("./Vertices").SkVertices;\n}\nimport Skia'},"Skia")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: (props: AnimatedProps<GroupProps>) => JSX.Element\nimport Group"},"Group")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: import("../../..").SkPoint;\n    };\n}\nimport Circle'},"Circle")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Skia: {\n    Typeface: import("./Typeface").TypefaceFactory;\n    MaskFilter: import("./MaskFilter").MaskFilterFactory;\n    RuntimeEffect: import("./RuntimeEffect").RuntimeEffectFactory;\n    Shader: import("./Shader").ShaderFactory;\n    ImageFilter: import("./ImageFilter").ImageFilterFactory;\n    PathEffect: import("./PathEffect").PathEffectFactory;\n    Data: import("./Data").DataFactory;\n    SVG: import("./SVG").SVGFactory;\n    FontMgr: import("./FontMgr").FontMgrFactory;\n    TextBlob: import("./TextBlob").TextBlobFactory;\n    Matrix: () => import("./Matrix").SkMatrix;\n    Font: (typeface?: import("./Typeface").SkTypeface | undefined, size?: number | undefined) => import("./Font").SkFont;\n    Point: (x: number, y: number) => import("./Point").SkPoint;\n    XYWHRect: (x: number, y: number, width: number, height: number) => import("./Rect").SkRect;\n    ... 13 more ...;\n    MakeVertices: (mode: import("./Vertices").VertexMode, positions: import("./Point").SkPoint[], textureCoordinates?: import("./Point").SkPoint[] | null | undefined, colors?: Float32Array[] | undefined, indices?: number[] | null | undefined, isVolatile?: boolean | undefined) => import("./Vertices").SkVertices;\n}\nimport Skia'},"Skia")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) RuntimeEffect: RuntimeEffectFactory"},"RuntimeEffect")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) RuntimeEffectFactory.Make: (sksl: string) => SkRuntimeEffect | null"},"Make")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"`")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"uniform shader image;")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"half4 main(float2 xy) {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"  return image.eval(xy).rbga;")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"`"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"!;")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const RuntimeShaderDemo: () => JSX.Element"},"RuntimeShaderDemo")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: (props: AnimatedProps<GroupProps>) => JSX.Element\nimport Group"},"Group")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"         "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: AnimatedProps<RuntimeShaderProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) source: SkRuntimeEffect | SkiaReadonlyValue<SkRuntimeEffect>"},"source")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"         "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: import("../../..").SkPoint;\n    };\n}\nimport Circle'},"Circle")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cx: number | SkiaReadonlyValue<number>"},"cx")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cy: number | SkiaReadonlyValue<number>"},"cy")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) r: number"},"r")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color: string"},"color")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lightblue"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: (props: AnimatedProps<GroupProps>) => JSX.Element\nimport Group"},"Group")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,o.kt)("img",{alt:"Runtime Shader",src:a(32).Z,width:"256",height:"256"}))}k.isMDXComponent=!0},32:function(e,t,a){t.Z=a.p+"assets/images/runtime-shader-61c54f569a910a924e61ff7d993f89b5.png"}}]);