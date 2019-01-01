import Vue from "vue";
import Place from "./Place.vue";

Vue.config.productionTip = false;

let vm = new Vue({
  render: h => h(Place)
}).$mount("#maps_place");

console.log(vm.$data);
