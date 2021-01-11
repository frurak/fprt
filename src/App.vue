<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
  // overflow-x: hidden;
  background: $dark;
}

#app {
  // overflow-x: hidden;
  .homepage_banner {
    width: 66vw;
    height: auto;
    transform: translateX(56%);
    z-index: -1;
    overflow: hidden;
    img {
      height: 121vh;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 100vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
        transform: translateX(-15%);
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 100vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
        transform: translateX(-15%);
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 100vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
        transform: translateX(-15%);
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 100vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
        transform: translateX(-15%);
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  #app {
    .homepage_banner {
      width: 100vw;
      min-height: 50vh;
      height: auto;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: 100% !important;
        height: auto !important;
        transform: translateX(0%) !important;
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 150vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
        transform: translateX(-15%);
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 150vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 120%;
        transform: translateX(-15%) translateY(-10%);
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 150vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
        transform: translateX(0);
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  #app {
    .homepage_banner {
      width: 100vw;
      height: 100vh;
      transform: translateX(0%);
      z-index: -1;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
        transform: translateX(0);
      }
    }
  }
}
</style>
