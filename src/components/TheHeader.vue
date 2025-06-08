<template>
  <v-app-bar class="px-md-4" flat scroll-behavior="hide">
    <h1><v-app-bar-title>Logo</v-app-bar-title></h1>
    <v-spacer />
    <div>
      <v-btn :to="'/login'">로그인</v-btn>
      <v-btn :to="'/'">예약 확인</v-btn>
      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props">
            Kr
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in lists" :key="index" slim :value="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        :prepend-icon="theme === 'lightTheme' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        slim
        @click="toggleTheme"
      />
    </div>
    <template #extension>
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        class="me-2 text-none"
        :class="$route.path === item.path ? 'active' : ''"
        slim
        :to="item.path"
      > {{ item.name }}</v-btn>
      <v-spacer />
      <v-btn-primary>객실예약</v-btn-primary>
    </template>
  </v-app-bar>
</template>

<script setup>
  import { useTheme } from 'vuetify';

  const lists = [
    { title: 'KR' },
    { title: 'EN' },
    { title: 'CN' },
    { title: 'JP' },
  ]

  const items = [{ name: 'home', path: '/' }, { name: 'room', path: '/room' }]
  const theme = useTheme();

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
  }
</script>

<style lang="scss" scoped>
.active {
  font-weight: bold;
}
</style>
