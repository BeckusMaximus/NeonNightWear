<template>
  <h2>Find your next attire here!</h2>
  <div class="categoryMenu">
    <v-card class="mx-auto" width="250">
      <v-list>
        <v-list-item
          v-for="category in categories"
          :class="{ active: activeCategory === category.name }"
          :key="category.id"
          @click="filterProducts(category.name)"
        >
          <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>

  <div class="productCards">
    <Cards
      v-for="product in filteredCategory"
      :key="product.id"
      width="310"
      :name="product.name"
      :price="product.price"
      :img="product.img"
    />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";

export default {
  components: {
    Cards,
  },
  /*categories array som innehåller tre objekt för kategorierna man vill visa.
  
  Tom products array som kommer fyllas med produktdata.
  
  Tom filteredCategory array som kommer innehålla produkterna som matchar med
  den aktiva kategorin. 
  
  activeCategory är en sträng som håller namnet på den aktuellt valda kategorin
  som är initialt satt till "All".*/
  data: () => ({
    categories: [
      {
        id: 1,
        name: "All",
      },
      {
        id: 2,
        name: "Women",
      },
      {
        id: 3,
        name: "Men",
      },
    ],
    products: [],
    filteredCategory: [],
    activeCategory: "All",
  }),

  created() {
    this.fetchProducts();
  },
  methods: {
    /* fetchProducts() hämtar produktdatan från den lokala JSON-filen 
    clothes.json som sedan tilldelas till this.products och this.filteredCategory så alla produkter visas initialt.*/
    fetchProducts() {
      fetch("../clothes.json")
        .then((response) => response.json())
        .then((result) => {
          this.products = result;

          this.filteredCategory = this.products;
        });
    },
    /* filterProducts(filter) uppdaterar activeCategory med produkter som matchar det valda filtret. Om filtret är "All" så visas alla produkter, annars filtreras produkterna baserat på kategorinamn.*/
    filterProducts(filter) {
      this.activeCategory = filter;
      if (filter === "All") {
        this.filteredCategory = this.products;
      } else {
        this.filteredCategory = this.products.filter(
          (product) => product.category.toLowerCase() === filter.toLowerCase()
        );
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
}
.v-list-item--variant-text {
  background-color: #ebebeb;
}
.active {
  background-color: #363636;
  color: white;
}
.categoryMenu {
  position: fixed;
  z-index: 1;
  float: left;
  flex-wrap: wrap;
  margin-left: 3rem;
}
.productCards {
  display: flex;
  justify-content: left;
  gap: 1rem;
  flex-wrap: wrap;
  margin-left: 20rem;
}
</style>
