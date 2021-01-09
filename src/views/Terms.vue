<template>
  <div class="terms_container">
    <HomepageTopbar />
    <HomepageMainText
      main1="Regulamin treningów"
      main2="dla członków grupy"
      sub1="Zależy nam aby każde wspólne spotkanie przebiegało zgodnie"
      sub2="z zasadami sportowej rywalizacji :)"
      mainbtntext="Czytaj"
    />
    <div class="homepage_banner">
      <img src="@/assets/terms-banner.jpg" alt="ForPro Running Team" />
    </div>
    <Cross style="right:59%;top:10.5%;" id="cross1" />
    <Cross style="right:49%;top:30.5%;" id="cross2" />
    <Navigation />
    <TermsContent />
    <Footer />
  </div>
</template>

<script>
import HomepageTopbar from "@/components/HomepageTopbar.vue";
import HomepageMainText from "@/components/HomepageMainText.vue";
import Navigation from "@/components/Navigation.vue";
import TermsContent from "@/components/TermsContent.vue";
import Cross from "@/components/Cross.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Terms",
  props: ["mainbtntext"],
  components: {
    HomepageTopbar,
    Navigation,
    HomepageMainText,
    Cross,
    TermsContent,
    Footer
  },
  created() {
    if (this.$router.currentRoute.path === "/regulamin") {
      this.$store.state.isTermRoute = true;
    }
    console.log(this.$store.state.isTermRoute);
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

.terms_container {
  width: 100%;
  min-height: 100vh;
}
</style>
