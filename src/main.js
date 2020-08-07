import Vue from "vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Inialize netlify identity
netlifyIdentityWidget.init();

// Initialize GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://vue-easybuoy-dashboard.netlify.app/.netlify/identity",
  setCookie: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
