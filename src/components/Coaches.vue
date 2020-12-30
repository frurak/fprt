/* eslint-disable prettier/prettier */
<template>
  <div class="coaches_container">
    <div class="coaches_header">
      <h3 class="coaches_headline">
        Poznaj swoich Trenerów
      </h3>
      <h4 class="coaches_description">
        Naszym głównym celem jest pokazanie Ci jak trenować a nie tylko biegać!
        <br />
        Zdobywaj doświadczenie pod okiem profesjonalnych zawodników.
      </h4>
    </div>
    <CoachesBoxes />
    <Cross style="right:42%;top:4%;" id="cross7" />
    <Cross style="right:15%;top:22%;" id="cross8" />
  </div>
</template>

<script>
import CoachesBoxes from "@/components/CoachesBoxes.vue";
import Cross from "@/components/Cross.vue";

export default {
  name: "Coaches",
  components: {
    CoachesBoxes,
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

.coaches_container {
  width: 100%;
  height: 180vh;
  position: relative;
  .coaches_header {
    height: 30%;
    padding: 0 5.5vw;
    @include flex(center, center);
    flex-direction: column;
    text-align: center;
    .coaches_headline {
      font-size: 4.3rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 5rem;
    }
    .coaches_description {
      font-size: 1rem;
      line-height: 1.7rem;
      margin-top: 1.3rem;
      font-weight: 200;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .coaches_container {
    width: 100%;
    height: 320vh;
    position: relative;
    @include flex(center, flex-start);
    flex-direction: column;
    .coaches_header {
      height: 20%;
      padding: 0 5.5vw;
      @include flex(center, center);
      flex-direction: column;
      text-align: center;
      margin-bottom: 10vh;
      .coaches_headline {
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.55rem;
      }
      .coaches_description {
        font-size: 1rem;
        line-height: 1.7rem;
        margin-top: 1.3rem;
        font-weight: 200;
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .coaches_container {
    width: 100%;
    height: 320vh;
    position: relative;
    @include flex(center, flex-start);
    flex-direction: column;
    .coaches_header {
      height: 20%;
      padding: 0 5.5vw;
      @include flex(center, center);
      flex-direction: column;
      text-align: center;
      margin-bottom: 10vh;
      .coaches_headline {
        font-size: 2.4rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 2.78rem;
      }
      .coaches_description {
        font-size: 1rem;
        line-height: 1.7rem;
        margin-top: 1.3rem;
        font-weight: 200;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  
}
</style>
