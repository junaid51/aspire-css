import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCreditCard,
  faExchangeAlt,
  faArrowCircleUp,
  faUser,
  faMoneyBillAlt,
  faPlusCircle,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHome,
  faCreditCard,
  faExchangeAlt,
  faArrowCircleUp,
  faUser,
  faMoneyBillAlt,
  faPlusCircle,
  faChevronCircleDown
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
