import Vue from "vue";
import VueRouter from "vue-router";
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
  },
  {
    path: "/team",
    name: "team",
    component: Team,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
