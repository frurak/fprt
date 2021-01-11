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
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleContent",
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
  }
}
</style>
