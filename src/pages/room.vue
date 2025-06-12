<template>
  <ParallaxItem :desc="desc" :img-url="src" :page-title="title" />
  <v-container class="pt-10">
    <GridLayout
      class="pt-8 pb-8"
      :custom-cols="6"
      :items="rooms"
    >
      <template #default="{item}">
        <CardItem
          :id="item.id"
          :border="'border'"
          :btn-second-text="'예약하기'"
          :btn-text="'자세히보기'"
          :desc="item.text"
          :height="360"
          :img-url="item.imgUrl"
          :info="item.info"
          second
          :sub-title="item.subTitle"
          :title="item.title"
          :variant="'outlined'"
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
      imgUrl: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '프리미엄 스위트', subTitle: '스위트',
      text: {
        bed: '킹사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 3,
      imgUrl: 'https://images.unsplash.com/photo-1631048835388-46642de1582e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '디럭스 스위트', subTitle: '스위트', text: {
        bed: '킹사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 4,
      imgUrl: 'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '프리미엄', subTitle: '일반', text: {
        bed: '킹사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 5,
      imgUrl: 'https://images.unsplash.com/photo-1631048648883-660ccd576581?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '디럭스', subTitle: '일반', text: {
        bed: '킹사이즈 베드 1개 or 퀸사이즈 베드 2개', view: 'City or River View',
      },
    },
    {
      id: 6,
      imgUrl: 'https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '2명 최대 | 100㎡', title: '스탠다드 (1베드)', subTitle: '일반', text: {
        bed: '퀸사이즈 베드 1개', view: 'City or River View',
      },
    },
    {
      id: 7,
      imgUrl: 'https://images.unsplash.com/photo-1690266503084-8ec336397478?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', info: '4명 최대 | 100㎡', title: '스탠다드 (2베드)', subTitle: '일반', text: {
        bed: '퀸사이즈 베드 2개', view: 'City or River View',
      },
    },
  ]

  const src = ref('https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  const title = ref('Room')
  const desc = ref('고급스러움부터 아늑함까지, 원하는 분위기에 맞춘 객실들로 특별한 하루를 완성하세요.')

</script>
<style lang="scss" scoped>
</style>
