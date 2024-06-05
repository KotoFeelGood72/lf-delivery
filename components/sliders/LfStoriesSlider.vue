<template>
  <div class="LfStoriesSlider">
    <div class="container">
      <div class="LfStoriesSlider__main">
        <Swiper
          :slides-per-view="6.2"
          :space-between="7"
          :modules="[Navigation]"
          :navigation="{
            prevEl: `.LfStoriesSlider_nav__prev`,
            nextEl: `.LfStoriesSlider_nav__next`,
          }"
        >
          <SwiperSlide v-for="(item, i) in data" :key="'stories-item-slide-' + i">
            <LfStoriesSlide :data="item" :idx="i" />
          </SwiperSlide>
        </Swiper>
        <div class="LfStoriesSlider__nav">
          <div class="LfStoriesSlider_nav__prev">
            <Icon name="tabler:chevron-left" size="40" />
          </div>
          <div class="LfStoriesSlider_nav__next">
            <Icon name="tabler:chevron-right" size="40" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LfStoriesSlide from "../slide/LfStoriesSlide.vue";
import { Navigation } from "swiper/modules";

withDefaults(
  defineProps<{
    data: any;
  }>(),
  {
    data: null,
  }
);
</script>

<style scoped lang="scss">
.LfStoriesSlider__main {
  padding: 20px 0;
  position: relative;
}

.LfStoriesSlider__nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 108%;
  @include flex-space;
  z-index: 12;
  color: $orange;
  pointer-events: none;
}

.LfStoriesSlider_nav__prev,
.LfStoriesSlider_nav__next {
  transition: opacity 0.3s ease;
  pointer-events: all;
  cursor: pointer;
  &.swiper-button-disabled {
    opacity: 0;
  }
}
</style>
