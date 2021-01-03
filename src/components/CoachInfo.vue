<template>
  <div class="coach_info_container">
    <div class="nav_bg_blur" @click="closeInfo()"></div>
    <div class="info_rect ps" v-if="ps">
      <div class="info_overlay">
        <div class="coach_name">
          Piotr Strzelecki
          <a
            href="https://www.instagram.com/pstrzelecki_runcoach/"
            target="_blank"
            ><img src="@/assets/instagram-color.svg"
          /></a>
        </div>
        <div class="coach_info">
          <div class="coach_info_overlay">
            <span class="info_quote"
              >„Sport mam we krwi od dziecka. To jest coś, czym uwielbiam się
              dzielić z innymi – wymiana doświadczeń i pomoc innym w
              realizowaniu ich celów sprawia mi dużo frajdy!”</span
            >
            <br />
            <br />
            Od tej strony poznasz Piotrka, którego spotkać już mogłeś/mogłaś w
            salonie ForPro Nike Royal Wilanów jako doświadczonego doradcę
            wyposażenia sportowego Nike. Pomysłodawca projektu treningów, trener
            biegania Healthy Center by Ann, międzynarodowy licencjonowany trener
            BLACKROLL® , szkoleniowiec i specjalista z działu Nike Running,
            który regularnie biega i trenuje innych już od ponad 6 lat, a jego
            rekordy życiowe to:
            <br />
            5km – 17:01
            <br />
            10km – 36:41
            <br />
            HM – 1:20:48
          </div>
        </div>
        <ButtonBig
          btntext="Powrót"
          class="back_btn"
          @click.native="closeInfo()"
        />
        <!-- <div id="prev_coach">&lt;</div>
        <div id="next_coach">&gt;</div> -->
      </div>
    </div>
    <div class="info_rect mm" v-if="mm">
      <div class="info_overlay">
        <div class="coach_name">
          Maciej Małecki
          <a href="https://www.instagram.com/runner_2.5/" target="_blank"
            ><img src="@/assets/instagram-color.svg"
          /></a>
        </div>
        <div class="coach_info">
          <div class="coach_info_overlay">
            <span class="info_quote"
              >„Sport towarzyszy mi od zawsze i jest dla mnie pasją w pełni tego
              słowa znaczeniu”</span
            >
            <br />
            <br />
            Tak pisze o sobie Maciek znany jako Runner 2.5.🏃‍♂️, trener z którym
            możliwość spotkania będziesz miał/miała na wspólnych spotkaniach.
            <br />
            <br />
            Od ponad 15 lat uprawia najróżniejsze dyscypliny sportu, w tym: -
            sztuki walki (brązowy medal Pucharu Polski muay thai) - zapasy
            (mistrzostwo Polski w zapasach z elementami grapplingu do 80 kg) -
            sporty wytrzymałościowo-siłowe, crossfit endurance, ćwiczenia
            ogólnorozwojowe - bieganie, w którym rekordy to 5km - 17:04, 10km -
            35:48, HM - 1:17:13, M - 2:48:33
            <br />
            <br />
            <span class="info_quote"
              >„Poza aspektami często sportowymi, bardzo cenię sobie ludzi.
              Lubię dzielić się swoim doświadczeniem i pomagać innym w
              osiągnięciu celów sportowych. Dlatego zapraszam Cię na wspólny
              trening, będziemy się świetnie bawić i na pewno wykonamy kawał
              mocnej roboty!”</span
            >
          </div>
        </div>
        <ButtonBig
          btntext="Powrót"
          class="back_btn"
          @click.native="closeInfo()"
        />
        <!-- <div id="prev_coach">&lt;</div>
        <div id="next_coach">&gt;</div> -->
      </div>
    </div>
    <div class="info_rect rk" v-if="rk">
      <div class="info_overlay">
        <div class="coach_name">
          Rafał Krzeszewski
          <a
            href="https://www.instagram.com/biegajpodokiemtrenera_coach/"
            target="_blank"
            ><img src="@/assets/instagram-color.svg"
          /></a>
        </div>
        <div class="coach_info">
          <div class="coach_info_overlay">
            <span class="info_quote"
              >„Sport towarzyszy mi od zawsze i jest dla mnie pasją w pełni tego
              słowa znaczeniu”</span
            >
            <br />
            <br />
            Od ponad 15 lat uprawia najróżniejsze dyscypliny sportu, w tym: -
            sztuki walki (brązowy medal Pucharu Polski muay thai) - zapasy
            (mistrzostwo Polski w zapasach z elementami grapplingu do 80 kg) -
            sporty wytrzymałościowo-siłowe, crossfit endurance, ćwiczenia
            ogólnorozwojowe - bieganie, w którym rekordy to 5km - 17:04, 10km -
            35:48, HM - 1:17:13, M - 2:48:33
            <br />
            <br />
            <span class="info_quote"
              >„Poza aspektami często sportowymi, bardzo cenię sobie ludzi.
              Lubię dzielić się swoim doświadczeniem i pomagać innym w
              osiągnięciu celów sportowych. Dlatego zapraszam Cię na wspólny
              trening, będziemy się świetnie bawić i na pewno wykonamy kawał
              mocnej roboty!”</span
            >
          </div>
        </div>
        <ButtonBig
          btntext="Powrót"
          class="back_btn"
          @click.native="closeInfo()"
        />
        <!-- <div id="prev_coach">&lt;</div>
        <div id="next_coach">&gt;</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBig from "@/components/ButtonBig.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "CoachInfo",
  components: {
    ButtonBig
  },
  computed: {
    ...mapState(["ps", "mm", "rk"])
  },
  methods: {
    ...mapMutations(["open_ps", "open_mm", "open_rk"]),
    closeInfo() {
      this.$store.state.ps = false;
      this.$store.state.mm = false;
      this.$store.state.rk = false;
      document.querySelector("body").style.overflow = "";
    }
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

.coach_info_container {
  width: 100vw;
  height: 100vh;
  z-index: 120;
  position: absolute;
  top: 0;
  right: 0;
  .info_rect {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    width: 60vw;
    background: rgb(255, 255, 255);
    border-radius: 12px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
    z-index: 300;
    // display: none;
    @include flex(center, center);
    padding: 3rem;
    .info_overlay {
      width: 100%;
      height: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      position: relative;
      .back_btn {
        border: 3px solid #a1b0ec;
      }
      .coach_name {
        width: 100%;
        height: auto;
        @include flex(center, flex-start);
        color: $dark;
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 800;
        padding: 0 0 1.3rem 0;
        img {
          width: 25px;
          margin-left: 25px;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .coach_info {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        .coach_info_overlay {
          width: 100%;
          color: $dark;
          text-align: justify;
          font-size: 1rem;
          line-height: 1.7rem;
          .info_quote {
            font-weight: 800;
            color: $dark;
            font-style: italic;
          }
        }
      }
    }
  }
  .nav_bg_blur {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background: rgba(24, 23, 23, 0.88);
    // display: none;
    // opacity: 0;
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .coach_info_container {
    width: 100vw;
    height: 100vh;
    z-index: 120;
    position: absolute;
    bottom: 0;
    right: 0;
    .info_rect {
      position: fixed;
      left: 0;
      bottom: 0;
      transform: translate(0%, -44%);
      height: auto;
      min-height: 90vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      border-radius: 20px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
      z-index: 300;
      @include flex(center, center);
      padding: 0rem 4vw;
      .info_overlay {
        width: 100%;
        height: 100%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        position: relative;
        .back_btn {
          border: 3px solid #a1b0ec;
          width: 180px;
          height: 60px;
          margin: 0;
          padding: 1.3rem 0;
          margin: 1.3rem 0;
        }
        .coach_name {
          width: 100%;
          height: auto;
          @include flex(center, flex-start);
          color: $dark;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 800;
          padding: 1.3rem 0;
          img {
            width: 25px;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
        }
        .coach_info {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          .coach_info_overlay {
            width: 100%;
            color: $dark;
            text-align: justify;
            font-size: 1rem;
            line-height: 1.7rem;
            .info_quote {
              font-weight: 800;
              color: $dark;
              font-style: italic;
            }
          }
        }
      }
    }
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .coach_info_container {
    width: 100vw;
    height: 100vh;
    z-index: 120;
    position: absolute;
    bottom: 0;
    right: 0;
    .info_rect {
      position: fixed;
      left: 0;
      bottom: 0;
      transform: translate(0%, -44%);
      height: auto;
      min-height: 90vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      border-radius: 20px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
      z-index: 300;
      @include flex(center, center);
      padding: 0rem 4vw;
      .info_overlay {
        width: 100%;
        height: 100%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        position: relative;
        .back_btn {
          border: 3px solid #a1b0ec;
          width: 180px;
          height: 60px;
          margin: 0;
          padding: 1.3rem 0;
          margin: 1.3rem 0;
        }
        .coach_name {
          width: 100%;
          height: auto;
          @include flex(center, flex-start);
          color: $dark;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 800;
          padding: 1.3rem 0;
          img {
            width: 25px;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
        }
        .coach_info {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          .coach_info_overlay {
            width: 100%;
            color: $dark;
            text-align: justify;
            font-size: 1rem;
            line-height: 1.7rem;
            .info_quote {
              font-weight: 800;
              color: $dark;
              font-style: italic;
            }
          }
        }
      }
    }
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .coach_info_container {
    width: 100vw;
    height: 100vh;
    z-index: 120;
    position: absolute;
    bottom: 0;
    right: 0;
    .info_rect {
      position: fixed;
      left: 0;
      bottom: 0;
      transform: translate(0%, -44%);
      height: auto;
      min-height: 90vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      border-radius: 20px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
      z-index: 300;
      @include flex(center, center);
      padding: 0rem 4vw;
      .info_overlay {
        width: 100%;
        height: 100%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        position: relative;
        .back_btn {
          border: 3px solid #a1b0ec;
          width: 180px;
          height: 60px;
          margin: 0;
          padding: 1.3rem 0;
          margin: 1.3rem 0;
        }
        .coach_name {
          width: 100%;
          height: auto;
          @include flex(center, flex-start);
          color: $dark;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 800;
          padding: 1.3rem 0;
          img {
            width: 25px;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
        }
        .coach_info {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          .coach_info_overlay {
            width: 100%;
            color: $dark;
            text-align: justify;
            font-size: 1rem;
            line-height: 1.7rem;
            .info_quote {
              font-weight: 800;
              color: $dark;
              font-style: italic;
            }
          }
        }
      }
    }
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .coach_info_container {
    width: 100vw;
    height: 100vh;
    z-index: 120;
    position: absolute;
    bottom: 0;
    right: 0;
    .info_rect {
      position: fixed;
      left: 0;
      bottom: 0;
      transform: translate(0%, -16%);
      height: auto;
      min-height: 60vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      border-radius: 20px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
      z-index: 300;
      @include flex(center, center);
      padding: 0rem 4vw;
      .info_overlay {
        width: 100%;
        height: 100%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        position: relative;
        .back_btn {
          border: 3px solid #a1b0ec;
          width: 180px;
          height: 60px;
          margin: 0;
          padding: 1.3rem 0;
          margin: 1.3rem 0;
        }
        .coach_name {
          width: 100%;
          height: auto;
          @include flex(center, flex-start);
          color: $dark;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 800;
          padding: 1.3rem 0;
          img {
            width: 25px;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
        }
        .coach_info {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          .coach_info_overlay {
            width: 100%;
            color: $dark;
            text-align: justify;
            font-size: 1rem;
            line-height: 1.7rem;
            .info_quote {
              font-weight: 800;
              color: $dark;
              font-style: italic;
            }
          }
        }
      }
    }
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .coach_info_container {
    width: 100vw;
    height: 100vh;
    z-index: 120;
    position: absolute;
    bottom: 0;
    right: 0;
    .info_rect {
      position: fixed;
      left: 0;
      top: 0;
      transform: translate(0%, 0%);
      height: auto;
      min-height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      border-radius: 0px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
      z-index: 300;
      @include flex(center, center);
      padding: 0rem 4vw;
      .info_overlay {
        width: 100%;
        height: 100%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        position: relative;
        .back_btn {
          border: 3px solid #a1b0ec;
          width: 180px;
          height: 60px;
          margin: 0;
          padding: 1rem 0;
          margin: 1rem 0;
        }
        .coach_name {
          width: 100%;
          height: auto;
          @include flex(center, flex-start);
          color: $dark;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 800;
          padding: 1rem 0;
          img {
            width: 25px;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
        }
        .coach_info {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          .coach_info_overlay {
            width: 100%;
            color: $dark;
            text-align: justify;
            font-size: 1rem;
            line-height: 1.7rem;
            .info_quote {
              font-weight: 800;
              color: $dark;
              font-style: italic;
            }
          }
        }
      }
    }
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .coach_info_container {
    width: 100vw;
    height: 100vh;
    z-index: 120;
    position: absolute;
    bottom: 0;
    right: 0;
    .info_rect {
      position: fixed;
      left: 0;
      top: 0;
      transform: translate(0%, 0%);
      height: auto;
      min-height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      border-radius: 0px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
      z-index: 300;
      @include flex(center, center);
      padding: 0rem 4vw;
      .info_overlay {
        width: 100%;
        height: 100%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        position: relative;
        .back_btn {
          border: 3px solid #a1b0ec;
          width: 180px;
          height: 60px;
          margin: 0;
          padding: 1rem 0;
          margin: 1rem 0;
        }
        .coach_name {
          width: 100%;
          height: auto;
          @include flex(center, flex-start);
          color: $dark;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 800;
          padding: 1rem 0;
          img {
            width: 25px;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
        }
        .coach_info {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          .coach_info_overlay {
            width: 100%;
            color: $dark;
            text-align: justify;
            font-size: 1rem;
            line-height: 1.7rem;
            .info_quote {
              font-weight: 800;
              color: $dark;
              font-style: italic;
            }
          }
        }
      }
    }
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .coach_info_container {
    width: 100vw;
    height: 100vh;
    z-index: 120;
    position: absolute;
    bottom: 0;
    right: 0;
    .info_rect {
      position: fixed;
      left: 0;
      top: 0;
      transform: translate(0%, 0%);
      height: auto;
      min-height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      border-radius: 0px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
      z-index: 300;
      @include flex(center, center);
      padding: 0rem 4vw;
      .info_overlay {
        width: 100%;
        height: 100%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        position: relative;
        .back_btn {
          border: 3px solid #a1b0ec;
          width: 180px;
          height: 60px;
          margin: 0;
          padding: 1rem 0;
          margin: 1rem 0;
        }
        .coach_name {
          width: 100%;
          height: auto;
          @include flex(center, flex-start);
          color: $dark;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 800;
          padding: 1rem 0;
          img {
            width: 25px;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
        }
        .coach_info {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          .coach_info_overlay {
            width: 100%;
            color: $dark;
            text-align: justify;
            font-size: 1rem;
            line-height: 1.7rem;
            .info_quote {
              font-weight: 800;
              color: $dark;
              font-style: italic;
            }
          }
        }
      }
    }
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
}
</style>
