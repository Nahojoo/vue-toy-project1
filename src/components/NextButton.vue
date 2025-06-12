<template>
  <v-btn
    class="pa-2 position-absolute d-flex align-center justify-center right-0 top-0"
    icon="mdi-arrow-right"
    size="x-small"
    @click="slideNext"
  />
</template>

<script setup>
  const props = defineProps({
    swiper: {
      type: Object,
      required: true,
    },
  })

  const slideNext = () => {
    if (props.swiper) {
      props.swiper.slideNext()
    }
  }
</script>

<style lang="scss" scoped>

</style>
