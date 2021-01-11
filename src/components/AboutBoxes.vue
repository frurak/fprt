<template>
  <div class="about_boxes_container">
    <div class="knowledge_box">
      <div class="box_image_overlay">
        <img
          src="@/assets/aw-16.jpg"
          alt="ForPro Running Team"
          class="knowledge_img"
        />
        <div class="img_fg"></div>
        <div class="img_txt">wiedza</div>
      </div>
      <div class="box_description">
        Trenuj pod okiem wykwalifikowanych sportowców posiadających wiedzę
        wszechstronnie kształtującą zawodników.
      </div>
      <ButtonBig btntext="Poznaj trenerów" class="box_btn" />
    </div>
    <div class="people_box">
      <div class="box_image_overlay">
        <img
          src="@/assets/aw-18.jpg"
          alt="ForPro Running Team"
          class="people_img"
        />
        <div class="img_fg"></div>
        <div class="img_txt">ludzie</div>
      </div>
      <div class="box_description">
        Trenuj w gronie ludzi z pasją, dzielących się zróżnicowaną wiedzą,
        doświadczeniem i własnymi pomysłami.
      </div>
      <ButtonBig btntext="Czytaj opinie" class="box_btn" />
    </div>
    <div class="experience_box">
      <div class="box_image_overlay">
        <img
          src="@/assets/aw-44.jpg"
          alt="ForPro Running Team"
          class="experience_img"
        />
        <div class="img_fg"></div>
        <div class="img_txt">doświadczenie</div>
      </div>
      <div class="box_description">
        Czerp garściami z doświadczenia i wiedzy trenerów realizując treningi
        grupowe oraz indywidualne.
      </div>
      <ButtonBig btntext="Zaplanuj drogę" class="box_btn" />
    </div>
  </div>
</template>

<script>
import ButtonBig from "@/components/ButtonBig.vue";

export default {
  name: "AboutBoxes",
  components: {
    ButtonBig
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

.about_boxes_container {
  width: 100%;
  min-height: 70%;
  @include flex(flex-start, space-between);
  padding: 0 7vw;
  .knowledge_box {
    min-height: 70%;
    height: auto;
    width: 30%;
    margin-top: 10vh;
    @include flex(flex-start, flex-start);
    flex-direction: column;
  }
  .people_box {
    min-height: 70%;
    height: auto;
    width: 30%;
    @include flex(flex-start, flex-start);
    flex-direction: column;
  }
  .experience_box {
    min-height: 70%;
    height: auto;
    width: 30%;
    margin-top: 20vh;
    @include flex(flex-start, flex-start);
    flex-direction: column;
  }
  .box_image_overlay {
    width: 100%;
    min-height: 400px;
    border-radius: 12px;
    overflow: hidden;
    @include flex(center, center);
    position: relative;
    img {
      min-height: 400px;
      object-fit: cover;
      object-position: center;
    }
    .img_fg {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      background: linear-gradient(
        0deg,
        rgba(34, 40, 64, 1),
        rgba(39, 40, 43, 0) 85%
      );
    }
    .knowledge_img {
      width: 170%;
      transform: translateX(5%);
    }
    .people_img {
      width: 160%;
    }
    .experience_img {
      width: 160%;
    }
    .img_txt {
      position: absolute;
      left: 8%;
      bottom: 8%;
      z-index: 30;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
  }
  .box_description {
    padding: 12% 8%;
    font-size: 1rem;
    line-height: 1.7rem;
  }
  .box_btn {
    margin-top: 0;
    margin-left: 8%;
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 300px;
      border-radius: 20px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 170%;
        transform: translateX(5%);
      }
      .people_img {
        width: 160%;
      }
      .experience_img {
        width: 160%;
      }
      .img_txt {
        position: absolute;
        left: 4vw;
        bottom: 12%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 10% 4vw;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 4vw;
    }
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 300px;
      border-radius: 20px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 170%;
        transform: translateX(5%);
      }
      .people_img {
        width: 160%;
      }
      .experience_img {
        width: 160%;
      }
      .img_txt {
        position: absolute;
        left: 4vw;
        bottom: 12%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 10% 4vw;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 4vw;
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 300px;
      border-radius: 20px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 170%;
        transform: translateX(5%);
      }
      .people_img {
        width: 160%;
      }
      .experience_img {
        width: 160%;
      }
      .img_txt {
        position: absolute;
        left: 4vw;
        bottom: 8%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 8% 4vw;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 4vw;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 350px;
      border-radius: 20px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        height: 350px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 100%;
        transform: translateX(5%);
      }
      .people_img {
        width: 100%;
      }
      .experience_img {
        width: 100%;
      }
      .img_txt {
        position: absolute;
        left: 4vw;
        bottom: 4%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 6% 4vw;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 4vw;
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    padding: 0 4vw;
    margin-top: 0;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 30%;
      margin-top: 6vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 30%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 30%;
      margin-top: 12vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 400px;
      border-radius: 12px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 400px;
        object-fit: cover;
        object-position: center;
        z-index: -2;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1 !important;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 170%;
        transform: translateX(5%);
      }
      .people_img {
        width: 160%;
      }
      .experience_img {
        width: 160%;
      }
      .img_txt {
        position: absolute;
        left: 8%;
        bottom: 8%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 12% 8%;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 8%;
    }
  }
}

//iPhone 5, 5S, 5C, 5SE LANDSCAPE
@media screen and (min-width: 414px) and (max-width: 575px) and (orientation: landscape) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 300px;
      border-radius: 20px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 100%;
        transform: translateX(5%);
      }
      .people_img {
        width: 100%;
      }
      .experience_img {
        width: 100%;
      }
      .img_txt {
        position: absolute;
        left: 4vw;
        bottom: 12%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 6% 4vw;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 4vw;
    }
  }
}

//iPhone 6, 6S, 7, 8, X LANDSCAPE
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 300px;
      border-radius: 20px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 100%;
        transform: translateX(5%);
      }
      .people_img {
        width: 100%;
      }
      .experience_img {
        width: 100%;
      }
      .img_txt {
        position: absolute;
        left: 4vw;
        bottom: 12%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 6% 4vw;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 4vw;
    }
  }
}

//iPhone X LANDSCAPE
@media screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 100%;
      margin-top: 0vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 20vh;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 300px;
      border-radius: 20px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 100%;
        transform: translateX(5%);
      }
      .people_img {
        width: 100%;
      }
      .experience_img {
        width: 100%;
      }
      .img_txt {
        position: absolute;
        left: 4vw;
        bottom: 8%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 6% 4vw;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 4vw;
    }
  }
}

//iPad LANDSCAPE
@media only screen and (min-device-width: 992px) and (max-device-width: 1199px) and (orientation: landscape) {
  .about_boxes_container {
    width: 100%;
    min-height: 70%;
    @include flex(flex-start, space-between);
    flex-direction: row;
    padding: 0 4vw;
    margin-top: 0;
    .knowledge_box {
      min-height: 70%;
      height: auto;
      width: 30%;
      margin-top: 6vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }
    .people_box {
      min-height: 70%;
      height: auto;
      width: 30%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }
    .experience_box {
      min-height: 70%;
      height: auto;
      width: 30%;
      margin-top: 12vh;
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }
    .box_image_overlay {
      width: 100%;
      min-height: 300px;
      border-radius: 12px;
      overflow: hidden;
      @include flex(center, center);
      position: relative;
      img {
        min-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .img_fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: linear-gradient(
          0deg,
          rgba(34, 40, 64, 1),
          rgba(39, 40, 43, 0) 85%
        );
      }
      .knowledge_img {
        width: 170%;
        transform: translateX(5%);
      }
      .people_img {
        width: 160%;
      }
      .experience_img {
        width: 160%;
      }
      .img_txt {
        position: absolute;
        left: 8%;
        bottom: 8%;
        z-index: 30;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .box_description {
      padding: 12% 8%;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .box_btn {
      margin-top: 0;
      margin-left: 8%;
    }
  }
}
</style>
