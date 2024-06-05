<template>
  <div class="LfPopular_slide">
    <div class="LfPopular_slide__img">
      <img :src="data.img" alt="" />
    </div>
    <div class="LfPopular_slide__content">
      <lfTitle :title="data.title" size="16" :weight="false" />
      <p>{{ data.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.LfPopular_slide {
  @include flex-start;
  gap: 10px;
  box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
  padding: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(6, 5, 50, 0.082) 0px 4px 22px -6px;
  }
}

.LfPopular_slide__img {
  max-width: 80px;
  width: 100%;
  height: 100%;
  @include flex-center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.LfPopular_slide__content {
  @include flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
}
</style>
