<template>
  <v-card width="300" height="430">
    <v-img
      class="align-end text-white"
      height="310"
      :src="img"
      alt="products"
      cover
    >
    </v-img>

    <div>
      <p>{{ name }} - ${{ price }}</p>
    </div>

    <v-btn class="heart" @click="toggle" icon>
      <v-icon v-if="favorite">mdi-heart</v-icon>
      <v-icon v-else>mdi-heart-outline</v-icon>
    </v-btn>
    <v-btn class="cart" variant="tonal" @click="addedToCart">
      {{ buttonText }}
    </v-btn>
  </v-card>
</template>
<script>
export default {
  //props tar emot den informationen som ska stå i korten
  props: {
    name: String,
    price: Number,
    img: String,
  },
  //favorite knappen är satt till falskt tillstånd så den inte är ifylld.
  //buttonText håller texten som visas på kundvagnsknappen som är inställd på "Lägg till i kundvagnen"
  data() {
    return {
      favorite: false,
      buttonText: "Add to Cart",
    };
  },
  //toggle() växlar tillståndet på favorite mellan true och false om hjärtat ska vara ifylld eller inte.
  //addedToCart() uppdaterar buttonText till "Tillagd i kundvagnen" när man klickar på den
  methods: {
    toggle() {
      this.favorite = !this.favorite;
    },
    addedToCart() {
      this.buttonText = "Added to Cart!";
    },
  },
};
</script>
<style scoped>
p {
  letter-spacing: 0.1rem;
  padding-left: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
}
.heart {
  margin: 0.5rem 0 0 1rem;
}
.cart {
  float: right;
  margin: 1rem 1rem 0 0;
}
</style>
