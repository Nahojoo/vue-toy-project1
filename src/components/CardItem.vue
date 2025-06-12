<template>
  <v-card
    :border="border"
    class="mx-auto"
    :class="[customClass]"
    :variant="variant"
  >
    <template v-if="title" #title>
      <h3 class="pt-2 pb-2" :class="[customClass, fontSize]">{{ title }}</h3>
    </template>
    <template v-if="subTitle || info" #subtitle>
      <span v-if="subTitle" class="text-body-2 pa-1 border text-grey-1">{{ subTitle }}</span>
      <p v-if="info" class="text-wrap text-body-2 pt-2 pb-2 text-items">{{ info }}</p>
    </template>
    <template #text>
      <span class="overflow-hidden d-block">
        <v-img aspect-ratio="" cover :height="height" :src="imgUrl" />
      </span>
      <ul v-if="desc" class="text-left ml-4 pl-4 pt-4">
        <li>{{ desc.bed }}</li>
        <li>{{ desc.view }}</li>
      </ul>
    </template>
    <!-- buttons -->
    <template v-if="btnText" #actions>
      <v-btn-primary type="button">{{ btnText }}</v-btn-primary>
      <v-btn-primary v-if="second" type="button" variant="outlined">{{ btnSecondText }}</v-btn-primary>
    </template>
  </v-card>
</template>

<script setup>
  defineProps({
    title: String,
    subTitle: {
      type:String,
    },
    imgUrl: String,
    desc: {
      type: Object,
      default: null,
    },
    info: String,
    btnText: String,
    btnSecondText: String,
    height: Number,
    second: Boolean,
    customClass: {
      type: [String, Array, Object],
      default: () => '',
    },
    fontSize: {
      type: String,
      default: 'text-subtitle-1',
    },
    variant: String,
    border: String,
  });
  defineEmits(['go-detail'])
</script>

<style lang="scss" scoped>
.v-card--variant-outlined {
  border: thin solid rgb(var(--v-border-color))!important;
}
.img-hover {
  .v-img:hover {
  transition: transform 0.4s ease;
  transform-origin: center center; // 확대 중심 설정
  transform: scale(1.1);
  }
}
</style>
