<template>
  <v-row
    align="center"
    class="row"
    justify="center"
  >
    <v-col
      v-for="(item, idx) in items"
      :key="idx"
      :cols="customCols"
    >
      <slot :index="idx" :item="item" />
    </v-col>
  </v-row>
</template>

<script setup>
  defineProps({
    items : {
      type: Array,
      required: true,
    },
    customCols: {
      type: Number,
    },
  })
</script>

<style lang="scss" scoped>
.v-col {
  text-align: center;
}
</style>
