<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <h5 class="text-uppercase mb-4 mt-3 font-weight-bold footer-header">Unternehmen</h5>
        <ul class="nav flex-column text-left">
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
      <div class="col-2">
        <h5 class="text-uppercase mb-4 mt-3 font-weight-bold footer-header">Hilfe</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/#sectionB" class="nav-link" href="#">Kontakt
            </router-link>
          </li>
        </ul>
      </div>


    </div>
    <div class="text-center">
      <ul class="list-inline">
        <li class="list-inline-item">
          <a class="btn-lg mx-1" href="">
            <img src="../assets/social-network-icons/facebook.svg" alt="facebook-logo">
          </a>
        </li>

        <li class="list-inline-item">
          <a class="btn-lg mx-1" href="">
            <img src="../assets/social-network-icons/instagram.svg" alt="facebook-logo">
          </a>
        </li>

        <li class="list-inline-item">
          <a class="btn-lg mx-1" href="">
            <img src="../assets/social-network-icons/twitter.svg" alt="facebook-logo">
          </a>
        </li>
      </ul>


    </div>
    <div class="text-center py-3">
      <div>
        &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> knightride.app </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer-header{
  color: #7A3CEF;
}
.nav-link{
  color: #080808;
}
</style>
