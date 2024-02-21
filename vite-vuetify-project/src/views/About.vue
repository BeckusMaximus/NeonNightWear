<template>
  <h2>ABOUT OUR PURPOSE</h2>
  <div id="container">
    <div id="aboutText">
      <p>
        Welcome to Neon Night Apparel, At the heart of our brand lies a
        groundbreaking approach to rave and festival attire, powered entirely by
        Artificial Intelligence.
      </p>

      <p>
        Our journey begins in the digital realm, where AI's boundless creativity
        designs unique, eye-catching outfits that embody the spirit of freedom
        and celebration. Each piece in our collection starts as a vision from an
        advanced AI system, trained to blend the latest trends with the timeless
        energy of rave and festival scenes. This innovative process allows us to
        explore styles and patterns beyond the conventional, giving you access
        to attire that truly stands out in a crowd. Once conceptualized by AI,
        these designs are brought to life with meticulous attention to detail,
        transformed into tangible, wearable art.
      </p>
      <p>
        Our commitment to quality and sustainability means that every item you
        find on our site is not only visually stunning but also crafted to last,
        supporting both the planet and your wardrobe.
      </p>
    </div>
    <h3>THE TEAM</h3>
    <div id="personal">
      <div class="employers">
        <img src="@/assets/designer.webp" alt="Designer employer" />
        <p>Designer</p>
      </div>
      <div class="employers">
        <img src="@/assets/ceo.jpg" alt="CEO employer" />
        <p>CEO</p>
      </div>
      <div class="employers">
        <img src="@/assets/designer2.webp" alt="Designer employer" />
        <p>Designer</p>
      </div>
    </div>
    <h3>CONTACT US HERE</h3>
    <aboutForm />
  </div>
</template>

<style>
h2 {
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  padding-top: 2rem;
  font-size: 2rem;
}
h3 {
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.7rem;
}
p {
  text-align: center;
  padding: 0 0 1rem 0;
  font-size: 1.2rem;
  font-family: "Roboto Condensed", sans-serif;
  letter-spacing: 0.05rem;
}
#aboutText {
  padding: 2rem 10rem 2rem 10rem;
}
#container {
  height: auto;
}
#personal {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 6rem;
  flex-wrap: wrap;

  padding: 2rem 0 4rem 0;
}
.employers img {
  height: 20rem;
  width: fit-content;
}
.employers {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.364);
  border-radius: 10px;
  height: 23rem;
  overflow: hidden;
}
</style>
