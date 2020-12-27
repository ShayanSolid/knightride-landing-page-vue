<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
    <a class="navbar-brand mx-auto pr-lg-2 pl-2 pr-sm-0" href="#">
      <router-link to="/#sectionA" class="container">
        <img class=" d-inline-block align-top pr-2" id="knightride_logo"
             src="../assets/knightride-logo.png" width="30"
             alt="Logo">
        Knightride
      </router-link>
    </a>
    <button class="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto ">
        <li class="nav-item">
          <router-link to="/#sectionB" class="nav-link" href="#">Die App
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/#sectionC" class="nav-link" href="#">Knight & Rider</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/#sectionD" class="nav-link" href="#">Über uns</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>


#nav {
  background-color: #7A3CEF;
}
</style>
