<template>
  <div>
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

      <div class="sectionD vh-100 p-4">
        <SectionD/>
      </div>

    </div>
  </div>
</template>

<script>
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD from './SectionD';
import SectionE from './SectionE';
import Carousel from './Carousel';

export default {
  name: 'landing-page',
  components: { Carousel, SectionE, SectionD, SectionC, SectionB, SectionA },
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
.no-webp .sectionD {
  background: #F7F8FA url("../assets/bg-sectionD.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  height: 80vh;
}

.webp .sectionD {
  background: #F7F8FA url("../assets/bg-sectionD.webp") no-repeat center center;
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
