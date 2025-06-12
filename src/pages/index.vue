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
  <!-- intro -->
  <v-container
    class="pb-4 d-flex flex-column section"
  >
    <GridLayout :custom-cols="12" :items="grids">
      <template #default="{item, index}">
        <v-divider v-if="index !== 0" color="secondary" opacity="0.2" />
        <CardItem
          class=""
          :custom-class="['img-hover']"
          :font-size="'text-h4'"
          :height="500"
          :img-url="item.src"
          :info="item.desc"
          :title="item.title"
          :variant="'flat'"
        />
      </template>
    </GridLayout>
  </v-container>
  <!-- 프로모션 -->
  <v-container
    class="d-flex flex-column promotion"
  >
    <div class="position-relative">
      <h2 class="mb-8 text-h4 text-center">PROMOTION</h2>
      <!-- Slider  -->
      <NextButton :swiper="swiperInstance" />
      <PrevButton :swiper="swiperInstance" />
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        @slide-change="onSlideChange"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(item, index) in promo" :key="index">
          <CardItem
            :custom-class="['text-center', 'img-hover']"
            :font-size="'text-body-1'"
            :height="250"
            :img-url="item.src"
            :title="item.title"
            to="/"
            :variant="'outlined'"
          />
        </swiper-slide>
      </swiper>
    </div>

  </v-container>
  <!-- 멤버십 혜택 -->
  <v-container class="pa-0 mt-16 membership-section" fluid>
    <v-sheet class="position-relative" height="400">
      <v-img
        cover
        src="https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div class="fill-height bottom-gradient" />
      </v-img>
      <v-sheet class="content" width="'100%'">
        <div class="d-flex align-center justify-space-between mb-6">
          <div>
            <h3 class="text-h5  text-background pb-2 text-shadow">Membership Benefits</h3>
            <p class=" text-body-2 text-background text-shadow">멤버십에 가입해 다양한 혜택을 경험해보세요.</p>
          </div>
          <v-btn class="more-btn" icon="mdi-arrow-top-right" />
        </div>
        <v-container class="pa-2 bg-opacity-80">
          <v-row class="pt-4 pb-4 text-center" no-gutters>
            <v-col
              v-for="(item, index) in benefits"
              :key="index"
              :class="{'border' : index !== benefits.length -1}"
              cols="12"
              md="3"
            >
              <v-icon
                class="mb-2"
                color="grey-1"
                :icon="item.icon"
                size="large"
              />
              <h4 class="text-subtitle-2 pt-2 pb-1">{{ item.title }}</h4>
              <p class="text-body-2">{{ item.desc }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import GridLayout from '@/components/GridLayout.vue';
  import { ref } from 'vue'
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { A11y, Pagination, Scrollbar } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/scss';
  import 'swiper/scss/navigation';
  import 'swiper/scss/pagination';
  import 'swiper/scss/scrollbar';

  const swiperInstance = ref({})
  const onSwiper = swiper => {
    swiperInstance.value = swiper
    //console.log(swiperInstance)
  }
  const onSlideChange = () => {
    //console.log('slide change');
  };
  const modules = [Pagination, Scrollbar, A11y]

  // carousel
  const imgs = [
    { title: 'A Nature Hotel Beyond the Ordinary',
      subTitle: '자연과 하나 되는 공간, 푸른 숲과 맑은 공기 속에서 당신의 힐링이 시작됩니다.',
      src: 'https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'A Nature Hotel Beyond the Ordinary',
      subTitle: '자연과 하나 되는 공간, 바다에서 당신의 힐링이 시작됩니다.',
      src: 'https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'A Nature Hotel Beyond the Ordinary',
      subTitle: '자연과 하나 되는 공간, 도시에서 당신의 힐링이 시작됩니다.',
      src: 'https://images.unsplash.com/photo-1581955427155-890ed868b03b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }]


  const grids = [
    {
      title: 'ROOM',
      src: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: '자연과의 조화를 가장 소중하게 생각한 객실에서 탁 트인 풍경을 누릴 수 있도록 설계되었습니다.',
    },
    { title: 'DINING', src: 'https://images.unsplash.com/photo-1662982696492-057328dce48b?q=80&w=3237&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: '자연의 제철 식재료로 준비한 한 끼는 그 자체로 깊은 휴식이 됩니다. 사계절의 맛과 향을 천천히 음미해보세요.',
    },
    { title: 'FACILITIES', src: 'https://images.unsplash.com/photo-1563493653502-9e270be23596?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: '자연과 이어진 수면 위를 따라, 느릿하게 흘러가는 시간을 온전히 느껴보세요.',
    }]

  // promotion
  const promo = [
    {
      src: 'https://images.unsplash.com/photo-1562022791-9e287ba5708a?q=80&w=3250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '여름 디저트 출시',
    },
    {
      src: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=3058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '사전 예약 객실 10% 할인 혜택',
    },
    {
      src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '생일 축하 이벤트',
    },
    {
      src: 'https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '여름 패키지 오픈',
    },
    {
      src: 'https://images.unsplash.com/photo-1508349307373-ab2edc239589?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '애프터눈 티 세트',
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
.v-container {
  padding: 4rem 0 0 0;
}
.v-divider {
  margin: 4rem 0 6rem;
}
//carousel
.arrow-btn {
  width: 2.25rem;
  height: 2.25rem;
  background-color: white;
}
//promotion
.promotion {
  margin: 4rem auto 6rem;
  .swiper {
    width: 100%;
  }
}
// membership
.membership-section {
  .content {
    max-width: 1200px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .more-btn {
    &:hover {
      transform:translate(4px, -4px);
      transition: all 0.2 ease-in-out;
    }
  }
}
</style>
