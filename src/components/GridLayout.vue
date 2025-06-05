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
      <slot :item="item" />
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
.v-col-8 {
  padding: 2rem 0;
}
</style>
