<template>
  <v-app>
    <v-main>
      <Navbar />
      <RouterView />
    </v-main>
    <footerComp />
  </v-app>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Roboto Condensed", sans-serif;
  font-family: "Orbitron", sans-serif;
}
</style>
