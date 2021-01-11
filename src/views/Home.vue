<template>
  <div id="app">
    <HomepageTopbar />
    <HomepageMainText
      main1="Nie biegamy a trenujemy"
      main2="Już dziś dołącz do pro-amatorów"
      sub1="ForPro Running Team to zapał i entuzjazm bijący od sportowców"
      sub2="chcących poprawiać swoje wyniki sportowe"
      mainbtntext="Dołącz do drużyny"
    />
    <div class="homepage_banner">
      <img src="@/assets/fprt-main-baner.jpg" alt="ForPro Running Team" />
    </div>
    <Cross style="right:59%;top:10.5%;" id="cross1" />
    <Cross style="right:49%;top:30.5%;" id="cross2" />
    <Navigation />
    <AboutTeam />
    <Coaches />
    <Opinions />
    <Schedule />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import HomepageTopbar from "@/components/HomepageTopbar.vue";
import HomepageMainText from "@/components/HomepageMainText.vue";
import Cross from "@/components/Cross.vue";
import Navigation from "@/components/Navigation.vue";
import AboutTeam from "@/components/AboutTeam.vue";
import Coaches from "@/components/Coaches.vue";
import Opinions from "@/components/Opinions.vue";
import Schedule from "@/components/Schedule.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    HomepageTopbar,
    HomepageMainText,
    Cross,
    Navigation,
    AboutTeam,
    Coaches,
    Opinions,
    Schedule,
    Footer
  },
  props: ["main1", "main2", "sub1", "sub2", "mainbtntext"],
  created() {
    if (this.$router.currentRoute.path === "/") {
      // remove '/regulamin' route boolean variable when '/' is active
      this.$store.state.isHomeRoute = true;
      this.$store.state.isTermRoute = false;
      this.$store.state.isFAQRoute = false;
      this.$store.state.isScheduleRoute = false;
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

* {
  font-family: "Poppins", sans-serif;
  color: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  display: none;
}

body {
  overflow-x: hidden;
  background: $dark;
}
</style>
