<template>
  <div class="footer_container">
    <div class="links_container">
      <div class="links_box">
        <p class="links_header header_main" @click="openSection1()">
          Informacje
          <img src="@/assets/arrow.svg" class="section_arrow arrow1" />
        </p>
        <div class="links_overlay">
          <ul class="footer_links links_main links1">
            <router-link class="footer_link terms_link" to="/regulamin"
              ><p @click="scrollTopInTermsRoute()">
                Regulamin treningów
              </p></router-link
            >
            <router-link class="footer_link terms_link" to="/pomoc"
              ><p @click="scrollTopInHelpRoute()">
                Najczęściej zadawane pytania
              </p></router-link
            >
            <li class="footer_link">Korzyści z członkostwa</li>
          </ul>
        </div>
      </div>
      <div class="links_box">
        <p class="links_header header_main" @click="openSection2()">
          Partnerzy
          <img src="@/assets/arrow.svg" class="section_arrow arrow2" />
        </p>
        <div class="links_overlay">
          <ul class="footer_links links_main links2">
            <a href="https://www.forpro.pl/" target="_blank"
              ><li class="footer_link">ForPro</li></a
            >
            <a href="https://www.polar.com/pl" target="_blank"
              ><li class="footer_link">Polar</li></a
            >
            <a href="https://blackroll.com.pl/" target="_blank"
              ><li class="footer_link">BlackRoll</li></a
            >
            <a href="http://royal-wilanow.pl/" target="_blank"
              ><li class="footer_link">Royal Wilanów</li></a
            >
            <a href="https://4sportlab.pl/" target="_blank"
              ><li class="footer_link">4SL - For Sport Lab</li></a
            >
            <a href="https://www.magnesia.pl/" target="_blank"
              ><li class="footer_link">Magnesia</li></a
            >
          </ul>
        </div>
      </div>
      <div class="links_box">
        <p class="links_header header_main" @click="openSection3()">
          Nawigacja po stronie
          <img src="@/assets/arrow.svg" class="section_arrow arrow3" />
        </p>
        <div class="links_overlay">
          <ul class="footer_links links_main links3">
            <li class="route_link" @click="scrollTopFromFooter()">
              <router-link class="footer_link" to="/"
                >Strona główna</router-link
              >
            </li>
            <li class="footer_link" @click="scrollToAboutSection()">O nas</li>
            <li class="footer_link" @click="scrollToCoachesSection()">
              Trenerzy
            </li>
            <li class="footer_link" @click="scrollToOpinionsSection()">
              Opinie
            </li>
            <li class="route_link" @click="scrollTopInScheduleRoute()">
              <router-link class="footer_link" to="/harmonogram"
                >Harmonogram treningów</router-link
              >
            </li>
            <router-link class="footer_link" to="/wydarzenia"
              >Wydarzenia</router-link
            >
          </ul>
        </div>
      </div>
      <div class="links_box forpro_box">
        <p class="links_header header_forpro">ForPro</p>
        <div class="links_overlay">
          <ul class="footer_links links_forpro">
            <a href="https://www.forpro.pl/" target="_blank" class="forprohttp"
              >www.forpro.pl</a
            >
            <li class="footer_link">
              Tel. (22) 161 54 55
              <br />
              sklep@forpro.pl
            </li>
            <li class="footer_link">
              ul. Klimczaka 1
              <br />
              C.H. Royal Wilanów (Parter)
              <br />
              02-797 Warszawa
            </li>
            <li class="footer_link">
              Poniedziałek - Sobota 10.00 - 21.00
              <br />
              Niedziele handlowe 11.00 - 19.00
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rights_container">
      <div class="copyrights">
        2020 &copy; Sklep ForPro.
        <br class="copy_br" />
        Wszelkie prawa zastrzeżone.
      </div>
      <div class="rights_author">
        Projekt i wdrożenie
        <br class="copy_br" />
        - Filip Rurak
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      linksOpen1: false,
      linksOpen2: false,
      linksOpen3: false
    };
  },
  methods: {
    ...mapMutations([
      "scrollTopInTermsRoute",
      "scrollTopInHelpRoute",
      "scrollTopFromFooter",
      "scrollTopInScheduleRoute"
    ]),
    openSection1() {
      const arrow1 = document.querySelector(".arrow1");
      const links1 = document.querySelector(".links1");
      const mediaMax991 = window.matchMedia("(max-width: 991px)");

      if (mediaMax991.matches) {
        if (!this.linksOpen1) {
          links1.style.display = "flex";
          links1.classList.remove("close");
          links1.classList.add("open");

          arrow1.style.transform = "translateY(-50%) rotate(180deg)";
          arrow1.style.transition = "0.3s ease-in-out";

          this.linksOpen1 = true;
        } else {
          links1.classList.add("close");
          links1.classList.remove("open");

          arrow1.style.transform = "translateY(-50%) rotate(0deg)";
          arrow1.style.transition = "0.3s ease-in-out";

          setTimeout(() => {
            links1.style.display = "none";
          }, 200);

          this.linksOpen1 = false;
        }
      }
    },
    openSection2() {
      const arrow2 = document.querySelector(".arrow2");
      const links2 = document.querySelector(".links2");
      const mediaMax991 = window.matchMedia("(max-width: 991px)");

      if (mediaMax991.matches) {
        if (!this.linksOpen2) {
          links2.style.display = "flex";
          links2.classList.remove("close");
          links2.classList.add("open");

          arrow2.style.transform = "translateY(-50%) rotate(180deg)";
          arrow2.style.transition = "0.3s ease-in-out";

          this.linksOpen2 = true;
        } else {
          links2.classList.add("close");
          links2.classList.remove("open");

          arrow2.style.transform = "translateY(-50%) rotate(0deg)";
          arrow2.style.transition = "0.3s ease-in-out";

          setTimeout(() => {
            links2.style.display = "none";
          }, 200);

          this.linksOpen2 = false;
        }
      }
    },
    openSection3() {
      const arrow3 = document.querySelector(".arrow3");
      const links3 = document.querySelector(".links3");
      const mediaMax991 = window.matchMedia("(max-width: 991px)");

      if (mediaMax991.matches) {
        if (!this.linksOpen3) {
          links3.style.display = "flex";
          links3.classList.remove("close");
          links3.classList.add("open");

          arrow3.style.transform = "translateY(-50%) rotate(180deg)";
          arrow3.style.transition = "0.3s ease-in-out";

          this.linksOpen3 = true;
        } else {
          links3.classList.add("close");
          links3.classList.remove("open");

          arrow3.style.transform = "translateY(-50%) rotate(0deg)";
          arrow3.style.transition = "0.3s ease-in-out";

          setTimeout(() => {
            links3.style.display = "none";
          }, 200);

          this.linksOpen3 = false;
        }
      }
    },
    scrollToAboutSection() {
      // check if user is on '/regulamin' or '/pomoc' route
      if (
        this.$store.state.isTermRoute === true ||
        this.$store.state.isFAQRoute === true ||
        this.$store.state.isScheduleRoute === true
      ) {
        // change route to '/' (home)
        this.$router.push("/");
        // ...then
      }

      // scroll to proper section
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: document.querySelector(".about_container").offsetTop, //about us section
          behavior: "smooth"
        });
      });
    },
    scrollToCoachesSection() {
      // check if user is on '/regulamin' or '/pomoc' route
      if (
        this.$store.state.isTermRoute === true ||
        this.$store.state.isFAQRoute === true ||
        this.$store.state.isScheduleRoute === true
      ) {
        // change route to '/' (home)
        this.$router.push("/");
        // ...then
      }

      // scroll to proper section
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: document.querySelector(".coaches_container").offsetTop, //coaches section
          behavior: "smooth"
        });
      });
    },
    scrollToOpinionsSection() {
      // check if user is on '/regulamin' or '/pomoc' route
      if (
        this.$store.state.isTermRoute === true ||
        this.$store.state.isFAQRoute === true ||
        this.$store.state.isScheduleRoute === true
      ) {
        // change route to '/' (home)
        this.$router.push("/");
        // ...then
      }

      // scroll to proper section
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: document.querySelector(".opinions_container").offsetTop, //opinions section
          behavior: "smooth"
        });
      });
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

.footer_container {
  width: 100%;
  min-height: 50vh;
  @include flex(center, flex-start);
  flex-direction: column;
  .links_container {
    width: 100%;
    min-height: auto;
    @include flex(flex-start, space-between);
    padding: 0 5.5vw;
    position: relative;
    .links_box {
      width: auto;
      height: auto;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin: 80px 0;
      .links_header {
        text-transform: uppercase;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 20px;
        @include flex(center, center);
        position: relative;
        img {
          width: 15px;
          display: none;
        }
      }
      .links_overlay {
        @include flex(center, center);
        width: 100%;
        height: 100%;
        .footer_links {
          @include flex(flex-start, space-between);
          flex-direction: column;
          height: auto;
          list-style: none;
          .footer_link,
          router-link {
            color: $grey;
            font-size: 1rem;
            cursor: pointer;
            margin: 5px 0;
            text-decoration: none;
            &:hover {
              opacity: 0.8;
              transition: 0.1s ease-in-out;
            }
          }
          .forprohttp {
            text-decoration: underline;
            color: $blue;
            font-size: 0.9rem;
            cursor: pointer;
            margin: 5px 0;
          }
          a {
            text-decoration: none;
          }
          p {
            color: $grey;
          }
        }
      }
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: $blue;
      opacity: 0.3;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .rights_container {
    width: 100%;
    height: 13%;
    @include flex(center, space-between);
    padding: 2rem 5.5vw;
    position: relative;
    .copyrights {
      font-size: 1rem;
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: $blue;
      opacity: 0.3;
      position: absolute;
      left: 0;
      top: 0;
    }
    .rights_author {
      font-size: 1rem;
    }
    .copy_br {
      display: none;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .footer_container {
    width: 100%;
    min-height: 100vh;
    @include flex(center, flex-start);
    flex-direction: column;
    .links_container {
      width: 100%;
      height: 90%;
      height: auto;
      @include flex(center, space-between);
      flex-direction: column;
      padding: 3rem 4vw;
      position: relative;
      .links_box {
        width: auto;
        height: auto;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 20px 0;
        .links_header {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          margin-bottom: 0px;
          img {
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .header_forpro {
          margin-top: 4rem;
        }
        .header_main {
          width: 92vw;
        }
        .links_overlay {
          width: 100%;
          height: 100%;
          @include flex(center, center);
          overflow: hidden;
          .footer_links {
            @include flex(center, space-between);
            flex-direction: column;
            height: auto;
            list-style: none;
            margin-top: 20px;
            text-align: center;
            .footer_link,
            router-link {
              color: $grey;
              font-size: 1rem;
              cursor: pointer;
              margin: 5px 0;
              text-decoration: none;
              &:hover {
                opacity: 0.8;
                transition: 0.1s ease-in-out;
              }
            }
            .forprohttp {
              text-decoration: underline;
              color: $blue;
              font-size: 0.9rem;
              cursor: pointer;
              margin: 5px 0;
            }
          }
          .links_main {
            transform: translateY(-100%);
            display: none;
          }
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .rights_container {
      width: 100%;
      min-height: 10%;
      @include flex(center, center);
      flex-direction: column;
      padding: 1.3rem 4vw;
      position: relative;
      .copyrights {
        font-size: 0.6rem;
        @include flex(center, flex-start);
        margin-bottom: 5px;
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
      .rights_author {
        font-size: 0.6rem;
        text-align: right;
        @include flex(center, flex-end);
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .footer_container {
    width: 100%;
    min-height: 100vh;
    @include flex(center, flex-start);
    flex-direction: column;
    .links_container {
      width: 100%;
      height: 90%;
      height: auto;
      @include flex(center, space-between);
      flex-direction: column;
      padding: 3rem 4vw;
      position: relative;
      .links_box {
        width: auto;
        height: auto;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 20px 0;
        .links_header {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          margin-bottom: 0px;
          img {
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .header_forpro {
          margin-top: 4rem;
        }
        .header_main {
          width: 92vw;
        }
        .links_overlay {
          width: 100%;
          height: 100%;
          @include flex(center, center);
          overflow: hidden;
          .footer_links {
            @include flex(center, space-between);
            flex-direction: column;
            height: auto;
            list-style: none;
            margin-top: 20px;
            text-align: center;
            .footer_link,
            router-link {
              color: $grey;
              font-size: 1rem;
              cursor: pointer;
              margin: 5px 0;
              text-decoration: none;
              &:hover {
                opacity: 0.8;
                transition: 0.1s ease-in-out;
              }
            }
            .forprohttp {
              text-decoration: underline;
              color: $blue;
              font-size: 0.9rem;
              cursor: pointer;
              margin: 5px 0;
            }
          }
          .links_main {
            transform: translateY(-100%);
            display: none;
          }
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .rights_container {
      width: 100%;
      min-height: 10%;
      @include flex(center, center);
      flex-direction: column;
      padding: 1.3rem 4vw;
      position: relative;
      .copyrights {
        font-size: 0.6rem;
        @include flex(center, flex-start);
        margin-bottom: 5px;
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
      .rights_author {
        font-size: 0.6rem;
        text-align: right;
        @include flex(center, flex-end);
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .footer_container {
    width: 100%;
    min-height: 100vh;
    @include flex(center, flex-start);
    flex-direction: column;
    .links_container {
      width: 100%;
      height: 90%;
      height: auto;
      @include flex(center, space-between);
      flex-direction: column;
      padding: 3rem 4vw;
      position: relative;
      .links_box {
        width: auto;
        height: auto;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 20px 0;
        .links_header {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          margin-bottom: 0px;
          img {
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .header_forpro {
          margin-top: 4rem;
        }
        .header_main {
          width: 92vw;
        }
        .links_overlay {
          width: 100%;
          height: 100%;
          @include flex(center, center);
          overflow: hidden;
          .footer_links {
            @include flex(center, space-between);
            flex-direction: column;
            height: auto;
            list-style: none;
            margin-top: 20px;
            text-align: center;
            .footer_link,
            router-link {
              color: $grey;
              font-size: 1rem;
              cursor: pointer;
              margin: 5px 0;
              text-decoration: none;
              &:hover {
                opacity: 0.8;
                transition: 0.1s ease-in-out;
              }
            }
            .forprohttp {
              text-decoration: underline;
              color: $blue;
              font-size: 0.9rem;
              cursor: pointer;
              margin: 5px 0;
            }
          }
          .links_main {
            transform: translateY(-100%);
            display: none;
          }
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .rights_container {
      width: 100%;
      min-height: 10%;
      @include flex(center, center);
      flex-direction: column;
      padding: 1.3rem 4vw;
      position: relative;
      .copyrights {
        font-size: 0.6rem;
        @include flex(center, flex-start);
        margin-bottom: 5px;
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
      .rights_author {
        font-size: 0.6rem;
        text-align: right;
        @include flex(center, flex-end);
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .footer_container {
    width: 100%;
    height: 60vh;
    @include flex(center, flex-start);
    flex-direction: column;
    .links_container {
      width: 100%;
      height: 90%;
      height: auto;
      @include flex(center, space-between);
      flex-direction: column;
      padding: 2rem 4vw;
      position: relative;
      .links_box {
        width: auto;
        height: auto;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 20px 0;
        .links_header {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          margin-bottom: 0px;
          img {
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .header_forpro {
          margin-top: 2rem;
        }
        .header_main {
          width: 92vw;
        }
        .links_overlay {
          width: 100%;
          height: 100%;
          @include flex(center, center);
          overflow: hidden;
          .footer_links {
            @include flex(center, space-between);
            flex-direction: column;
            height: auto;
            list-style: none;
            margin-top: 20px;
            text-align: center;
            .footer_link,
            router-link {
              color: $grey;
              font-size: 1rem;
              cursor: pointer;
              margin: 5px 0;
              text-decoration: none;
              &:hover {
                opacity: 0.8;
                transition: 0.1s ease-in-out;
              }
            }
            .forprohttp {
              text-decoration: underline;
              color: $blue;
              font-size: 0.9rem;
              cursor: pointer;
              margin: 5px 0;
            }
          }
          .links_main {
            transform: translateY(-100%);
            display: none;
          }
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .rights_container {
      width: 100%;
      min-height: 10%;
      @include flex(center, space-between);
      flex-direction: row;
      padding: 1rem 4vw;
      position: relative;
      .copyrights {
        font-size: 0.6rem;
        @include flex(center, flex-start);
        margin-bottom: 5px;
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.6px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
      .rights_author {
        font-size: 0.6rem;
        text-align: right;
        @include flex(center, flex-end);
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .footer_container {
    width: 100%;
    height: auto;
    @include flex(center, flex-end);
    flex-direction: column;
    .links_container {
      width: 100%;
      height: auto;
      @include flex(flex-start, space-between);
      padding: 5rem 4vw;
      position: relative;
      .links_box {
        width: 25%;
        height: auto;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        margin: 0;
        // background: red;
        .links_header {
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          margin-bottom: 20px;
          @include flex(center, center);
          position: relative;
          img {
            width: 15px;
            display: none;
          }
        }
        .links_overlay {
          @include flex(center, flex-start);
          width: 100%;
          height: 100%;
          .footer_links {
            @include flex(flex-start, space-between);
            flex-direction: column;
            height: auto;
            list-style: none;
            .footer_link,
            router-link {
              color: $grey;
              font-size: 1rem;
              cursor: pointer;
              margin: 5px 0;
              text-decoration: none;
              &:hover {
                opacity: 0.8;
                transition: 0.1s ease-in-out;
              }
            }
            .forprohttp {
              text-decoration: underline;
              color: $blue;
              font-size: 0.9rem;
              cursor: pointer;
              margin: 5px 0;
            }
          }
        }
        .links_main {
          transform: translateY(0%);
          display: flex;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .rights_container {
      width: 100%;
      height: 10%;
      @include flex(center, space-between);
      padding: 3rem 5.5vw;
      position: relative;
      .copyrights {
        font-size: 1rem;
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: $blue;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
      }
      .rights_author {
        font-size: 1rem;
      }
      .copy_br {
        display: none;
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

.open {
  animation: linksOpen 0.3s ease-in-out both;
}
.close {
  animation: linksClose 0.3s ease-in-out both;
}

@keyframes linksOpen {
  0% {
    transform: translateY(-120%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes linksClose {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-120%);
  }
}

.arrowFlip {
  transform: translateY(-50%) rotate(45deg);
  //   opacity: 0;
}
.arrowFlipBack {
  transform: translateY(-50%) translateX(0%);
}
</style>
