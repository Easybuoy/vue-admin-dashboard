import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import SignIn from "../views/Auth/SignIn";
import Recover from "../views/Auth/Recover";
import Request from "../views/Auth/Request";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/request",
    name: "Request",
    component: Request,
  },
  {
    path: "/recover",
    name: "Recover",
    component: Recover,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
