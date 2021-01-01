<template>
  <div class="container pt-3">

    <div class="row">
      <div class="col-lg-5  pt-4 my-auto mx-auto">
        <img id="knightride-logo-type" class="img-fluid pb-4"
             src="../assets/Knightide-Textlogo@2x.png"
             alt="knightride-logo-type">
        <h3 class="text-body pb-4"> {{ short_description }}</h3>
        <h3 class="text-body pb-0"> {{ register_text }}</h3>

        <div class="container-fluid align-content-end">
          <DownloadIcons/>
        </div>
      </div>

      <div class="col-lg-6 pt-4 pr-5">
        <img id="ride-feed-img" class="img-fluid" src="../assets/Group-838@2x.png"
             alt="ride-feed-img">
      </div>

    </div>
  </div>
</template>

<script>
import DownloadIcons from './common-components/download-icons/DownloadIcons';

export default {
  name: 'SectionA',
  components: { DownloadIcons },
  data() {
    return {
      short_description: 'Deine Mitfahrgelegenheit für öffentliche Verkehrsmittel.',
      register_text: 'Bekommst es mit sobald wir launchen!',
    };
  },
};
</script>

<style scoped>

#ride-feed-img {
  max-height: 90vh;
}

#knightride-logo-type {
  width: 70%;
}


</style>
