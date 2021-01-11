<template>
  <div class="schedule_container">
    <HomepageTopbar />
    <HomepageMainText
      main1="Harmonogram treningów"
      main2="grupowych i indywidualnych"
      sub1="Wolne popołudnia bądź wieczory? Brzmi jak plan na wspólny trening ;)"
      sub2="Sprawdź aktualny harmonogram treningów"
      mainbtntext="Przeglądaj"
    />
    <div class="homepage_banner">
      <img src="@/assets/harm-banner.jpg" alt="ForPro Running Team" />
    </div>
    <Cross style="right:59%;top:10.5%;" id="cross1" />
    <Cross style="right:49%;top:30.5%;" id="cross2" />
    <Navigation />
    <ScheduleContent />
    <Footer />
  </div>
</template>

<script>
import HomepageTopbar from "@/components/HomepageTopbar.vue";
import HomepageMainText from "@/components/HomepageMainText.vue";
import Navigation from "@/components/Navigation.vue";
import ScheduleContent from "@/components/ScheduleContent.vue";
import Cross from "@/components/Cross.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "FAQ",
  components: {
    HomepageTopbar,
    Navigation,
    HomepageMainText,
    Cross,
    ScheduleContent,
    Footer
  },
  created() {
    if (this.$router.currentRoute.path === "/harmonogram") {
      this.$store.state.isScheduleRoute = true;
      this.$store.state.isFAQRoute = false;
      this.$store.state.isHomeRoute = false;
      this.$store.state.isTermRoute = false;
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
</style>
