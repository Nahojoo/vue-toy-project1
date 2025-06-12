<template>
  <v-breadcrumbs class="position-absolute bottom-0 left-0 text-shadow" :items="links">
    <template #prepend>
      <v-icon icon="mdi-home" size="small" />
    </template>
    <template #divider>
      <v-icon icon="mdi-chevron-right" />
    </template>
  </v-breadcrumbs>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router';
  const route = useRoute();

  const current = computed(()=>
    route.path.replace('/', '')
  )

  const links = [
    {
      title: 'Home',
      disabled: false,
      to: '/',
    },
    {
      title: current.value,
      disabled: false,
      to: route.path ,
    },
  ]
</script>

<style lang="scss" scoped>

</style>
