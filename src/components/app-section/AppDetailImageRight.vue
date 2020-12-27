<template>
  <div class="row pt-5 pb-5">

    <div class="col-lg-5 pb-sm-5 pt-sm-5 my-auto mx-auto auto d-none d-lg-block">
      <h2 class="text-body p-2 pb-4"> {{ header }}</h2>
      <h4 class="text-body p-1"> {{ body }}</h4>
    </div>

    <div class="col-lg-5 col-sm-8 my-auto mx-auto">
      <img :id='id' :src="require(`@/assets/${imageSrc}`)"
           class="img-fluid" :alt='id'>
    </div>

    <div class="col-lg-5 pb-sm-5 pt-sm-5 my-auto mx-auto d-block d-lg-none">
      <h2 class="text-body p-2 pb-4"> {{ header }}</h2>
      <h4 class="text-body p-1"> {{ body }}</h4>
    </div>
  </div>


</template>

<script>
export default {
  name: 'AppDetailImageRight',
  props: ['header', 'body', 'imageSrc', 'id'],
};
</script>

<style scoped>
 {

}
</style>
