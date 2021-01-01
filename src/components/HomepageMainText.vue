<template>
  <div class="hp_maintext_container">
    <h3 class="hp_maintext" :class="appCreated ? 'hp_maintext-active' : ''">
      Nie biegamy a trenujemy
      <br />
      Już dziś dołącz do pro-amatorów
    </h3>
    <h1 class="hp_descr" :class="appCreated ? 'hp_descr-active' : ''">
      ForPro Running Team to zapał i&nbsp;entuzjazm bijący od sportowców
      <br id="mt_br" />
      chcących poprawiać swoje wyniki sportowe.
    </h1>
    <ButtonBig
      btntext="Dołącz do drużyny"
      class="hp_btn"
      :class="appCreated ? 'hp_btn-active' : ''"
    />
  </div>
</template>

<script>
import ButtonBig from "@/components/ButtonBig.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "HomepageMainText",
  components: {
    ButtonBig
  },
  computed: {
    ...mapState(["appCreated"]),
    ...mapMutations(["isAppCreated"])
  },
  created() {
    this.$store.commit("isAppCreated");
    console.log(this.$store.state.appCreated);
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

.hp_maintext_container {
  position: absolute;
  left: 5.5vw;
  top: 40%;
  width: auto;
  min-height: 20%;
  z-index: 5;
  .hp_maintext {
    font-size: 4.3rem;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    line-height: 5rem;
  }
  .hp_descr {
    font-size: 1rem;
    font-weight: 100;
    line-height: 1.7rem;
    margin-top: 1.3rem;
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 30%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.2rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.55rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1.3rem;
    }
    #mt_br {
      display: none;
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 30%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.4rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.78rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1.3rem;
      width: 70%;
    }
    #mt_br {
      display: none;
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 30%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.4rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.78rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1.3rem;
      width: 70%;
    }
    #mt_br {
      display: none;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 55%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.4rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.78rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1.3rem;
      width: 70%;
    }
    #mt_br {
      display: none;
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 50%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 3rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 3.48rem;
    }
    .hp_descr {
      font-size: 1.2rem;
      font-weight: 100;
      line-height: 2.04rem;
      margin-top: 1.3rem;
      width: 70%;
    }
    #mt_br {
      display: none;
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 28%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.2rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.55rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1rem;
    }
    #mt_br {
      display: none;
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 46%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.2rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.55rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1rem;
    }
    #mt_br {
      display: none;
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 30%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.2rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.55rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1rem;
    }
    #mt_br {
      display: none;
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .hp_maintext_container {
    position: absolute;
    left: 0;
    top: 50%;
    width: auto;
    min-height: 20%;
    margin: 0 4vw;
    .hp_maintext {
      font-size: 2.4rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      line-height: 2.78rem;
    }
    .hp_descr {
      font-size: 1rem;
      font-weight: 100;
      line-height: 1.7rem;
      margin-top: 1rem;
    }
    #mt_br {
      display: none;
    }
  }
}

// --------------------------------------------------- KEYFRAMES ANIMATIONS ---------------------------------------------------
// --------------------------------------------------- JAVASCRIPT CLASSES -----------------------------------------------------

.hp_maintext-active {
  animation: mainTextAnim 1.4s ease-in-out both;
}

.hp_descr-active {
  animation: mainTextAnim 1.4s ease-in-out both;
}

.hp_btn-active {
  animation: btnOpacity 0.4s ease-in-out 0.6s both;
}

@keyframes mainTextAnim {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  25% {
    opacity: 0;
  }
  60% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes btnOpacity {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
