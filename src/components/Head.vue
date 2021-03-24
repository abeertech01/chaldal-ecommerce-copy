<template>
  <div class="head">
    <!-- Start -->
    <nav class="navbar">
      <a class="menu-icon pt-1 text-dark" href="#"
        ><i class="fas fa-bars"></i
      ></a>
      <router-link to="/" class="logo text-dark">
        <img src="../assets/egg.png" alt="" />
        <span class="logo-name font-weight-bold">Alupotol</span>
      </router-link>
      <input
        class="search-input"
        type="text"
        :placeholder="searchPlaceholder"
      />
      <ul>
        <li class="location">
          <a href="#">
            <i class="fas fa-map-marker-alt"></i> Dhaka
            <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="help">
          <a href="#"><i class="fas fa-question-circle"></i> Help & More</a>
        </li>
        <li class="language">
          <a href="#"> <span class="text-danger">EN</span> | বাং </a>
        </li>
        <li class="auth">
          <a href="#">Sign in</a>
        </li>
      </ul>
    </nav>
    <!-- End -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchPlaceholder: `Search for products (e.g. eggs, milk, potato)`,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
nav {
  background-color: #fdd670;
  height: 55px;
  padding: 0 0 0 20px;
}
.navbar {
  display: flex;
  flex-direction: row;
}
.menu-icon {
  /* display: block; */
  flex-grow: 1;
  flex-shrink: 0;
  /* background-color: pink; */
}
.menu-icon i {
  font-size: 24px;
}
.logo {
  /* display: block; */
  margin: 0 20px;
  flex-grow: 2;
  flex-shrink: 0;
  /* background-color: rosybrown; */
}
.logo img {
  height: 32px;
}
.logo .logo-name {
  font-family: "Dancing Script", cursive;
  font-size: 24px;
}
.search-input {
  display: block;
  padding: 0 10px;
  flex-grow: 65;
  height: 40px;
  border: none;
  border-radius: 3px;
  outline: none;
}
nav ul {
  display: block;
  margin: 0 0 0 10px;
  padding: 0;
  height: inherit;
  width: 510px;
  /* background-color: lightsalmon; */
}
nav ul li {
  display: inline-block;
  height: 100%;
  text-align: center;
  border-left: 0.5px solid rgb(158, 158, 158);
}
nav ul li a {
  display: block;
  padding: 15px 0;
  height: 100%;
  font-size: 15px;
}
.location,
.help,
.language {
  width: 24%;
}
.location a,
.help a,
.language a {
  color: rgb(95, 95, 95);
  font-weight: bold;
}
.auth {
  width: 28%;
  background-color: #ff686e;
}
.auth a {
  color: white;
  font-weight: bold;
}
</style>