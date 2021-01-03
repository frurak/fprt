/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleMouseover: false,
    navActive: false,
    appCreated: false,
    ps: false,
    mm: false,
    rk: false
  },
  mutations: {
    isAppCreated(state) {
      return (state.appCreated = true);
    },
    isNavActive(state) {
      // Shopw/hide navigation right-side bar

      const toggleMid = document.getElementById("toggleline-mid");
      const toggleTop = document.getElementById("toggleline-top");
      const toggleBot = document.getElementById("toggleline-bot");
      const nav = document.querySelector(".nav");
      const navBlur = document.querySelector(".nav_bg_blur");
      const mediaMobile = window.matchMedia("(max-width: 767px)");
      const mediaXLandscape = window.matchMedia("(min-width: 768px) and (max-width: 991px) and (orientation: landscape)");
      const mediaiPadLandscape = window.matchMedia("(min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape)");

      if (state.navActive === false) {
        state.navActive = true;

        // Add/remove toggle btn classes
        if (mediaMobile.matches || mediaXLandscape.matches || mediaiPadLandscape.matches) {
          toggleBot.classList.remove("toggle-inactive-bot-mobile");
          toggleBot.classList.add("toggle-active-bot-mobile");
        } else {
          toggleBot.classList.remove("toggle-inactive-bot");
          toggleBot.classList.add("toggle-active-bot");
        }
        toggleMid.classList.remove("toggle-inactive-mid");
        toggleTop.classList.remove("toggle-inactive-top");
        toggleMid.classList.add("toggle-active-mid");
        toggleTop.classList.add("toggle-active-top");

        // Add/remove white nav backgroung class
        nav.classList.add("nav-active");
        nav.classList.remove("nav-inactive");

        // Add/remove background blur styling
        navBlur.style.display = "block";
        navBlur.style.opacity = "1";
        navBlur.style.transition = "0.1s ease-in-out";
        document.querySelector("body").style.overflow = "hidden";
      } else {
        state.navActive = false;

        // Add/remove toggle btn classes
        if (mediaMobile.matches || mediaXLandscape.matches || mediaiPadLandscape.matches) {
          toggleBot.classList.add("toggle-inactive-bot-mobile");
          toggleBot.classList.remove("toggle-active-bot-mobile");
        } else {
          toggleBot.classList.add("toggle-inactive-bot");
          toggleBot.classList.remove("toggle-active-bot");
        }
        toggleMid.classList.add("toggle-inactive-mid");
        toggleTop.classList.add("toggle-inactive-top");
        toggleMid.classList.remove("toggle-active-mid");
        toggleTop.classList.remove("toggle-active-top");

        // Add/remove white nav backgroung class
        nav.classList.remove("nav-active");
        nav.classList.add("nav-inactive");

        // Add/remove background blur styling
        navBlur.style.display = "none";
        navBlur.style.opacity = "0";
        navBlur.style.transition = "0.1s ease-in-out";
        document.querySelector("body").style.overflow = "";
      }
    },
    open_ps(state) {
      if (state.ps === false) {
        state.ps = true;
        document.querySelector("body").style.overflow = "hidden";
      } else {
        state.ps = false;
        document.querySelector("body").style.overflow = "";
      }
    },
    open_mm(state) {
      if (state.mm === false) {
        state.mm = true;
        document.querySelector("body").style.overflow = "hidden";
      } else {
        state.mm = false;
        document.querySelector("body").style.overflow = "";
      }
    },
    open_rk(state) {
      if (state.rk === false) {
        state.rk = true;
        document.querySelector("body").style.overflow = "hidden";
      } else {
        state.rk = false;
        document.querySelector("body").style.overflow = "";
      }
    }
  },
  actions: {},
  modules: {}
});
