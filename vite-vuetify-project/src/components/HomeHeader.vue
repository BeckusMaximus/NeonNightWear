<template>
  <v-carousel cycle>
    <v-carousel-item src="@/assets/shoesHeader.png" cover>
      <div class="d-flex fill-height justify-center align-center">
        <div id="textOne">
          <h1>CHECK OUT OUR NEW CATEGORY WITH SHOES!</h1>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item src="@/assets/new1.webp" cover>
      <div id="textTwo"><h1>ARRIVING SOON</h1></div>
    </v-carousel-item>

    <v-carousel-item src="@/assets/headerImg3.webp" cover>
      <div class="d-flex fill-height justify-center align-center">
        <div id="textThree"><h2>BLACK & WHITE COLLECTION COMING SOON</h2></div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<style>
#textOne {
  background-color: rgba(0, 0, 0, 0.468);
}
#textTwo h1 {
  color: white;
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
  padding-top: 2rem;
}
#textOne h1 {
  color: white;
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
  font-weight: 500;
}
#textThree h2 {
  color: white;
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
}
</style>
