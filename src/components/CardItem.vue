<template>
  <v-card
    :border="border"
    class="mx-auto"
    :class="[customClass]"
    :variant="variant"
  >
    <template #title>
      <h3 class="pt-2 pb-2" :class="[customClass, fontSize]">{{ title }}</h3>
    </template>
    <template v-if="subTitle" #subtitle>
      <span class="text-body-2 pa-1 border">{{ subTitle }}</span>
    </template>
    <template #item>
      <p class="text-wrap text-body-2 text-grey-1 pt-2">{{ info }}</p>
    </template>
    <template #text>
      <span class="overflow-hidden d-block">
        <v-img aspect-ratio="16/9" cover :height="height" :src="imgUrl" />
      </span>
      <ul v-if="text" class="text-left ml-4 pl-4 pt-4">
        <li>{{ text.bed }}</li>
        <li>{{ text.view }}</li>
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
    subTitle: String,
    imgUrl: String,
    text: {
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
.text {
  li {
    text-align: left;
  }
}
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
