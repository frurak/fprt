<template>
  <div class="button_big">{{ btntext }}</div>
</template>

<script>
export default {
  name: "ButtonBig",
  props: {
    btntext: String
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

.button_big {
  width: 200px;
  height: 60px;
  background: $blue;
  border-radius: 20vw;
  border: 3px solid #222840;
  margin-top: 6.4vh;
  cursor: pointer;
  @include flex(center, center);
  color: #fff;
  font-size: 1rem;
  font-weight: 200;
  &:hover {
    background: rgba(95, 118, 181, 0.6);
    transition: 0.3s background ease-in-out;
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .button_big {
    width: 180px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 1rem;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 200;
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .button_big {
    width: 180px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 4vh;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 200;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .button_big {
    width: 180px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 4vh;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 200;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .button_big {
    width: 200px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 4vh;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .button_big {
    width: 200px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 4vh;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .button_big {
    width: 200px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 1rem;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .button_big {
    width: 200px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 1.6rem;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .button_big {
    width: 200px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 1.6rem;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .button_big {
    width: 200px;
    height: 60px;
    background: $blue;
    border-radius: 20vw;
    border: 3px solid #222840;
    margin-top: 1.6rem;
    cursor: pointer;
    @include flex(center, center);
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
  }
}
</style>
