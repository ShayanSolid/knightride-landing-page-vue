<template>
  <div>
    <Navbar/>
    <div class="container-fluid m-0 p-0">

      <div id="sectionA" class="full-height p-4">
        <SectionA/>
      </div>

      <div id="sectionB" class="">
        <SectionB/>
      </div>

      <div id="sectionC" class="vh-100 bg-primary p-4">
        <SectionC/>
      </div>

      <div id="sectionD" class="bg-success p-4">
        test
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';

export default {
  name: 'landing-page',
  components: { SectionC, SectionB, SectionA, Navbar },
};
</script>

<style scoped>

#sectionA {
  background-color: #F7F8FA;
}

#sectionB {
  background-color: #F7F8FA;
}

#sectionC {
  background: #F7F8FA url("../assets/bg-sectionC.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  height: 80vh;
}

#ride-feed-img {
  max-height: 80vh;
}

#knightride-logo-tyoe {
  width: 70%;
}

#ios-download {
  width: 100%;
}

#android-download {
  width: 100%;
}

</style>
