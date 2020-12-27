<template>
  <div class="container pt-3">

    <div class="row">
      <div class="col-lg-5  pt-4 my-auto mx-auto">
        <img id="knightride-logo-tyoe" class="img-fluid pb-4"
             src="../assets/Knightide-Textlogo@2x.png"
             alt="knightride-logo-tyoe">
        <h3 class="text-body pb-4"> {{ short_description }}</h3>
        <div class="container-fluid">
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
import DownloadIcons from './DownloadIcons';

export default {
  name: 'SectionA',
  components: { DownloadIcons },
  data() {
    return {
      short_description: 'Du wirst jetzt mitgenommen\n' +
        'und kannst noch einfacher \n' +
        'Mitnehmen als je zuvor.\n' +
        'Mit dem Bus. Mit der Bahn.\n' +
        'Probier es aus.',
    };
  },
};
</script>

<style scoped>

#ride-feed-img {
  max-height: 90vh;
}

#knightride-logo-tyoe {
  width: 70%;
}


</style>
