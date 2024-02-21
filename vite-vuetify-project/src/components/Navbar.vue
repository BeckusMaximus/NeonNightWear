<template>
  <nav>
    <img id="logo" src="../assets/logo1.jpg" />

    <div id="links">
      <RouterLink to="/">Home</RouterLink>

      <RouterLink to="/clothes">Clothes</RouterLink>

      <RouterLink to="/shoes">Shoes</RouterLink>

      <RouterLink to="/about">About Us</RouterLink>
    </div>
    <div id="searchBox">
      <input id="search" placeholder="Search" type="search" />
      <button id="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
<style scoped>
nav {
  overflow: hidden;
  background-color: #000000;
  height: 5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.851);
  display: flex;
  width: 100%;
  justify-content: space-between;
}
#btn {
  background-color: rgb(228, 228, 228);
  width: 30px;
  height: 30px;
  padding-top: 2px;
  border-radius: 50%;
}
#btn:active {
  background-color: rgb(199, 199, 199);
}
#links {
  align-self: center;
  overflow: hidden;
}
#links a {
  overflow: hidden;
  padding: 1rem;
  text-decoration: none;
  background-color: #000000;
  color: white;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
}

#logo {
  max-width: 100%;
  width: 150px;
  height: auto;
  margin: 0.5rem 5rem 0 1rem;
}
#searchBox {
  margin-right: 2rem;
  overflow: hidden;
}
#search {
  width: 15rem;
  background-color: rgb(228, 228, 228);
  color: rgb(18, 18, 18);
  height: 2rem;
  border-radius: 6px;
  padding-left: 1rem;
  margin: 1.5rem 1rem 0 3rem;
}
</style>
