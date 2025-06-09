<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-carousel height="70vh">
      <template #prev="{props}">
        <v-btn
          class="arrow-btn"
          :icon="props.icon"
          @click="props.onClick"
        />
      </template>
      <template #next="{props}">
        <v-btn
          class="arrow-btn"
          :icon="props.icon"
          @click="props.onClick"
        />
      </template>
      <v-carousel-item
        v-for="(img,index) in imgs"
        :key="index"
        aspect-ratio="16/9"
        cover
        :src="img.src"
        width="100%"
      >
        <v-sheet class="fill-height pa-6 d-flex flex-column justify-end pb-14">
          <h2 class="title text-h3 text-background">{{ img.title }}</h2>
          <p class="text-body-1 pt-2 text-background">{{ img.subTitle }}</p>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>

  <v-container
    class="pa-0 d-flex flex-column section"
    fluid
  >
    <GridLayout :custom-cols="8" :items="grids">
      <template #default="{item}">
        <CardItem
          :btn-text="'자세히 보기'"
          :height="450"
          :img-url="item.src"
          :info="item.desc"
          :title="item.title"
        />
      </template>
    </GridLayout>
  </v-container>
  <v-container
    class="pa-0 d-flex flex-column promotion"
  >
    <h2 class="mb-8 text-h5 text-center">promotion</h2>
    <GridLayout :custom-cols="4" :items="promo">
      <template #default="{item}">
        <CardItem
          :height="250"
          :img-url="item.src"
          :title="item.title"
        />
      </template>
    </GridLayout>
  </v-container>
  <!-- 멤버십 혜택 -->
  <v-container class="pa-0 mt-16 membership-section" fluid>
    <v-sheet class="position-relative">
      <v-img
        cover
        gradient="to bottom, rgba(168,147,119, 0.0125), rgba(168,147,119,0.6)"
        height="450"
        src="https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <v-sheet class="content" width="'100%'">
        <h3 class="text-h5 opacity-90 text-background pb-2 text-shadow">Membership Benefits</h3>
        <p class="mb-10 opacity-90 text-subtitle-2 text-background text-shadow">멤버십에 가입해 다양한 혜택을 경험해보세요.</p>
        <v-container class="bg-opacity-60">
          <v-row class="pt-6 pb-6" no-gutters>
            <v-col v-for="(item, index) in benefits" :key="index" cols="12" md="3">
              <v-icon
                class="mb-2"
                color="grey-1"
                :icon="item.icon"
                size="x-large"
              />
              <h4 class="text-subtitle-1 pt-2">{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </v-col>
          </v-row>
        </v-container>

      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import GridLayout from '@/components/GridLayout.vue';

  // carousel
  const imgs = [
    { title: 'A Nature Hotel Beyond the Ordinary', subTitle: '자연과 하나 되는 공간, 푸른 숲과 맑은 공기 속에서 당신의 힐링이 시작됩니다.', src: 'https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'A Nature Hotel Beyond the Ordinary', src: 'https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'A Nature Hotel Beyond the Ordinary', src: 'https://images.unsplash.com/photo-1581955427155-890ed868b03b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }]


  const grids = [
    {
      title: 'room',
      src: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: '자연과의 조화를 가장 소중하게 생각한 저희 객실은, 모든 공간에서 탁 트인 풍경을 누릴 수 있도록 설계되었습니다.',
    },
    { title: 'dining', src: 'https://images.unsplash.com/photo-1662982696492-057328dce48b?q=80&w=3237&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: '자연의 제철 식재료로 준비한 한 끼는 그 자체로 깊은 휴식이 됩니다. 창 너머로 펼쳐지는 풍경을 바라보며, 사계절의 맛과 향을 천천히 음미해보세요.',
    },
    { title: 'spa', src: 'https://images.unsplash.com/photo-1563493653502-9e270be23596?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: '자연과 이어진 수면 위를 따라, 느릿하게 흘러가는 시간을 온전히 느껴보세요.',
    }]

  // promotion
  const promo = [
    {
      src: 'https://images.unsplash.com/photo-1562022791-9e287ba5708a?q=80&w=3250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '여름 한정 메뉴',
    },{
      src: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=3058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '사전 예약 10% 할인 혜택',
    },
    {
      src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '생일 축하 패키지',
    },
  ]

  // membership benefit
  const benefits = [
    { title: '숙박', icon :'mdi-bed', desc: '숙박 시 10% 포인트 적립' },
    { title: '다이닝', icon :'mdi-table-chair', desc: '멤버십 회원 특별 메뉴 제공' },
    { title: '라운지 이용', icon :'mdi-swim', desc: '무료 제공하는 라운지 입장' },
    { title: '웰컴 드링크', icon :'mdi-coffee', desc: '웰컴드링크 및 서비스 제공' },
  ]
</script>

<style lang="scss" scoped>
.section {
  margin: 4rem 0 10rem;
}
.v-sheet {
  background-color: transparent;
}
.v-col {
  padding: 0;
}
.arrow-btn {
  width: 2rem;
  height: 2rem;
  box-shadow: none;
  background-color: transparent;
}
.promotion {
  margin: 0 auto;
}
// membership
.membership-section {
  .content {
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
</style>
