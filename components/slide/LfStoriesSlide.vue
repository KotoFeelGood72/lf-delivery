<template>
  <div
    class="lfStoriesSlide"
    @click="
      [
        openModal('stories'),
        setCurrentStoriesIdx(idx),
        setCurrentStoriesImg(data.images[0].url),
      ]
    "
  >
    <img :src="data.picture" />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/useModalStore";
import { useStoriesSliderStore } from "./../../store/useStoriesSliderStore";

const { openModal } = useModalStore();
const { setCurrentStoriesIdx, setCurrentStoriesImg } = useStoriesSliderStore();
const props = withDefaults(
  defineProps<{
    data: any;
    idx: number;
  }>(),
  {
    data: null,
  }
);
</script>

<style scoped lang="scss">
.lfStoriesSlide {
  border-radius: 17px;
  overflow: hidden;
  @include flex-center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
