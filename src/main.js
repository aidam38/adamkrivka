// Import main css
import '~/assets/style/index.scss'

//Import Katex
import 'katex/dist/katex.min.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import { VueReCaptcha } from 'vue-recaptcha-v3'


// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { head }) {
  head.script.push({
    src: "https://www.google.com/recaptcha/api.js"
  })

  Vue.use(VueReCaptcha, { siteKey: '6LeB3-wZAAAAAB629BrzU-LvJB-UKvqdQzA_iUWh', loaderOptions: { autoHideBadge: true } })

  Vue.component('Layout', DefaultLayout)
}