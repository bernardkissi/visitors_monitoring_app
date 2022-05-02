import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
  delay: 500,
  color: '#29d',
  showSpinner: true,
})

import { ZiggyVue } from 'ziggy';

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue)
        .component("Link", Link)
        .component("Head", Head)
      .mount(el)
  },
})
