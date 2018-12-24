import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

let vm = new Vue({
  render: h => h(App)
}).$mount("#mp_rate");

console.log(vm.$data);
