<template>
  <div
    class="category-box"
    v-for="category in categories"
    :key="category.id"
    :name="category.name"
    :imageUrl="category.imageUrl"
    :style="{ backgroundImage: 'url(' + category.imageUrl + ')' }"
    @click="goToCategory(category.name)"
  >
    <h4>{{ category.name }}</h4>
  </div>
</template>
<script>
// Importerar bilder från assets mappen som ska representera dom olika kategorierna.
import AllImg from "@/assets/AllImg.webp";
import WomenImg from "@/assets/WomenImg2.webp";
import MenImg from "@/assets/MenImg2.webp";
import Sneaker from "@/assets/sneaker6.webp";

export default {
  /*  Returnerar categories array som innehåller fyra objekt där varje objekt representerar en kategori. Objekten innehåller ett id, namn på kategorin och bild som är kopplad till den. */
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "All clothes",
          imageUrl: AllImg,
        },
        {
          id: 2,
          name: "Women",
          imageUrl: WomenImg,
        },
        {
          id: 3,
          name: "Men",
          imageUrl: MenImg,
        },
        {
          id: 4,
          name: "Shoes",
          imageUrl: Sneaker,
        },
      ],
    };
  },
  /* goToCategory metoden tar emot ett kategorinamn som argument, så baserat på
  det valda kategorinamnet så kommer den navigeras till antingen Shoes sidan 
  eller Clothes sidan. */
  methods: {
    goToCategory(name) {
      if (name.toLowerCase() === "shoes") {
        this.$router.push("/shoes");
      } else {
        this.$router.push("/clothes");
      }
    },
  },
};
</script>
<style>
.category-box {
  position: relative;
  height: 10rem;
  width: 15rem;
  background-size: cover;
  background-position: center;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;
  font-weight: 800;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.364);
  margin-bottom: 1.5rem;
}
.category-box:hover {
  box-shadow: 3px 4px 15px 4px rgba(0, 0, 0, 0.534);
  transition: opacity 0.5s ease-in-out;
}
.category-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.521);
  z-index: 1;
}
h4 {
  position: relative;
  z-index: 2;
  justify-content: center;
  padding-top: 25%;
  font-size: 2rem;
  color: white;
  letter-spacing: 0.2rem;
}
</style>
