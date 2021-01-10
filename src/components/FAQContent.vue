<template>
  <div class="faq_content_container">
    <div class="faq_search">
      <input
        type="text"
        id="faq-search"
        name="faq-search"
        placeholder="Szukaj"
        @click="openSearch()"
        @keyup="filterFaqQuestions()"
      />
      <div id="close_search">
        <div class="close_overlay" @click="closeSearch()">+</div>
      </div>
    </div>
    <div class="faq_content">
      <div
        class="faq_content_overlay"
        v-for="(question, index) in faq"
        :key="question.q"
      >
        <div class="faq_question" @click="openFaqQuestion(index)">
          {{ question.q }}
          <img src="@/assets/arrow.svg" class="section_arrow" />
        </div>
        <div class="description_overlay">
          <div class="faq_question_description">
            {{ question.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faqJSON from "@/json/faq.json";
import { mapMutations } from "vuex";
export default {
  name: "FAQContent",
  data() {
    return {
      faq: faqJSON,
      faqQuestionOpen: false,
      previousQ: [],
      qArray: [],
      clickNumber: []
    };
  },
  methods: {
    ...mapMutations(["filterFaqQuestions"]),
    openFaqQuestion(index) {
      const questionDescription = document.querySelectorAll(
        ".faq_content .faq_question_description"
      );

      // array that is filled with false values for every single question from faq.json file
      // ...but
      // for currently chosen/clicked question we push true instead
      this.qArray = [];
      for (let i = 0; i <= this.faq.length - 1; i++) {
        this.qArray.push(false);
        if (index === i) {
          this.qArray[i] = true;
        }
      }

      // indicate which task in qArray has true value and do something with it ...
      if (this.qArray[index] === true && this.faqQuestionOpen === false) {
        if (this.previousQ[0] !== undefined && this.previousQ[0].nr === index) {
          // if this is not the first time user clicks (this.previousQ[0] !== undefined)
          // ...and
          // if some question was opened previously (this.previousQ[0].nr === index)
          // ...and
          // user click 2nd time that specific question
          // ...then
          // close that question whis is click 2nd time
          questionDescription[index].classList.remove("description-open");

          // ...BUT
          // if user wants to open second time the same task
          // ...then (calculate number of clicks which is this.clickNumber.length)
          this.clickNumber.push(index);
          if (this.clickNumber.length === 2) {
            // add class again to that question (if length === 2 which means double click)
            questionDescription[index].classList.add("description-open");
            // and clear click calculator value
            this.clickNumber = [];
          }
        }

        if (this.previousQ[0] !== undefined && this.previousQ[0].nr !== index) {
          // if this is not the first time user clicks (this.previousQ[0] !== undefined)
          // ...and
          // question that user clicks 2nd time IN NOT THE SAME that was chosen previously
          // ...then
          // close previously opened task (previous nr = this.previousQ[0].nr)
          questionDescription[this.previousQ[0].nr].classList.remove(
            "description-open"
          );
          // ...and
          // open currently chosen one
          questionDescription[index].classList.add("description-open");
        }
        if (this.previousQ[0] === undefined) {
          // ONLY AT FIRST TIME (when there was no previously chosen question)
          // ...open question
          questionDescription[index].classList.add("description-open");
        }
      }

      // array made of previously chosen task (only one every time user clicks - this.previousQ = [])
      // ...
      // "value" in our case means boolean for every single question that is in faq.json file to indicate
      // if is was previously opened (true) or closed (false)
      this.previousQ = [];
      this.previousQ.push({
        nr: index,
        value: this.qArray[index]
      });
    },
    openSearch() {
      const inputTop = document.querySelector(".faq_search");
      const input = document.getElementById("faq-search");
      const FAQContainer = document.querySelector(".faq_content_container");
      const closeBtn = document.getElementById("close_search");
      const FAQContent = document.querySelector(".faq_content");
      const questionDescription = document.querySelectorAll(
        ".faq_content .faq_question_description"
      );
      const questionName = document.querySelectorAll(
        ".faq_content .faq_question"
      );
      const mediaMax1199 = window.matchMedia("(max-width: 1199px)");

      // show description of all questions
      for (let i = 0; i <= this.faq.length - 1; i++) {
        questionDescription[i].style.display = "flex";
        questionDescription[i].style.transform = "translateY(0%)";
        questionDescription[i].style.transition = "none";
        questionName[i].style.cursor = "default";
      }

      FAQContainer.classList.add("search-active");
      FAQContainer.style.padding = "0 5.5vw";
      document.querySelector("body").style.overflow = "hidden";

      closeBtn.classList.add("btn-active");

      FAQContent.style.height = "80vh";

      // input styling
      inputTop.style.padding = "1.3rem 5.5vw";
      inputTop.style.margin = "0";
      inputTop.style.width = "100vw";
      inputTop.style.background = "#5f76b5";
      inputTop.style.boxShadow = "3px 3px 30px #000";
      inputTop.style.position = "sticky";
      inputTop.style.display = "flex";
      inputTop.style.justifyContent = "center";
      inputTop.style.alignItems = "center";
      inputTop.style.top = "0";
      inputTop.style.left = "0";
      input.style.border = "none";
      input.style.width = "75%";
      input.style.transition = "0.3s ease-in-out";

      if (mediaMax1199.matches) {
        // input styling for mobile
        inputTop.style.justifyContent = "flex-start";
      }

      window.scrollTo({
        left: 0,
        top: inputTop.offsetTop,
        behavior: "smooth"
      });

      this.faqQuestionOpen = true;
    },
    closeSearch() {
      const inputTop = document.querySelector(".faq_search");
      const input = document.getElementById("faq-search");
      const FAQContainer = document.querySelector(".faq_content_container");
      const closeBtn = document.getElementById("close_search");
      const FAQContent = document.querySelector(".faq_content");
      const questionDescription = document.querySelectorAll(
        ".faq_content .faq_question_description"
      );
      const questionName = document.querySelectorAll(
        ".faq_content .faq_question"
      );
      const mediaMax1199 = window.matchMedia("(max-width: 1199px)");

      // close description of all questions
      for (let i = 0; i <= this.faq.length - 1; i++) {
        questionDescription[i].style.display = "none";
        questionDescription[i].style.transform = "translateY(-100%)";
        questionDescription[i].style.transition = "none";
        questionName[i].style.cursor = "pointer";
      }

      // remove current input value
      // ...then
      // set all questions from JSON file visible again
      input.value = "";
      for (let i = 0; i <= this.faq.length - 1; i++) {
        const question = document.querySelectorAll(
          ".faq_content .faq_content_overlay"
        );
        question[i].style.display = "";
      }

      FAQContainer.classList.remove("search-active");
      FAQContainer.style.padding = "5rem 5.5vw";
      document.querySelector("body").style.overflow = "";

      closeBtn.classList.remove("btn-active");

      FAQContent.style.height = "auto";

      // input styling
      inputTop.style.padding = "0";
      inputTop.style.margin = "0 0 5rem 0";
      inputTop.style.width = "100%";
      inputTop.style.background = "none";
      inputTop.style.boxShadow = "none";
      inputTop.style.position = "static";
      inputTop.style.display = "flex";
      inputTop.style.justifyContent = "flex-start";
      inputTop.style.alignItems = "center";
      inputTop.style.top = "";
      inputTop.style.left = "";
      input.style.border = "1px solid #5f76b5";
      input.style.width = "30%";
      input.style.transition = "0.3s ease-in-out";

      if (mediaMax1199.matches) {
        // input styling for mobile
        input.style.width = "100%";
      }

      window.scrollTo({
        left: 0,
        top: FAQContainer.offsetTop
      });

      this.faqQuestionOpen = false;
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

.faq_content_container {
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 5rem 5.5vw;
  @include flex(center, flex-start);
  flex-direction: column;
  .faq_search {
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 5rem;
    #faq-search {
      width: 30%;
      background: $dark;
      outline: none;
      border: 1px solid $blue;
      border-radius: 50px;
      padding: 1.3rem;
    }
    #close_search {
      display: none;
    }
  }
  .faq_content {
    width: 100%;
    height: auto;
    overflow-x: hidden;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .faq_content_overlay {
      width: 100%;
      height: auto;
      .faq_question {
        font-size: 2.2rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        position: relative;
        padding: 1.3rem 0;
        cursor: pointer;
        .section_arrow {
          width: 30px;
          position: absolute;
          right: 0%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
        }
      }
      .description_overlay {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .faq_question_description {
          @include flex(flex-start, flex-start);
          flex-direction: column;
          font-size: 1rem;
          line-height: 1.7rem;
          padding-bottom: 1.3rem;
          color: #8a8a8a;
          display: none;
          transform: translateY(-100%);
        }
      }
    }
  }
}

// --------------------------------------------------- KEYFRAMES ANIMATIONS ---------------------------------------------------
// --------------------------------------------------- JAVASCRIPT CLASSES -----------------------------------------------------

.search-active {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 300;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: $dark;
}

.btn-active {
  content: "";
  @include flex(center, center);
  display: flex !important;
  width: 50px;
  height: 50px;
  background: $dark;
  border-radius: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5vw;
  cursor: pointer;
  .close_overlay {
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 1.6rem;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    @include flex(center, center);
    transform: rotate(45deg);
    color: $grey;
    text-align: center;
  }
}

.description-open {
  display: flex !important;
  animation: FaqQuestion 0.3s ease-in-out both;
}

@keyframes FaqQuestion {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

// ------------------------------------------------------- MEDIA QUERIES -------------------------------------------------------

@media only screen and (max-width: 413px) {
  .faq_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 5.5vw;
    @include flex(center, flex-start);
    flex-direction: column;
    .faq_search {
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: 5rem;
      #faq-search {
        width: 100%;
        background: $dark;
        outline: none;
        border: 1px solid $blue;
        border-radius: 50px;
        padding: 1.3rem;
      }
      #close_search {
        display: none;
      }
    }
    .faq_content {
      width: 100%;
      height: auto;
      overflow-x: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .faq_content_overlay {
        width: 100%;
        height: auto;
        .faq_question {
          font-size: 1.3rem;
          line-height: 1.73rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          position: relative;
          padding: 1.3rem 10vw 1.3rem 0;
          cursor: pointer;
          .section_arrow {
            width: 15px;
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .description_overlay {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .faq_question_description {
            @include flex(flex-start, flex-start);
            flex-direction: column;
            font-size: 1rem;
            line-height: 1.7rem;
            padding-bottom: 1.3rem;
            color: #8a8a8a;
            display: none;
            transform: translateY(-100%);
          }
        }
      }
    }
  }
  .btn-active {
    content: "";
    @include flex(center, center);
    display: flex !important;
    width: 40px;
    height: 40px;
    background: $dark;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4vw;
    cursor: pointer;
  }
}

@media screen and (min-width: 414px) and (max-width: 575px) {
  .faq_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 5.5vw;
    @include flex(center, flex-start);
    flex-direction: column;
    .faq_search {
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: 5rem;
      #faq-search {
        width: 100%;
        background: $dark;
        outline: none;
        border: 1px solid $blue;
        border-radius: 50px;
        padding: 1.3rem;
      }
      #close_search {
        display: none;
      }
    }
    .faq_content {
      width: 100%;
      height: auto;
      overflow-x: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .faq_content_overlay {
        width: 100%;
        height: auto;
        .faq_question {
          font-size: 1.3rem;
          line-height: 1.73rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          position: relative;
          padding: 1.3rem 10vw 1.3rem 0;
          cursor: pointer;
          .section_arrow {
            width: 15px;
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .description_overlay {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .faq_question_description {
            @include flex(flex-start, flex-start);
            flex-direction: column;
            font-size: 1rem;
            line-height: 1.7rem;
            padding-bottom: 1.3rem;
            color: #8a8a8a;
            display: none;
            transform: translateY(-100%);
          }
        }
      }
    }
  }
  .btn-active {
    content: "";
    @include flex(center, center);
    display: flex !important;
    width: 40px;
    height: 40px;
    background: $dark;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4vw;
    cursor: pointer;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .faq_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 5.5vw;
    @include flex(center, flex-start);
    flex-direction: column;
    .faq_search {
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: 5rem;
      #faq-search {
        width: 100%;
        background: $dark;
        outline: none;
        border: 1px solid $blue;
        border-radius: 50px;
        padding: 1.3rem;
      }
      #close_search {
        display: none;
      }
    }
    .faq_content {
      width: 100%;
      height: auto;
      overflow-x: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .faq_content_overlay {
        width: 100%;
        height: auto;
        .faq_question {
          font-size: 1.3rem;
          line-height: 1.73rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          position: relative;
          padding: 1.3rem 10vw 1.3rem 0;
          cursor: pointer;
          .section_arrow {
            width: 15px;
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .description_overlay {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .faq_question_description {
            @include flex(flex-start, flex-start);
            flex-direction: column;
            font-size: 1rem;
            line-height: 1.7rem;
            padding-bottom: 1.3rem;
            color: #8a8a8a;
            display: none;
            transform: translateY(-100%);
          }
        }
      }
    }
  }
  .btn-active {
    content: "";
    @include flex(center, center);
    display: flex !important;
    width: 40px;
    height: 40px;
    background: $dark;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4vw;
    cursor: pointer;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .faq_content_container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5rem 5.5vw;
    @include flex(center, flex-start);
    flex-direction: column;
    .faq_search {
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: 5rem;
      #faq-search {
        width: 100%;
        background: $dark;
        outline: none;
        border: 1px solid $blue;
        border-radius: 50px;
        padding: 1.3rem;
      }
      #close_search {
        display: none;
      }
    }
    .faq_content {
      width: 100%;
      height: auto;
      overflow-x: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .faq_content_overlay {
        width: 100%;
        height: auto;
        .faq_question {
          font-size: 1.6rem;
          line-height: 2.72rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          position: relative;
          padding: 1.3rem 10vw 1.3rem 0;
          cursor: pointer;
          .section_arrow {
            width: 15px;
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .description_overlay {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .faq_question_description {
            @include flex(flex-start, flex-start);
            flex-direction: column;
            font-size: 1rem;
            line-height: 1.7rem;
            padding-bottom: 1.3rem;
            color: #8a8a8a;
            display: none;
            transform: translateY(-100%);
          }
        }
      }
    }
  }
  .btn-active {
    content: "";
    @include flex(center, center);
    display: flex !important;
    width: 50px;
    height: 50px;
    background: $dark;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4vw;
    cursor: pointer;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .faq_content_container {
    width: 100%;
    min-height: 0vh;
    height: auto;
    padding: 5rem 5.5vw;
    @include flex(center, flex-start);
    flex-direction: column;
    .faq_search {
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: 5rem;
      #faq-search {
        width: 100%;
        background: $dark;
        outline: none;
        border: 1px solid $blue;
        border-radius: 50px;
        padding: 1.3rem;
      }
      #close_search {
        display: none;
      }
    }
    .faq_content {
      width: 100%;
      height: auto;
      overflow-x: hidden;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      .faq_content_overlay {
        width: 100%;
        height: auto;
        .faq_question {
          font-size: 1.3rem;
          line-height: 1.73rem;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 400;
          position: relative;
          padding: 1.3rem 10vw 1.3rem 0;
          cursor: pointer;
          .section_arrow {
            width: 15px;
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
          }
        }
        .description_overlay {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .faq_question_description {
            @include flex(flex-start, flex-start);
            flex-direction: column;
            font-size: 1rem;
            line-height: 1.7rem;
            padding-bottom: 1.3rem;
            color: #8a8a8a;
            display: none;
            transform: translateY(-100%);
          }
        }
      }
    }
  }
  .btn-active {
    content: "";
    @include flex(center, center);
    display: flex !important;
    width: 40px;
    height: 40px;
    background: $dark;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4vw;
    cursor: pointer;
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
