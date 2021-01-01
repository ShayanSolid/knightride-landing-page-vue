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

      <div id="sectionC" class="full-height p-4">
        <SectionC/>
      </div>

      <div id="sectionE" class="w-100 p-4">
        <SectionE/>
      </div>

      <div id="sectionD" class="vh-100 p-4">
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
import SectionE from './SectionE';

export default {
  name: 'landing-page',
  components: { SectionE, SectionD, SectionC, SectionB, SectionA, Navbar },
};
</script>

<style scoped>


#sectionA #sectionB #sectionC #sectionD #sectionE {
  background-color: #F7F8FA;
}

#sectionD {
  background: #F7F8FA url("../assets/bg-sectionD.png") no-repeat center center;
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
