<template>
  <v-footer class="footer-bg text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="footerText">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
      ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      Duis commodo vitae velit et faucibus.
    </div>

    <v-divider></v-divider>

    <div id="brand">
      {{ new Date().getFullYear() }} — <strong>NeonNightWear</strong>
    </div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style scoped>
.footer-bg {
  background-color: rgb(25, 25, 25);
}
.footerText {
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  padding-top: 1.5rem;
}
.mx-4 {
  color: white;
}
#brand {
  color: rgb(195, 195, 195);
  padding-top: 2rem;
}
</style>
