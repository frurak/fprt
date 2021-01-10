import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Events from "../views/Events.vue";
import Terms from "../views/Terms.vue";
import FAQ from "../views/FAQ.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/harmonogram",
    name: "Schedule",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Schedule.vue")
  },
  {
    path: "/wydarzenia",
    name: "Events",
    component: Events
  },
  {
    path: "/regulamin",
    name: "Terms",
    component: Terms
  },
  {
    path: "/pomoc",
    name: "FAQ",
    component: FAQ
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
