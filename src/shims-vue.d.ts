/* eslint-disable */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vuesax' {
  import { PluginObject } from 'vue'
  const Vuesax: PluginObject<any>
  export default Vuesax
}

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $vs: any;
  }
}

export { }
