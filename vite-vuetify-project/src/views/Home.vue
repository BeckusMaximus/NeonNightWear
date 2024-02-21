<template>
  <HomeHeader />
  <h2>BEST SELLERS</h2>
  <div class="bestSeller">
    <Cards
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :price="product.price"
      :img="product.img"
    />
  </div>
  <h3>CATEGORIES</h3>
  <div id="categories">
    <CategoryCard />
  </div>
</template>

<script>
//Importera Cards komponenten till Home.vue
import Cards from "../components/Cards.vue";

export default {
  //Registrerar Cards komponenten till Home.vue
  components: {
    Cards,
  },
  //Deklarerar en tom products array för att hålla datan för produkter som ska visas i korten.
  data() {
    return {
      products: [],
    };
  },
  // Hämtar produkterna direkt
  created() {
    this.fetchProducts();
  },
  //Hämtar datan från en JSON-fil som sedan läggs in i products arrayen.
  methods: {
    fetchProducts() {
      fetch("../products.json")
        .then((response) => response.json())
        .then((result) => {
          this.products = result;
        });
    },
  },
};
</script>

<style scoped>
h2 {
  padding-top: 3rem;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.2rem;
}
h3 {
  padding-top: 3rem;
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  font-weight: 900;
}
.bestSeller {
  display: flex;
  justify-content: center;
  padding: 1rem 3rem 2rem 3rem;
  gap: 1rem;
  flex-wrap: wrap;
}
#categories {
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
</style>
