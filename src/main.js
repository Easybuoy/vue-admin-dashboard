import Vue from "vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import configVars from "./config";

Vue.config.productionTip = false;

// Inialize netlify identity
netlifyIdentityWidget.init();

// Initialize GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: configVars.VUE_APP_API_URL,
  setCookie: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
