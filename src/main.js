import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(ElementUI);
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
    