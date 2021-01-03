<template>
  <div class="nav_container">
    <div class="nav_bg_blur" @click="isNavActive()"></div>
    <div class="nav">
      <ul class="nav_links_container">
        <li class="route_link">
          <router-link class="route_link" to="/"
            >Strona&nbsp;główna</router-link
          >
        </li>
        <li class="route_link">O&nbsp;nas</li>
        <li class="route_link">Trenerzy</li>
        <li class="route_link">Opinie</li>
        <li class="route_link">
          <router-link class="route_link" to="/harmonogram"
            >Harmonogram&nbsp;treningów</router-link
          >
        </li>
        <li class="route_link">
          <router-link class="route_link" to="/wydarzenia"
            >Wydarzenia</router-link
          >
        </li>
      </ul>
      <div class="forpro_insights">
        <h1>ForPro</h1>
        <a class="forprohttps" href="https://www.forpro.pl/" target="_blank"
          >www.forpro.pl</a
        >
        <p class="phone_contact">Tel.&nbsp;(22)&nbsp;161&nbsp;54&nbsp;55</p>
        <p class="email_contact">sklep@forpro.pl</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Navigation",
  computed: {
    ...mapState(["navActive"])
  },
  methods: {
    ...mapMutations(["isNavActive"])
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

.nav_container {
  width: 100vw;
  height: 100vh;
  z-index: 12;
  position: absolute;
  top: 0;
  right: 0;
  .nav_bg_blur {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background: rgba(24, 23, 23, 0.88);
    display: none;
    opacity: 0;
  }
  .nav {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 32.5vw;
    background: rgb(255, 255, 255);
    box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
    z-index: 100;
    transform: translateX(130%);
    @include flex(center, space-between);
    flex-direction: column;
    .nav_links_container {
      min-width: 50%;
      width: 100%;
      height: 42%;
      @include flex(center, space-between);
      flex-direction: column;
      z-index: 299;
      margin-top: 35%;
      .route_link {
        color: $dark;
        list-style: none;
        text-decoration: none;
        cursor: pointer;
        font-family: "Red Hat Display", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        router-link {
          color: $dark;
        }
        &:hover {
          color: $blue;
          transition: 0.1s ease-in-out;
        }
      }
    }
    .forpro_insights {
      @include flex(center, space-around);
      flex-direction: column;
      width: 100%;
      height: auto;
      font-size: 0.9rem;
      margin-bottom: 10%;
      h1 {
        color: $dark;
        text-transform: uppercase;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 600;
        margin: 4px 0;
        font-size: 0.9rem;
      }
      .forprohttps {
        color: $blue;
        margin: 4px 0;
      }
      .phone_contact {
        color: #8a8a8a;
        margin: 4px 0;
      }
      .email_contact {
        color: #8a8a8a;
        margin: 4px 0;
      }
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 0.8rem;
        margin-bottom: 20%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 2px 0;
          font-size: 0.8rem;
        }
        .forprohttps {
          color: $blue;
          margin: 2px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 35%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.4rem;
          font-weight: 400;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 1rem;
        margin-bottom: 20%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 2px 0;
          font-size: 1rem;
        }
        .forprohttps {
          color: $blue;
          margin: 2px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 30%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.4rem;
          font-weight: 400;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 1rem;
        margin-bottom: 20%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 2px 0;
          font-size: 1rem;
        }
        .forprohttps {
          color: $blue;
          margin: 2px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 30%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.4rem;
          font-weight: 400;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 1rem;
        margin-bottom: 15%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 2px 0;
          font-size: 1rem;
        }
        .forprohttps {
          color: $blue;
          margin: 2px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 28%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 2rem;
          font-weight: 400;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 1.2rem;
        margin-bottom: 15%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 4px 0;
          font-size: 1.2rem;
        }
        .forprohttps {
          color: $blue;
          margin: 4px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 4px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 4px 0;
        }
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 6%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 4px;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 0.6rem;
        margin-bottom: 4%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 2px 0;
          font-size: 0.6rem;
        }
        .forprohttps {
          color: $blue;
          margin: 2px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 10%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 8px;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 0.6rem;
        margin-bottom: 4%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 2px 0;
          font-size: 0.6rem;
        }
        .forprohttps {
          color: $blue;
          margin: 2px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        height: 42%;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 6%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 8px;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 0.6rem;
        margin-bottom: 4%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 2px 0;
          font-size: 0.6rem;
        }
        .forprohttps {
          color: $blue;
          margin: 2px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 2px 0;
        }
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .nav_container {
    width: 100vw;
    height: 100vh;
    z-index: 12;
    .nav_bg_blur {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99;
      background: rgba(24, 23, 23, 0.88);
      display: none;
      opacity: 0;
    }
    .nav {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgb(255, 255, 255);
      box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.5);
      z-index: 100;
      transform: translateX(130%);
      @include flex(center, space-between);
      flex-direction: column;
      .nav_links_container {
        min-width: 50%;
        width: 100%;
        min-height: 42%;
        height: auto;
        @include flex(center, space-between);
        flex-direction: column;
        z-index: 299;
        margin-top: 15%;
        .route_link {
          color: $dark;
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          font-family: "Red Hat Display", sans-serif;
          font-size: 1.4rem;
          font-weight: 400;
          margin-bottom: 10px;
          router-link {
            color: $dark;
          }
          &:hover {
            color: $blue;
            transition: 0.1s ease-in-out;
          }
        }
      }
      .forpro_insights {
        @include flex(center, space-around);
        flex-direction: column;
        width: 100%;
        height: auto;
        font-size: 0.8rem;
        margin-bottom: 4%;
        h1 {
          color: $dark;
          text-transform: uppercase;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 600;
          margin: 4px 0;
          font-size: 0.8rem;
        }
        .forprohttps {
          color: $blue;
          margin: 4px 0;
        }
        .phone_contact {
          color: #8a8a8a;
          margin: 4px 0;
        }
        .email_contact {
          color: #8a8a8a;
          margin: 4px 0;
        }
      }
    }
  }
}

// --------------------------------------------------- KEYFRAMES ANIMATIONS ---------------------------------------------------
// --------------------------------------------------- JAVASCRIPT CLASSES -----------------------------------------------------

.nav-active {
  animation: navTransform 0.3s ease-in-out both;
}

@keyframes navTransform {
  0% {
    transform: translateX(130%);
  }
  100% {
    transform: translateX(0%);
  }
}

.nav-inactive {
  animation: navTransformBack 0.3s ease-in-out both;
}

@keyframes navTransformBack {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(130%);
  }
}

.route_link-active {
  animation: navLinksAnim 0.3s ease-in-out both;
}

@keyframes navLinksAnim {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
