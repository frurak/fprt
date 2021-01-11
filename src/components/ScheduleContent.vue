<template>
  <div class="schedule_content_container">
    <div class="img_info_container">
      <div class="current_date">
        Bieżący miesiąc:
        <p>lipiec 2020</p>
      </div>
      <div class="more_info">Objaśnienia:</div>
      <div class="more_info_content">
        <div class="type">
          <div class="name">Treningi</div>
          <div class="description">
            Treningi to wspólne spotkania otwarte dla wszystkich członków grupy.
            <br />
            Spotykamy się regularnie w każdy piątek o godzinie 19.00 w różnych
            lokalizacjach w Warszawie. Treningi prowadzą trenerzy: Piotr
            Strzelecki, Maciej Małecki, Rafał Krzeszewski.
          </div>
        </div>
        <div class="type">
          <div class="name">Challenge's</div>
          <div class="description">
            Challenge to rodzaj treningów do samodzielnego wykonania przez
            zawodnika.
            <br />
            Sugerowane dni wykonania - środa i niedziela. Ostateczny dzień
            wykonania zadania pozostawiamy zawodnikowi, pamiętać należy jednak,
            żeby treningów nie wykonywać pod rząd dzień po dniu.
            <br />
            Jeżeli masz pytania odnośnie wykonania zadania, zwróć się
            bezpośrednio do jednego z
            <span @click="moveToCoachesSection()">trenerów</span>
            lub napisz do nas na
            <a href="https://www.facebook.com/forprorunningteam" target="_blank"
              >Facebooku</a
            >
            bądź
            <a
              href="https://www.instagram.com/forprorunningteam/"
              target="_blank"
              >Instagramie</a
            >.
          </div>
        </div>
      </div>
      <div class="other_info">Zwróć uwagę!</div>
      <div class="other_details">
        Daty, godziny bądź lokalizacje treningów jak i charakter challenge'y
        może ulec zmianie. Szczegóły każdego treningu i challenge'u jak i
        możliwe ich zmiany publikowane są na
        <a href="https://www.facebook.com/forprorunningteam" target="_blank"
          >Facebooku</a
        >
        grupy.
      </div>
    </div>
    <div class="img_container">
      <img
        src="@/assets/Harmonogram-web.jpg"
        alt="Harmomogram treningów ForPro Running Team"
        class="img_schedule"
        @click="zoomSchedule()"
      />
      <div class="close_img" @click="zoomSchedule()">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleContent",
  data() {
    return {
      imageOpen: false
    };
  },
  methods: {
    moveToCoachesSection() {
      // change route
      this.$router.push("/");

      // scroll to proper section
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: document.querySelector(".coaches_container").offsetTop, //about us section
          behavior: "smooth"
        });
      });
      this.$store.state.isScheduleRoute = false;
    },
    zoomSchedule() {
      const image = document.querySelector(".img_container");
      const closeBtn = document.querySelector(".close_img");
      const mediaMin1199 = window.matchMedia("(min-width: 1199px)");
      if (!this.imageOpen) {
        if (mediaMin1199.matches) {
          image.classList.add("img-open");
          setTimeout(() => {
            closeBtn.style.transform = "translateY(0%) rotate(45deg)";
          }, 200);
          this.imageOpen = true;
        }
      } else {
        if (mediaMin1199.matches) {
          image.classList.remove("img-open");
          closeBtn.style.transform = "translateY(-200%) rotate(45deg)";
          this.imageOpen = false;
        }
      }
    }
  }
};
</script>

<style lang="scss">
$dark: #09070d;
$blue: #5f76b5;
$grey: #8a8a8a;

@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.schedule_content_container {
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 5rem 5.5vw;
  @include flex(flex-start, center);
  .img_info_container {
    width: 100%;
    height: auto;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .current_date {
      @include flex(center, flex-start);
      padding-bottom: 1.3rem;
      p {
        margin-left: 15px;
        text-transform: uppercase;
        color: $blue;
        font-weight: 800;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
      }
    }
    .more_info_content {
      @include flex(flex-start, flex-start);
      flex-direction: column;
      width: 100%;
      height: auto;
      .type {
        width: 100%;
        height: 50%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        padding: 1.3rem 5.5vw 1.3rem 0;
        &:nth-last-child(1) {
          padding: 0 5.5vw 1.3rem 0;
        }
      }
      .name {
        text-transform: uppercase;
        font-family: "Red Hat Display", sans-serif;
        color: $blue;
        font-weight: 800;
        letter-spacing: 5px;
      }
      .description {
        color: $grey;
      }
    }
    .other_details {
      color: $grey;
      padding: 1.3rem 5.5vw 1.3rem 0;
    }
    a,
    span {
      color: $grey;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
  .img_container {
    width: 100%;
    height: auto;
    @include flex(center, center);
    background: $grey;
    .img_schedule {
      width: 100%;
      background: 2px solid #fff;
      cursor: zoom-in;
    }
    .close_img {
      display: none;
    }
  }
}

// --------------------------------------------------- KEYFRAMES ANIMATIONS ---------------------------------------------------
// --------------------------------------------------- JAVASCRIPT CLASSES -----------------------------------------------------

.img-open {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100% !important;
  height: 100% !important;
  background: rgba(24, 23, 23, 0.88) !important;
  z-index: 1000;
  overflow: hidden;
  .img_schedule {
    width: 70% !important;
    border-radius: 12px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.637);
    cursor: zoom-out !important;
  }
  .close_img {
    content: "+" !important ;
    width: 50px;
    height: 50px;
    background: $blue !important;
    color: $dark;
    position: absolute;
    top: 2vh;
    right: 2vw;
    @include flex(center, center);
    display: flex !important;
    border-radius: 50px;
    font-size: 1.6rem;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    transform: rotate(45deg) translateY(-200%);
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 3px 3px 20px rgba(0, 0, 0, 1);
      transform: scale(1.1) rotate(45deg);
      transition: 0.3s ease-in-out;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .schedule_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 4vw;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .img_info_container {
      width: 100%;
      height: auto;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .current_date {
        @include flex(center, flex-start);
        padding-bottom: 1.3rem;
        p {
          margin-left: 15px;
          text-transform: uppercase;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
          font-family: "Red Hat Display", sans-serif;
        }
      }
      .more_info_content {
        @include flex(flex-start, flex-start);
        flex-direction: column;
        width: 100%;
        height: auto;
        .type {
          width: 100%;
          height: 50%;
          @include flex(flex-start, flex-start);
          flex-direction: column;
          padding: 1.3rem 0 1.3rem 0;
          &:nth-last-child(1) {
            padding: 0 0 1.3rem 0;
          }
        }
        .name {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
        }
        .description {
          color: $grey;
        }
      }
      .other_details {
        color: $grey;
        padding: 1.3rem 0 1.3rem 0;
      }
      a,
      span {
        color: $grey;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
    .img_container {
      width: 100%;
      height: auto;
      @include flex(center, center);
      background: $grey;
      .img_schedule {
        width: 100%;
        background: 2px solid #fff;
        cursor: zoom-in;
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .schedule_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 4vw;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .img_info_container {
      width: 100%;
      height: auto;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .current_date {
        @include flex(center, flex-start);
        padding-bottom: 1.3rem;
        p {
          margin-left: 15px;
          text-transform: uppercase;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
          font-family: "Red Hat Display", sans-serif;
        }
      }
      .more_info_content {
        @include flex(flex-start, flex-start);
        flex-direction: column;
        width: 100%;
        height: auto;
        .type {
          width: 100%;
          height: 50%;
          @include flex(flex-start, flex-start);
          flex-direction: column;
          padding: 1.3rem 0 1.3rem 0;
          &:nth-last-child(1) {
            padding: 0 0 1.3rem 0;
          }
        }
        .name {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
        }
        .description {
          color: $grey;
        }
      }
      .other_details {
        color: $grey;
        padding: 1.3rem 0 1.3rem 0;
      }
      a,
      span {
        color: $grey;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
    .img_container {
      width: 100%;
      height: auto;
      @include flex(center, center);
      background: $grey;
      .img_schedule {
        width: 100%;
        background: 2px solid #fff;
        cursor: zoom-in;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .schedule_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 4vw;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .img_info_container {
      width: 100%;
      height: auto;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .current_date {
        @include flex(center, flex-start);
        padding-bottom: 1.3rem;
        p {
          margin-left: 15px;
          text-transform: uppercase;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
          font-family: "Red Hat Display", sans-serif;
        }
      }
      .more_info_content {
        @include flex(flex-start, flex-start);
        flex-direction: column;
        width: 100%;
        height: auto;
        .type {
          width: 100%;
          height: 50%;
          @include flex(flex-start, flex-start);
          flex-direction: column;
          padding: 1.3rem 0 1.3rem 0;
          &:nth-last-child(1) {
            padding: 0 0 1.3rem 0;
          }
        }
        .name {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
        }
        .description {
          color: $grey;
        }
      }
      .other_details {
        color: $grey;
        padding: 1.3rem 0 1.3rem 0;
      }
      a,
      span {
        color: $grey;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
    .img_container {
      width: 100%;
      height: auto;
      @include flex(center, center);
      background: $grey;
      .img_schedule {
        width: 100%;
        background: 2px solid #fff;
        cursor: zoom-in;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .schedule_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 4vw;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .img_info_container {
      width: 100%;
      height: auto;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .current_date {
        @include flex(center, flex-start);
        padding-bottom: 1.3rem;
        p {
          margin-left: 15px;
          text-transform: uppercase;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
          font-family: "Red Hat Display", sans-serif;
        }
      }
      .more_info_content {
        @include flex(flex-start, flex-start);
        flex-direction: column;
        width: 100%;
        height: auto;
        .type {
          width: 100%;
          height: 50%;
          @include flex(flex-start, flex-start);
          flex-direction: column;
          padding: 1.3rem 0 1.3rem 0;
          &:nth-last-child(1) {
            padding: 0 0 1.3rem 0;
          }
        }
        .name {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
        }
        .description {
          color: $grey;
        }
      }
      .other_details {
        color: $grey;
        padding: 1.3rem 0 1.3rem 0;
      }
      a,
      span {
        color: $grey;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
    .img_container {
      width: 100%;
      height: auto;
      @include flex(center, center);
      background: $grey;
      .img_schedule {
        width: 100%;
        background: 2px solid #fff;
        cursor: zoom-in;
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .schedule_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 4vw;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .img_info_container {
      width: 100%;
      height: auto;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .current_date {
        @include flex(center, flex-start);
        padding-bottom: 1.3rem;
        p {
          margin-left: 15px;
          text-transform: uppercase;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
          font-family: "Red Hat Display", sans-serif;
        }
      }
      .more_info_content {
        @include flex(flex-start, flex-start);
        flex-direction: column;
        width: 100%;
        height: auto;
        .type {
          width: 100%;
          height: 50%;
          @include flex(flex-start, flex-start);
          flex-direction: column;
          padding: 1.3rem 0 1.3rem 0;
          &:nth-last-child(1) {
            padding: 0 0 1.3rem 0;
          }
        }
        .name {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          color: $blue;
          font-weight: 800;
          letter-spacing: 5px;
        }
        .description {
          color: $grey;
        }
      }
      .other_details {
        color: $grey;
        padding: 1.3rem 0 1.3rem 0;
      }
      a,
      span {
        color: $grey;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
    .img_container {
      width: 100%;
      height: auto;
      @include flex(center, center);
      background: $grey;
      .img_schedule {
        width: 100%;
        background: 2px solid #fff;
        cursor: zoom-in;
      }
    }
  }
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
