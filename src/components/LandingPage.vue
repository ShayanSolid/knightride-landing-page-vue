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

      <div id="sectionC" class="p-4">
        <SectionC/>
      </div>

      <div id="sectionD" class="bg-success p-4">
        <SectionD/>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD from './SectionD';

export default {
  name: 'landing-page',
  components: { SectionD, SectionC, SectionB, SectionA, Navbar },
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
  background-color: #F7F8FA;
}

#sectionD {
  background: gray url("../assets/bg-sectionC.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  height: 80vh;
}

@media only screen and (min-width: 600px) {
  #sectionC {
    height: 100vh;
  }
}

</style>
