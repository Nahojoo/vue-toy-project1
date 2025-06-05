<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-sheet position="static" width="'100%'">
      <v-parallax max-height="400" :src="imgUrl">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
          <BreadCrumbs />
          <h2 class="pb-2">{{ pageTitle }}</h2>
          <p class="text-wrap">{{ desc }}
          </p>
        </div>
      </v-parallax>
    </v-sheet>
  </v-container>
</template>

<script setup>
  defineProps({
    imgUrl: String,
    pageTitle: String,
    desc: String,
  })
</script>

<style lang="scss" scoped>

</style>
