<template>
  <v-card
    class="mx-auto"
    variant="flat"
  >
    <template #title>{{ title }}</template>
    <template v-if="subTitle" #subtitle>
      <span class="sub-title">{{ subTitle }}</span>
    </template>
    <template #item>
      <p class="text-wrap">{{ info }}</p>
    </template>
    <template #text>
      <v-img aspect-ratio="16/9" cover :height="height" :src="imgUrl" />
      <ul v-if="text" class="text pl-4 pt-4">
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
  });
  defineEmits(['go-detail'])
</script>

<style lang="scss" scoped>
.v-card {
  background-color: transparent;
}
.title {
  color: rgb(var(--v-theme-primary));
  font-weight: 800;
  font-size: 1.5rem;
}
.sub-title {
  border: 1px solid #ccc;
  padding: 0.25rem;
  border-radius: 0.25rem;
}
.text {
  li {
    text-align: left;
  }
}
</style>
