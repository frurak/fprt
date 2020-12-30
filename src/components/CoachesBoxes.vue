<template>
  <div class="coaches_boxes_container">
    <div class="coaches_box_overlay">
      <div class="coaches_box">
        <img
          src="@/assets/mm.jpg"
          alt="Maciej Małecki ForPro Running Team"
          class="mm"
        />
        <div class="box_fg"></div>
        <div class="coach_text">
          <h1 class="coach_name">Maciej Małecki</h1>
          <p class="coach_more_info">Więcej informacji</p>
        </div>
      </div>
    </div>
    <div class="coaches_box_overlay">
      <div class="coaches_box">
        <img
          src="@/assets/ps.jpg"
          alt="Piotr Strzelecki ForPro Running Team"
          class="mm"
        />
        <div class="box_fg"></div>
        <div class="coach_text">
          <h1 class="coach_name">Piotr Strzelecki</h1>
          <p class="coach_more_info">Więcej informacji</p>
        </div>
      </div>
    </div>
    <div class="coaches_box_overlay">
      <div class="coaches_box">
        <img
          src="@/assets/rk.jpg"
          alt="Rafał Krzeszewski ForPro Running Team"
          class="mm"
        />
        <div class="box_fg"></div>
        <div class="coach_text">
          <h1 class="coach_name">Rafał Krzeszewski</h1>
          <p class="coach_more_info">Więcej informacji</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoachesBoxes"
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

.coaches_boxes_container {
  width: 100%;
  height: 60%;
  @include flex(center, center);
  .coaches_box_overlay {
    width: 1/3;
    height: 100%;
    overflow: hidden;
    @include flex(center, center);
    background: red;
    .coaches_box {
      width: 100%;
      height: 100%;
      @include flex(center, center);
      position: relative;
      img {
        height: 100%;
        width: auto;
      }
      .box_fg {
        width: 100%;
        height: 50%;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(9, 7, 13, 0)
        );
        mix-blend-mode: hard-light;
      }
      .coach_text {
        position: absolute;
        left: 0;
        bottom: 5%;
        @include flex(center, flex-start);
        flex-direction: column;
        width: 100%;
        height: 10%;
        .coach_name {
          font-family: "Red Hat Display", sans-serif;
          letter-spacing: 5px;
          font-weight: 800;
          font-size: 1rem;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .coach_more_info {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: underline;
          opacity: 0;
          &:hover {
            color: $blue;
          }
        }
      }
      &:hover .coach_more_info {
        opacity: 1;
        transition: 0.3s ease-in-out;
      }
    }
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .coaches_boxes_container {
    width: 100%;
    height: 65%;
    @include flex(center, center);
    flex-direction: column;
    .coaches_box_overlay {
      width: 1/3;
      height: 100%;
      overflow: hidden;
      @include flex(center, center);
      .coaches_box {
        width: 100%;
        height: 100%;
        @include flex(center, center);
        position: relative;
        img {
          width: 100%;
          height: auto;
        }
        .box_fg {
          width: 100%;
          height: 50%;
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(
            0deg,
            rgba(34, 40, 64, 1),
            rgba(9, 7, 13, 0)
          );
          mix-blend-mode: hard-light;
        }
        .coach_text {
          position: absolute;
          left: 0;
          bottom: 10%;
          @include flex(center, flex-start);
          flex-direction: column;
          width: 100%;
          height: 10%;
          .coach_name {
            font-family: "Red Hat Display", sans-serif;
            letter-spacing: 5px;
            font-weight: 800;
            font-size: 1rem;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
          .coach_more_info {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: underline;
            opacity: 0;
            &:hover {
              color: $blue;
            }
          }
        }
        &:hover .coach_more_info {
          opacity: 1;
          transition: 0.3s ease-in-out;
        }
      }
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .coaches_boxes_container {
    width: 100%;
    height: 65%;
    @include flex(center, center);
    flex-direction: column;
    .coaches_box_overlay {
      width: 1/3;
      height: 100%;
      overflow: hidden;
      @include flex(center, center);
      .coaches_box {
        width: 100%;
        height: 100%;
        @include flex(center, center);
        position: relative;
        img {
          width: 100%;
          height: auto;
        }
        .box_fg {
          width: 100%;
          height: 50%;
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(
            0deg,
            rgba(34, 40, 64, 1),
            rgba(9, 7, 13, 0)
          );
          mix-blend-mode: hard-light;
        }
        .coach_text {
          position: absolute;
          left: 0;
          bottom: 10%;
          @include flex(center, flex-start);
          flex-direction: column;
          width: 100%;
          height: 10%;
          .coach_name {
            font-family: "Red Hat Display", sans-serif;
            letter-spacing: 5px;
            font-weight: 800;
            font-size: 1rem;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
          .coach_more_info {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: underline;
            opacity: 0;
            &:hover {
              color: $blue;
            }
          }
        }
        &:hover .coach_more_info {
          opacity: 1;
          transition: 0.3s ease-in-out;
        }
      }
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  
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
