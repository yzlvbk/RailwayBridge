/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'ant-design-vue*' {
  import type { DefineComponent } from 'ant-design-vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
