/* eslint-disable prettier/prettier */
<template>
  <div class="opinion_single_container">
    <div class="opinions_overlay">
      <div class="opinion">
        <div class="opinion_author">Krzysztof</div>
        <h4 class="author_descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          gravida, justo id tempus viverra, risus eros tempus libero, vestibulum
          venenatis nunc nulla ac ex. Nullam tincidunt bibendum quam vitae
          tempus. Morbi interdum sagittis orci a aliquet. Donec suscipit quis
          turpis sit amet pharetra. Nullam aliquam dolor non interdum porta.
          Integer sit amet dictum nunc. Quisque lectus nisi, congue quis mattis
          blandit, eleifend eget ante. Nulla vel porttitor tellus. Morbi eu urna
          facilisis, fermentum nulla ac, auctor neque. Integer in leo semper,
          porta sem convallis, ornare ex.
          <br />
          <br />
          Donec vehicula neque in ipsum luctus sollicitudin. Morbi nec nisi
          feugiat, commodo enim nec, posuere enim. Etiam vel ullamcorper libero.
          Nam varius purus quis egestas porttitor. Nulla et eros nec sem viverra
          euismod sit amet id justo. Aenean eu egestas arcu. Proin lectus arcu,
          condimentum in urna suscipit, feugiat consequat nibh. Nulla facilisi.
          Praesent convallis auctor ipsum ac iaculis.
        </h4>
      </div>
    </div>
    <div class="opinions_navigation">
      <span
        class="opinions_nav_btn"
        v-for="(opinion, index) in opinions.length"
        :key="opinion.id"
        @click="nextOpinion(opinion), realignOpinionsTop()"
        :class="index === 0 ? 'opinions_nav_btn-active' : ''"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpinionsSingle",
  data() {
    return {
      opinions: [
        {
          id: 1,
          name: "Krzysztof",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida,
            justo id tempus viverra, risus eros tempus libero, vestibulum venenatis
            nunc nulla ac ex. Nullam tincidunt bibendum quam vitae tempus. Morbi
            interdum sagittis orci a aliquet. Donec suscipit quis turpis sit amet
            pharetra. Nullam aliquam dolor non interdum porta. Integer sit amet dictum
            nunc. Quisque lectus nisi, congue quis mattis blandit, eleifend eget ante.
            Nulla vel porttitor tellus. Morbi eu urna facilisis, fermentum nulla ac,
            auctor neque. Integer in leo semper, porta sem convallis, ornare ex.
            <br />
            <br />
            Donec vehicula neque in ipsum luctus sollicitudin. Morbi nec nisi feugiat,
            commodo enim nec, posuere enim. Etiam vel ullamcorper libero. Nam varius
            purus quis egestas porttitor. Nulla et eros nec sem viverra euismod sit
            amet id justo. Aenean eu egestas arcu. Proin lectus arcu, condimentum in
            urna suscipit, feugiat consequat nibh. Nulla facilisi. Praesent convallis
            auctor ipsum ac iaculis.
          `
        },
        {
          id: 2,
          name: "Alicja",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida,
            justo id tempus viverra, risus eros tempus libero, vestibulum venenatis
            nunc nulla ac ex. Nullam tincidunt bibendum quam vitae tempus. Morbi
            interdum sagittis orci a aliquet. Donec suscipit quis turpis sit amet
            pharetra. Nullam aliquam dolor non interdum porta. Integer sit amet dictum.
            Donec vehicula neque in ipsum luctus sollicitudin. Morbi nec nisi feugiat,
            commodo enim nec, posuere enim. Etiam vel ullamcorper libero. Nam varius
            purus quis egestas porttitor.
          `
        },
        {
          id: 3,
          name: "Piotr",
          description: `Integer lacus nunc, euismod sit amet urna nec, rhoncus mattis libero. Quisque vel vehicula justo, et consectetur tortor. Mauris ac sagittis justo. Vestibulum imperdiet eros nec tellus finibus, nec placerat tellus ullamcorper. Pellentesque porta viverra turpis sed pretium. Vivamus consequat tristique tellus eget molestie. Aenean cursus, velit et vehicula venenatis, quam ligula commodo purus, id varius quam nisi sed lacus. Cras tristique sollicitudin lectus, at hendrerit elit fringilla sit amet. In in facilisis turpis. In vehicula ipsum lacus, a feugiat est blandit ut. Suspendisse volutpat accumsan nulla ac pellentesque. Vestibulum sapien tortor, convallis ut porttitor nec, lacinia nec eros. Etiam gravida rhoncus laoreet. Praesent mattis maximus eleifend.
          <br />
          <br />
          Fusce ornare mauris eget tortor fringilla elementum vitae et elit. Nullam vitae porttitor tellus, id rhoncus nibh. Integer tortor augue, aliquam et risus quis, hendrerit pulvinar nisi. Quisque at lacinia mi. Donec at sem nunc. Sed tempor ut ante non elementum. Fusce et justo id arcu consequat egestas. Cras ipsum tellus, egestas quis scelerisque at, mattis vel neque. Integer dictum risus eu euismod efficitur. Nunc eu ante tristique, hendrerit sem et, molestie ex. Donec commodo consequat ante. Nunc id placerat felis. Sed hendrerit ipsum non turpis sollicitudin condimentum. Cras sit amet sagittis diam.
          `
        },
        {
          id: 4,
          name: "Damian",
          description: `Integer lacus nunc, euismod sit amet urna nec, rhoncus mattis libero. Quisque vel vehicula justo, et consectetur tortor. Mauris ac sagittis justo. Vestibulum imperdiet eros nec tellus finibus, nec placerat tellus ullamcorper. Pellentesque porta viverra turpis sed pretium. Vivamus consequat tristique tellus eget molestie. Aenean cursus, velit et vehicula venenatis, quam ligula commodo purus, id varius quam nisi sed lacus. Cras tristique sollicitudin lectus, at hendrerit elit fringilla sit amet. In in facilisis turpis. In vehicula ipsum lacus, a feugiat est blandit ut. Suspendisse volutpat accumsan nulla ac pellentesque. Vestibulum sapien tortor, convallis ut porttitor nec, lacinia nec eros. Etiam gravida rhoncus laoreet. Praesent mattis maximus eleifend.
          `
        },
        {
          id: 5,
          name: "Robert",
          description: `Integer lacus nunc, euismod sit amet urna nec, rhoncus mattis libero. Quisque vel vehicula justo, et consectetur tortor. Mauris ac sagittis justo. Vestibulum imperdiet eros nec tellus finibus, nec placerat tellus ullamcorper. Pellentesque porta viverra turpis sed pretium. Vivamus consequat tristique tellus eget molestie. Aenean cursus, velit et vehicula venenatis, quam ligula commodo purus, id varius quam nisi sed lacus. Cras tristique sollicitudin lectus, at hendrerit elit fringilla sit amet. In in facilisis turpis. In vehicula ipsum lacus, a feugiat est blandit ut. Suspendisse volutpat accumsan nulla ac pellentesque. Vestibulum sapien tortor, convallis ut porttitor nec, lacinia nec eros. Etiam gravida rhoncus laoreet. Praesent mattis maximus eleifend.
          <br />
          <br />
          Vestibulum sapien tortor, convallis ut porttitor nec, lacinia nec eros. Etiam gravida rhoncus laoreet. Praesent mattis maximus eleifend.
          `
        }
      ]
    };
  },
  methods: {
    nextOpinion(index) {
      const opinionAuthor = document.querySelector(".opinion_author");
      const opinionDescription = document.querySelector(".author_descr");
      const opinionNav = document.querySelectorAll(".opinions_navigation span");

      opinionDescription.style.transform = "translateX(-110%)";
      opinionDescription.style.transition = "0.20s ease-in-out";

      setTimeout(() => {
        opinionAuthor.innerHTML = this.opinions[index - 1].name;
        opinionDescription.innerHTML = this.opinions[index - 1].description;
      }, 250);

      setTimeout(() => {
        opinionDescription.style.transform = "translateX(0%)";
      }, 250);

      opinionNav.forEach((opinion, ind) => {
        opinion.classList.remove("opinions_nav_btn-active");
        if (ind === index - 1) {
          opinion.classList.add("opinions_nav_btn-active");
        }
      });
    },
    // scroll back to top after opinions navigation click
    realignOpinionsTop() {
      const header = document.querySelector(".opinions_header");
      const desktopMedia = window.matchMedia("(max-width: 1199px)");

      if (desktopMedia.matches) {
        setTimeout(() => {
          window.scrollTo({
            left: 0,
            top: header.offsetTop,
            behavior: "smooth"
          });
        }, 100);
      }
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

.opinion_single_container {
  width: 100%;
  height: 70%;
  @include flex(center, center);
  flex-direction: column;
  padding: 5rem 5.5vw 8rem 5.5vw;
  // border: 1px solid white;
  .opinions_overlay {
    width: 60vw;
    min-height: 50vh;
    height: auto;
    overflow-y: hidden;
    @include flex(flex-start, flex-start);
    flex-direction: row;
    .opinion {
      min-width: 60vw;
      height: 100%;
      @include flex(center, flex-start);
      flex-direction: column;
      // border: 1px solid white;
      margin: 0 20px;
      &:nth-child(1) {
        margin-left: 0px;
      }
      &:nth-last-child(1) {
        margin-right: 0px;
      }
      .opinion_author {
        color: $blue;
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
      }
      .author_descr {
        font-size: 1rem;
        line-height: 1.7rem;
        font-weight: 200;
        text-align: center;
        // max-width: 65%;
        margin: 5rem 0;
      }
    }
  }
  .opinions_navigation {
    width: auto;
    @include flex(center, space-between);
    .opinions_nav_btn {
      display: block;
      background: $blue;
      border-radius: 50%;
      border: 3px solid #222840;
      width: 20px;
      height: 20px;
      margin: 0 10px;
      cursor: pointer;
      opacity: 0.3;
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 30vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    height: 70%;
    @include flex(center, center);
    flex-direction: column;
    padding: 0rem 0vw 5rem 0vw;
    // border: 1px solid white;
    .opinions_overlay {
      width: 100%;
      min-height: 50vh;
      height: auto;
      overflow-y: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: row;
      .opinion {
        min-width: 90vw;
        height: 100%;
        @include flex(center, flex-start);
        flex-direction: column;
        margin: 0 20px;
        &:nth-child(1) {
          margin-left: 0px;
        }
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        .opinion_author {
          color: $blue;
          font-size: 1.6rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
        }
        .author_descr {
          font-size: 1rem;
          line-height: 1.7rem;
          font-weight: 200;
          text-align: center;
          // max-width: 65%;
          margin: 3rem 0;
        }
      }
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
        opacity: 0.3;
      }
    }
  }
}

// --------------------------------------------------- KEYFRAMES ANIMATIONS ---------------------------------------------------
// --------------------------------------------------- JAVASCRIPT CLASSES -----------------------------------------------------

.opinions_nav_btn-active {
  opacity: 1 !important;
}
</style>
