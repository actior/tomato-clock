declare module '*.svg';

declare module '*.html?raw' {
  declare const exports: string
  export default exports
}
