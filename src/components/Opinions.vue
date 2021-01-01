<template>
  <div class="opinions_container">
    <div class="opinions_header">
      <h3 class="opinions_headline">
        Co o nas mówią nasi zawodnicy
      </h3>
    </div>
    <OpinionsSingle />
  </div>
</template>

<script>
import OpinionsSingle from "@/components/OpinionsSingle.vue";

export default {
  name: "Opinions",
  components: {
    OpinionsSingle
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

.opinions_container {
  width: 100%;
  min-height: 100vh;
  @include flex(center, flex-start);
  flex-direction: column;
  .opinions_header {
    @include flex(center, center);
    width: 100%;
    height: 30%;
    padding: 8rem 5.5vw 5rem 5.5vw;
    .opinions_headline {
      font-size: 4.3rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 5rem;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .opinions_container {
    width: 100%;
    min-height: 120vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.55rem;
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .opinions_container {
    width: 100%;
    min-height: 120vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .opinions_container {
    width: 100%;
    min-height: 120vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .opinions_container {
    width: 100%;
    min-height: 80vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .opinions_container {
    width: 100%;
    min-height: 55vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 3rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 3.48rem;
        text-align: center;
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .opinions_container {
    width: 100%;
    min-height: 120vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.55rem;
        text-align: center;
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .opinions_container {
    width: 100%;
    min-height: 120vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
        text-align: center;
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .opinions_container {
    width: 100%;
    min-height: 200vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    // background: red;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 60px 0 80px 0;
      .opinions_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
        text-align: center;
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .opinions_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    @include flex(center, flex-start);
    flex-direction: column;
    padding: 0 4vw;
    .opinions_header {
      @include flex(center, center);
      width: 100%;
      height: 30%;
      padding: 5rem 0;
      .opinions_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
        text-align: center;
      }
    }
  }
}
</style>
