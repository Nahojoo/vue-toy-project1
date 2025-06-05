<template>
  <ParallaxItem :desc="desc" :img-url="src" :page-title="title" />
  <v-container>
    <GridLayout
      class="pt-8 pb-8"
      :custom-cols="6"
      :items="rooms"
    >
      <template #default="{item}">
        <CardItem
          :id="item.id"
          :btn-second-text="'예약하기'"
          :btn-text="'자세히보기'"
          class="card"
          :height="300"
          :img-url="item.imgUrl"
          :info="item.info"
          second
          :sub-title="item.subTitle"
          :text="item.text"
          :title="item.title"
        />
      </template>
    </GridLayout>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  const rooms = [
    {
      id: 1,
      imgUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      info: '4명 최대 | 100㎡',
      title: '스위트 킹',
      subTitle: '스위트',
      text: {
        bed: '킹사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 2,
      imgUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '프리미엄 스위트', subTitle: '스위트',
      text: {
        bed: '킹사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 3,
      imgUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '디럭스 스위트', subTitle: '스위트', text: {
        bed: '킹사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 4,
      imgUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '프리미엄', subTitle: '일반', text: {
        bed: '킹사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 5,
      imgUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '디럭스', subTitle: '일반', text: {
        bed: '킹사이즈 베드 1개 or 퀸사이즈 베드 2개', view: 'City or River View',
      },
    },
    {
      id: 6,
      imgUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '2명 최대 | 100㎡', title: '스탠다드 (1베드)', subTitle: '일반', text: {
        bed: '퀸사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 7,
      imgUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '스탠다드 (2베드)', subTitle: '일반', text: {
        bed: '퀸사이즈 베드 2개', view: 'City or River View',
      },
    },
  ]

  const src = ref('https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  const title = ref('room')
  const desc = ref('dd')

</script>
<style lang="scss" scoped>
.card {
  border: 1px solid #e2e2e2;
}
.title {
  text-align: center;
}
</style>
