<template>
  <v-footer class="px-md-4" color="primary" height="200">
    <ul class="d-flex w-100 justify-space-between">
      <li class="opacity-60">
        <p>
          <span>체크인 16:00</span>
          <span>체크아웃 11:00</span>
        </p>
        <p><span>이메일</span>hotel@sample.com</p>
        <p><span>Tel</span>00-0000-0000</p>
      </li>
      <li class="text-caption d-flex flex-column align-end ga-4	font-weight-regular opacity-80">
        <div class="d-flex ga-md-6">
          <v-btn-tertiary>호텔소개</v-btn-tertiary>
          <v-btn-tertiary>오시는 길</v-btn-tertiary>
          <v-btn-tertiary>문의</v-btn-tertiary>
          <v-btn-tertiary>인재채용</v-btn-tertiary>
          <v-btn-tertiary>이용약관</v-btn-tertiary>
          <v-btn-tertiary>개인정보처리방침</v-btn-tertiary>
        </div>
        <div class="d-flex align-start ga-4">
          <div class="d-flex ga-3 opacity-80">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              density="comfortable"
              :icon="icon"
              variant="text"
            />
          </div>
          <div class="select">
            <v-select
              density="comfortable"
              :items="['family1', 'family2', 'family3', 'family4', ]"
              label="Family Site"
              min-width="200"
              variant="outlined"
            />
          </div>
        </div>
      </li>
    </ul>
  </v-footer>
</template>

<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
footer{
  flex-grow: 0;
}
</style>
