import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Header, Button, Search, Tabbar, TabItem, Navbar } from 'mint-ui'
import 'mint-ui/lib/style.css'
// 使用bootstrap图标
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
// 使用阿里图标
import '@/assets/iconfont/iconfont.css'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Search.name, Search)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Navbar.name, Navbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
