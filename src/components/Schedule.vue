<template>
  <div class="schedule_hp_container">
    <img
      src="@/assets/bottom-baner.jpg"
      alt="ForPro Running Team"
      class="bottom_banner"
    />
    <div class="hp_bottomtext_container">
      <h3 class="hp_bottomtext">
        Sprawdź harmonogram
        <br />
        najbliższych treningów
      </h3>
      <h1 class="hp_descr">
        Udział w treningach jest całkowicie darmowy dla członków
        <br id="sch_br" />
        grupy. Chcesz zostać członkiem? Przyjdź na trening, po prostu :)
      </h1>
      <ButtonBig btntext="Sprawdź" class="hp_bottom_btn" />
    </div>
  </div>
</template>

<script>
import ButtonBig from "@/components/ButtonBig.vue";

export default {
  name: "Schedule",
  components: {
    ButtonBig
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

.schedule_hp_container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  .bottom_banner {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 30;
    transform: translateY(-10%);
  }
  .hp_bottomtext_container {
    position: absolute;
    left: 5.5vw;
    bottom: 15%;
    width: auto;
    min-height: 20%;
    z-index: 35;
    .hp_bottomtext {
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
    .hp_bottom_btn {
      z-index: 40;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .schedule_hp_container {
    width: 100%;
    min-height: 140vh;
    position: relative;
    .bottom_banner {
      height: 100%;
      width: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-30%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 40%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: none;
    }
  }
}

@media only screen and (max-width: 320px) {
  .schedule_hp_container {
    width: 100%;
    min-height: 140vh;
    position: relative;
    .bottom_banner {
      height: 100%;
      width: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-30%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 40%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: none;
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .schedule_hp_container {
    width: 100%;
    min-height: 140vh;
    position: relative;
    .bottom_banner {
      height: 100%;
      width: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-30%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 45%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      }
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: none;
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .schedule_hp_container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    .bottom_banner {
      height: 100%;
      width: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-25%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 50%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      }
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: none;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .schedule_hp_container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    .bottom_banner {
      height: 100%;
      width: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-25%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 50%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      }
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: none;
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .schedule_hp_container {
    width: 100%;
    min-height: 80vh;
    position: relative;
    .bottom_banner {
      width: auto;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-25%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 50%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
        font-size: 3rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        line-height: 3.48rem;
      }
      .hp_descr {
        font-size: 1rem;
        font-weight: 100;
        line-height: 1.7rem;
        margin-top: 1.3rem;
      }
      .hp_bottom_btn {
        z-index: 40;
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .schedule_hp_container {
    width: 100%;
    min-height: 240vh;
    position: relative;
    .bottom_banner {
      width: auto;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-15%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 50%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: block;
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .schedule_hp_container {
    width: 100%;
    min-height: 240vh;
    position: relative;
    .bottom_banner {
      width: auto;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-15%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 50%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      }
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: block;
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .schedule_hp_container {
    width: 100%;
    min-height: 240vh;
    position: relative;
    .bottom_banner {
      width: auto;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-15%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 50%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      }
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: block;
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .schedule_hp_container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    .bottom_banner {
      height: 100%;
      width: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      transform: translateX(-5%);
    }
    .hp_bottomtext_container {
      position: absolute;
      left: 0vw;
      top: 50%;
      width: auto;
      min-height: 20%;
      z-index: 35;
      padding: 0 4vw;
      .hp_bottomtext {
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
      }
      .hp_bottom_btn {
        z-index: 40;
      }
    }
    #sch_br {
      display: block;
    }
  }
}
</style>
