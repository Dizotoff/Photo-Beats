interface CSSModule {
  [className: string]: string
}
declare module '*.png'
// type shims for CSS modules
declare module '*.svg'
// type shims for CSS modules
declare module '*.mp4'
// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
