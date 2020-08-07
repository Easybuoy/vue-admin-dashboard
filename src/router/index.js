import Vue from "vue";
import VueRouter from "vue-router";
import * as netlifyIdentityWidget from "netlify-identity-widget";

import Home from "../views/Home";
import Team from "../views/Team";
import SignIn from "../views/Auth/SignIn";
import Recover from "../views/Auth/Recover";
import Request from "../views/Auth/Request";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team",
    name: "team",
    component: Team,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/request",
    name: "request",
    component: Request
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth;
  });

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
