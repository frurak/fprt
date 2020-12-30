<template>
  <div class="cross_box">
    <span id="vert_line"></span>
    <span id="hori_line"></span>
  </div>
</template>

<script>
export default {
  name: "Cross"
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

.cross_box {
  position: absolute;
  @include flex(center, center);
  width: 23px;
  height: 23px;
  opacity: 0.6;
  #vert_line {
    width: 3.5px;
    height: 100%;
    background: $blue;
    border-radius: 5px;
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      top: 0%;
      width: 3.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      transform: rotate(90deg);
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 60% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 0% !important;
  }
  #cross4, #cross5, #cross6 {
    display: none;
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 0% !important;
  }
  #cross4, #cross5, #cross6 {
    display: none;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 0% !important;
  }
  #cross4, #cross5, #cross6 {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 0% !important;
  }
  #cross4 {
    right: 8% !important;
    top: 3% !important;
  }
  #cross5, #cross6 {
    display: none;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 23px;
    height: 23px;
    opacity: 0.6;
    #vert_line {
      width: 3.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 3.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 0% !important;
  }
  #cross4 {
    right: 8% !important;
    top: 3% !important;
  }
  #cross5, #cross6 {
    display: none;
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 0% !important;
  }
  #cross4, #cross5, #cross6 {
    display: none;
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 1% !important;
  }
  #cross4, #cross5, #cross6 {
    display: none;
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross3 {
    right: 30% !important;
    top: 1% !important;
  }
  #cross4 {
    right: 8% !important;
    top: 3% !important;
  }
  #cross5, #cross6 {
    display: none;
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .cross_box {
    position: absolute;
    @include flex(center, center);
    width: 15px;
    height: 15px;
    opacity: 0.6;
    #vert_line {
      width: 2.5px;
      height: 100%;
      background: $blue;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        top: 0%;
        width: 2.5px;
        height: 100%;
        background: $blue;
        border-radius: 5px;
        transform: rotate(90deg);
      }
    }
  }
  #cross1 {
    right: 58% !important;
    top: 12% !important;
  }
  #cross2 {
    right: 33% !important;
    top: 18% !important;
  }
  #cross4 {
    right: 8% !important;
    top: 3% !important;
  }
  #cross5, #cross6 {
    display: none;
  }
}
</style>
