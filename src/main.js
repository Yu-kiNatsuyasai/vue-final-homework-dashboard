import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// vee-vatlidate功能
defineRule('required', required)
configure({
  generateMessage: localize({ zh_TW: zhTw }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VLoading', Loading)
app.mount('#app')
