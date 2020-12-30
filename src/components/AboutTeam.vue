<template>
  <div class="about_container">
    <div class="about_header">
      <h3 class="about_headline">
        Tam gdzie jest pasja,
        <br />
        przychodzą wyniki
      </h3>
    </div>
    <AboutBoxes />
    <Cross style="right:50%;top:6%;" id="cross3" />
    <Cross style="right:6%;top:19%;" id="cross4" />
    <Cross style="right:28%;top:33%;" id="cross5" />
    <Cross style="right:68.5%;bottom:12.5%;" id="cross6" />
  </div>
</template>

<script>
import AboutBoxes from "@/components/AboutBoxes.vue";
import Cross from "@/components/Cross.vue";

export default {
  name: "AboutTeam",
  components: {
    AboutBoxes,
    Cross
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

.about_container {
  width: 100%;
  min-height: 180vh;
  height: auto;
  @include flex(center, flex-start);
  flex-direction: column;
  margin-top: 30vh;
  position: relative;
  .about_header {
    width: 100%;
    height: 30%;
    padding: 15vh 5.5vw 0 5.5vw;
    @include flex(center, flex-start);
    .about_headline {
      font-size: 4.3rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 5rem;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 5vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 8vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.55rem;
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 5vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 8vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 40vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 8vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 10vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 8vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 5vh;
    position: relative;
    // background: red;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 8vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 3rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 3.48rem;
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 50vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 20vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.55rem;
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 50vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 20vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 50vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 20vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .about_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    margin-top: 40vh;
    position: relative;
    .about_header {
      width: 100%;
      height: 30%;
      padding: 10vh 4vw;
      @include flex(center, flex-start);
      .about_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
      }
    }
  }
}
</style>
