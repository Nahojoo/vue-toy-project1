<template>
  <v-card
    :border="border"
    class="mx-auto"
    :variant="variant"
  >
    <template #title>
      <h3 class="text-subtitle-1 pt-4 pb-4" :class="customClass">{{ title }}</h3>
    </template>
    <template v-if="subTitle" #subtitle>
      <span class="text-subtitle-1 pa-0">{{ subTitle }}</span>
    </template>
    <template #item>
      <p class="text-wrap text-subtitle-2 text-grey-2">{{ info }}</p>
    </template>
    <template #text>
      <v-img aspect-ratio="16/9" cover :height="height" :src="imgUrl" />
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
    customClass: String,
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
</style>
