/* eslint-disable prettier/prettier */
<template>
  <div class="opinion_single_container">
    <div class="opinion_author">Krzysztof</div>
    <h4 class="author_descr">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida,
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
    </h4>
    <div class="opinions_navigation">
      <span class="opinions_nav_btn"></span>
      <span class="opinions_nav_btn"></span>
      <span class="opinions_nav_btn"></span>
      <span class="opinions_nav_btn"></span>
      <span class="opinions_nav_btn"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpinionsSingle"
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
  padding: 5rem 5.5vw;
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
    max-width: 65%;
    margin: 5rem 0;
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
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 80px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 40px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 0px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 0px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 0px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 80px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 120px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 100%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 120px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .opinion_single_container {
    width: 100%;
    min-height: 55%;
    @include flex(center, center);
    flex-direction: column;
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
      max-width: 80%;
      margin: 40px 0;
    }
    .opinions_navigation {
      width: auto;
      @include flex(center, space-between);
      margin-bottom: 120px;
      .opinions_nav_btn {
        display: block;
        background: $blue;
        border-radius: 50%;
        border: 3px solid #222840;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
