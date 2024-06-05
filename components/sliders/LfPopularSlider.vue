<template>
  <section class="LfPopular">
    <div class="container">
      <lfTitle title="Часто заказывают" size="24" class="popular-title" />
      <div class="LfPopular_main">
        <Swiper
          :slides-per-view="4.5"
          :space-between="20"
          :modules="[Navigation]"
          :navigation="{
            prevEl: `.LfStoriesSlider_nav__prev`,
            nextEl: `.LfStoriesSlider_nav__next`,
          }"
        >
          <SwiperSlide v-for="(item, i) in data" :key="'stories-item-slide-' + i">
            <LfPopularSlide :data="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Navigation } from "swiper/modules";
import LfPopularSlide from "../slide/LfPopularSlide.vue";
import lfTitle from "../uikit/lfTitle.vue";
const props = withDefaults(
  defineProps<{
    data: any;
  }>(),
  {
    data: null,
  }
);
</script>

<style scoped lang="scss">
.LfPopular_main {
  .swiper {
    padding: 15px;
    margin: 0 -15px;
  }
}

.popular-title {
  margin: 16px 0;
}
</style>
