<template>
  <div class="container-fluid">
    <div class="row justify-content-end ">
      <div class="col-10 text-left ">
        <h4 class="display-4 font-weight-bold"> Der Knight</h4>
        <p class="body">Der Knight besitzt eine Abo-Karte oder eine gekaufte Karte
          der Verkehrsbetriebe mit dieser er berechtigt ist, je nach Bundesland eine oder mehrere
          Personen an Wochentagen ab 19Uhr und am Wochenende ganztägig
          mitzunehmen.
          Der Knight ist großzügig und warmherzig. Wenn er gebraucht wird fühlt er
          sich richtig. Unser/e Ritter/in in der goldenen Rüstung eben.</p>
      </div>
    </div>
    <div class="row justify-content-end pt-4 pt-lg-4">
      <div class="col-10 text-left ">
        <h2 class="display-4 font-weight-bold"> Der Rider</h2>
        <p class="body">Der Rider sucht nach einer Mitfahrgelegenheit und ist kommunikativ.
          Sein Ziel ist es meistens so günstig und schnell wie möglich von A nach B
          zu kommen. </p>
      </div>
    </div>

  </div>
</template>

<script>
import DownloadIcons from './DownloadIcons';

export default {
  name: 'SectionC',
  components: { DownloadIcons },
  data() {
    return {};
  },
};
</script>

<style scoped>
.body{
  font-size: x-large;
}
</style>
