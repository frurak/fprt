<template>
  <div class="topbar_container">
    <div class="tbr_leftside">
      <img
        src="@/assets/fprt_logo_wht.svg"
        alt="ForPro Running Team logo"
        class="tbr_logo"
      />
      <div class="tbr_socials">
        <img src="@/assets/facebook-app-symbol.svg" class="socials_fb" />
        <img src="@/assets/instagram.svg" class="socials_ig" />
      </div>
    </div>
    <div class="tbr_rightside">
      <div
        class="toggle_container"
        @click="isNavActive()"
        :class="navActive === true ? 'nav-active-toggle-color' : ''"
      >
        <span id="toggleline-mid"></span>
        <span id="toggleline-top"></span>
        <span id="toggleline-bot"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HomepageTopbar",
  data() {
    return {
      renderNavInactive: true
    };
  },
  methods: {
    ...mapMutations(["isNavActive"])
  },
  computed: {
    ...mapState(["navActive"])
  }
};
</script>

<style lang="scss">
$dark: #09070d;
$blue: #5f76b5;

@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.topbar_container {
  width: 100vw;
  height: 24vh;
  position: absolute;
  @include flex(center, flex-start);
  padding: 0 5.5vw;
  .tbr_leftside {
    width: 36.5%;
    height: 100%;
    @include flex(center, space-between);
    padding-right: 6vw;
    z-index: 1;
    .tbr_logo {
      width: 35%;
    }
    .tbr_socials {
      width: 28%;
      height: 100%;
      @include flex(center, space-between);
      padding: 0 1%;
      .socials_fb {
        height: 17%;
        cursor: pointer;
      }
      .socials_ig {
        height: 17%;
        cursor: pointer;
      }
    }
  }
  .tbr_rightside {
    width: 63.5%;
    height: 100%;
    @include flex(center, flex-end);
    z-index: 200;
    .toggle_container {
      width: auto;
      @include flex(center, flex-end);
      cursor: pointer;
      position: relative;
      width: 34px;
      height: 26px;
      #toggleline-mid {
        content: "";
        display: block;
        width: 34px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      #toggleline-bot {
        content: "";
        display: block;
        width: 34px;
        height: 3px;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      #toggleline-top {
        content: "";
        display: block;
        width: 34px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .topbar_container {
    width: 100vw;
    height: 12vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 35%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 25%;
          cursor: pointer;
          margin-right: 4vw;
        }
        .socials_ig {
          height: 25%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 28px;
        height: 22px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .topbar_container {
    width: 100vw;
    height: 12vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 35%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 25%;
          cursor: pointer;
          margin-right: 4vw;
        }
        .socials_ig {
          height: 25%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 28px;
        height: 22px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .topbar_container {
    width: 100vw;
    height: 12vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 35%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 25%;
          cursor: pointer;
          margin-right: 4vw;
        }
        .socials_ig {
          height: 25%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 28px;
        height: 22px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .topbar_container {
    width: 100vw;
    height: 12vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 25%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 25%;
          cursor: pointer;
          margin-right: 6vw;
        }
        .socials_ig {
          height: 25%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 34px;
        height: 26px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 34px;
          height: 3px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 34px;
          height: 3px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 34px;
          height: 3px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .topbar_container {
    width: 100vw;
    height: 12vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 4vw;
      z-index: 1;
      .tbr_logo {
        width: 20%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 20%;
          cursor: pointer;
          margin-right: 4vw;
        }
        .socials_ig {
          height: 20%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 34px;
        height: 26px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 34px;
          height: 3px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 34px;
          height: 3px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 34px;
          height: 3px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .topbar_container {
    width: 100vw;
    height: 16vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 20%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 40%;
          cursor: pointer;
          margin-right: 6vw;
        }
        .socials_ig {
          height: 40%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 28px;
        height: 22px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .topbar_container {
    width: 100vw;
    height: 16vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 20%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 30%;
          cursor: pointer;
          margin-right: 6vw;
        }
        .socials_ig {
          height: 30%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 28px;
        height: 22px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .topbar_container {
    width: 100vw;
    height: 16vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 16%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 35%;
          cursor: pointer;
          margin-right: 6vw;
        }
        .socials_ig {
          height: 35%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 28px;
        height: 22px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .topbar_container {
    width: 100vw;
    height: 16vh;
    position: absolute;
    @include flex(center, flex-start);
    padding: 0 4vw;
    .tbr_leftside {
      width: 90%;
      height: 100%;
      @include flex(center, space-between);
      padding-right: 6vw;
      z-index: 1;
      .tbr_logo {
        width: 16%;
      }
      .tbr_socials {
        width: auto;
        height: 100%;
        @include flex(center, flex-end);
        padding: 0;
        margin-right: 4vw;
        .socials_fb {
          height: 20%;
          cursor: pointer;
          margin-right: 6vw;
        }
        .socials_ig {
          height: 20%;
          cursor: pointer;
        }
      }
    }
    .tbr_rightside {
      width: 10%;
      height: 100%;
      @include flex(center, flex-end);
      z-index: 200;
      .toggle_container {
        width: auto;
        @include flex(center, flex-end);
        cursor: pointer;
        position: relative;
        width: 28px;
        height: 22px;
        #toggleline-mid {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        #toggleline-bot {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        #toggleline-top {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

// --------------------------------------------------- KEYFRAMES ANIMATIONS ---------------------------------------------------
// --------------------------------------------------- JAVASCRIPT CLASSES -----------------------------------------------------

.toggle-active-mid {
  animation: toggleMidLine 0.6s ease-in-out both;
}
.toggle-active-top {
  animation: toggleTopLine 0.6s ease-in-out both;
}
.toggle-active-bot {
  animation: toggleBotLine 0.6s ease-in-out both;
}
.toggle-active-bot-mobile {
  animation: toggleBotLineMobile 0.6s ease-in-out both;
}

@keyframes toggleTopLine {
  0% {
    top: 0;
  }
  50% {
    transform: translateY(-50%);
    top: 50%;
  }
  100% {
    transform: translateY(350%) rotate(45deg);
  }
}

@keyframes toggleBotLine {
  0% {
    bottom: 0;
  }
  50% {
    transform: translateY(50%);
    bottom: 50%;
  }
  100% {
    transform: translateY(-415%) rotate(-45deg);
  }
}

@keyframes toggleMidLine {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
// bottom line in mediaqueries
@keyframes toggleBotLineMobile {
  0% {
    bottom: 0;
  }
  50% {
    transform: translateY(50%);
    bottom: 50%;
  }
  100% {
    transform: translateY(-640%) rotate(-45deg);
  }
}

.toggle-inactive-mid {
  animation: BacktoggleMidLine 0.6s ease-in-out both;
}
.toggle-inactive-top {
  animation: BacktoggleTopLine 0.6s ease-in-out both;
}
.toggle-inactive-bot {
  animation: BacktoggleBotLine 0.6s ease-in-out both;
}
.toggle-inactive-bot-mobile {
  animation: BacktoggleBotLineMobile 0.6s ease-in-out both;
}

@keyframes BacktoggleTopLine {
  0% {
    transform: translateY(350%) rotate(45deg);
  }
  50% {
    transform: translateY(-50%);
    top: 50%;
  }
  100% {
    top: 0;
  }
}

@keyframes BacktoggleBotLine {
  0% {
    transform: translateY(-415%) rotate(-45deg);
  }
  50% {
    transform: translateY(50%);
    bottom: 50%;
  }
  100% {
    bottom: 0;
  }
}

@keyframes BacktoggleBotLineMobile {
  0% {
    transform: translateY(-640%) rotate(-45deg);
  }
  50% {
    transform: translateY(50%);
    bottom: 50%;
  }
  100% {
    bottom: 0;
  }
}

@keyframes BacktoggleMidLine {
  0% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.nav-active-toggle-color {
  #toggleline-mid {
    background: $dark !important;
  }
  #toggleline-bot {
    background: $dark !important;
  }
  #toggleline-top {
    background: $dark !important;
  }
}
</style>
