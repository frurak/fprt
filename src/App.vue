<template>
  <div id="app">
    <HomepageTopbar />
    <HomepageMainText />
    <div class="homepage_banner">
      <img src="@/assets/fprt-main-baner.jpg" alt="ForPro Running Team" />
    </div>
    <Cross style="right:59%;top:10.5%;" id="cross1" />
    <Cross style="right:49%;top:30.5%;" id="cross2" />
    <Navigation />
    <AboutTeam />
    <Coaches />
    <router-view />
  </div>
</template>

<script>
import HomepageTopbar from "@/components/HomepageTopbar.vue";
import HomepageMainText from "@/components/HomepageMainText.vue";
import Cross from "@/components/Cross.vue";
import Navigation from "@/components/Navigation.vue";
import AboutTeam from "@/components/AboutTeam.vue";
import Coaches from "@/components/Coaches.vue";

export default {
  components: {
    HomepageTopbar,
    HomepageMainText,
    Cross,
    Navigation,
    AboutTeam,
    Coaches
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

* {
  font-family: "Poppins", sans-serif;
  color: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  display: none;
}

body {
  overflow-x: hidden;
  background: $dark;
}

#app {
  overflow-x: hidden;
  .homepage_banner {
    width: 57vw;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(76%);
    z-index: -1;
    overflow: hidden;
    img {
      height: 131vh;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: 300%;
        height: auto;
        transform: translateX(-15%) translateY(-15%);
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-15%);
      z-index: -1;
      overflow: hidden;
      img {
        width: 300%;
        height: auto;
        transform: translateX(-19%);
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-15%);
      z-index: -1;
      overflow: hidden;
      img {
        width: 300%;
        height: auto;
        transform: translateX(-19%);
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-20%);
      z-index: -1;
      overflow: hidden;
      img {
        width: 260%;
        height: auto;
        transform: translateX(-19%);
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-20%);
      z-index: -1;
      overflow: hidden;
      img {
        width: 260%;
        height: auto;
        transform: translateX(-19%);
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-20%);
      z-index: -1;
      img {
        width: 150%;
        height: auto;
        transform: translateX(0%);
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-20%);
      z-index: -1;
      img {
        width: 150%;
        height: auto;
        transform: translateX(0%);
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-25%);
      z-index: -1;
      img {
        width: 130%;
        height: auto;
        transform: translateX(0%);
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(-18%);
      z-index: -1;
      img {
        width: 180%;
        height: auto;
        transform: translateX(0%);
      }
    }
  }
}
</style>
