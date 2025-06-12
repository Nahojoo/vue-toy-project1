<template>
  <v-btn
    class="pa-2 mr-12 position-absolute d-flex align-center justify-center right-0 top-0 bg-white "
    icon="mdi-arrow-left"
    size="x-small"
    @click="slidePrev"
  />
</template>

<script setup>
  const props = defineProps({
    swiper: {
      type: Object,
      required: true,
    },
  })

  const slidePrev = () => {
    if (props.swiper) {
      props.swiper.slidePrev()
    }
  }
</script>

<style lang="scss" scoped>

</style>
