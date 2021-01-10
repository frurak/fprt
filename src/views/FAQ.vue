<template>
  <div class="faq_container">
    <HomepageTopbar />
    <HomepageMainText
      main1="Odpowiedzi na najczęściej"
      main2="zadawane pytania"
      sub1="Przygotowaliśmy dla Ciebie specjalne podsumowanie z pytaniami"
      sub2="najczęściej zadawanymi przez naszych zawodników"
      mainbtntext="Czytaj"
    />
    <div class="homepage_banner">
      <img src="@/assets/faq-banner.jpg" alt="ForPro Running Team" />
    </div>
    <Cross style="right:59%;top:10.5%;" id="cross1" />
    <Cross style="right:49%;top:30.5%;" id="cross2" />
    <Navigation />
    <FAQContent />
    <Footer />
  </div>
</template>

<script>
import HomepageTopbar from "@/components/HomepageTopbar.vue";
import HomepageMainText from "@/components/HomepageMainText.vue";
import Navigation from "@/components/Navigation.vue";
import FAQContent from "@/components/FAQContent.vue";
import Cross from "@/components/Cross.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "FAQ",
  components: {
    HomepageTopbar,
    Navigation,
    HomepageMainText,
    Cross,
    FAQContent,
    Footer
  },
  created() {
    if (this.$router.currentRoute.path === "/pomoc") {
      this.$store.state.isFAQRoute = true;
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
