<template>
  <div class="stories-slider-wrapper">
    <div class="stories-slider">
      <Swiper
        :slides-per-view="1"
        :space-between="7"
        :modules="[Navigation]"
        @swiper="onSwiper"
        :initialSlide="currentStoriesIdx"
        :speed="700"
        :navigation="{
          prevEl: '.stories-slider-prev',
          nextEl: '.stories-slider-next',
        }"
      >
        <SwiperSlide
          v-for="(item, index) in StoriesList"
          :key="'stories-item-slide-' + index"
        >
          <div class="stories-slide">
            <div
              class="stories-close"
              @click="[closeModal('stories'), removeCurrentStoriesImg()]"
            >
              <Icon name="ant-design:close-outlined" />
            </div>
            <div class="navigation-img">
              <div class="prev-img" @click="prevImage"></div>
              <div class="next-img" @click="nextImage"></div>
            </div>
            <img
              v-if="item.images && item.images[activeImages[index]]"
              :src="item.images[activeImages[index]].url"
              alt=""
            />
            <div class="progress-bar">
              <div
                v-for="(image, idx) in item.images"
                :key="idx"
                class="progress-segment"
                @click="setImage(index, idx)"
              >
                <div class="progress_line__bg"></div>
                <div
                  class="progress_line"
                  :style="{
                    width:
                      idx === activeImages[index]
                        ? `${percent}%`
                        : idx < activeImages[index]
                        ? '100%'
                        : '0%',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="stories_slider__nav">
        <div class="stories-slider-prev">
          <Icon name="bytesize:chevron-left" size="24" />
        </div>
        <div class="stories-slider-next">
          <Icon name="bytesize:chevron-right" size="24" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { StoriesList } from "~/consts/StoriesList";
import { useModalStore } from "~/store/useModalStore";
import {
  useStoriesSliderStoreRefs,
  useStoriesSliderStore,
} from "./../../../store/useStoriesSliderStore";

const mySwiper = ref(null);
const activeImages = ref(StoriesList.map(() => 0));
const currentIndexTime = ref(0);
const indexSelected = ref(0);
const timers = ref([]);
const percent = ref(0);
const { closeModal } = useModalStore();
const { currentStoriesIdx } = useStoriesSliderStoreRefs();
const { setCurrentStoriesImg, removeCurrentStoriesImg } = useStoriesSliderStore();

const nextImage = () => {
  const currentIndex = indexSelected.value;
  const currentImages = StoriesList[currentIndex].images;
  const nextImgIndex = (activeImages.value[currentIndex] + 1) % currentImages.length;

  activeImages.value[currentIndex] = nextImgIndex;
  currentIndexTime.value = 0;
  percent.value = 0;

  if (nextImgIndex === 0 && currentIndex === StoriesList.length - 1) {
    closeModal("stories");
    removeCurrentStoriesImg();
  } else {
    if (nextImgIndex === 0) {
      mySwiper.value.slideNext();
    }
    setCurrentStoriesImg(currentImages[nextImgIndex].url);
  }
};

const prevImage = () => {
  const currentIndex = indexSelected.value;
  const currentImages = StoriesList[currentIndex].images;
  const prevImgIndex =
    (activeImages.value[currentIndex] - 1 + currentImages.length) % currentImages.length;

  if (prevImgIndex === currentImages.length - 1) {
    if (currentIndex === 0) {
    } else {
      mySwiper.value.slidePrev();
      indexSelected.value = currentIndex - 1;
      activeImages.value[currentIndex - 1] =
        StoriesList[currentIndex - 1].images.length - 1;
      setCurrentStoriesImg(
        StoriesList[currentIndex - 1].images[activeImages.value[currentIndex - 1]].url
      );
    }
  } else {
    activeImages.value[currentIndex] = prevImgIndex;
    setCurrentStoriesImg(currentImages[prevImgIndex].url);
  }

  currentIndexTime.value = 0;
  percent.value = 0;
};

const changeImage = () => {
  const currentIndex = indexSelected.value;
  const currentImageCount = StoriesList[currentIndex].images.length;
  const nextIndex = (activeImages.value[currentIndex] + 1) % currentImageCount;

  if (currentIndexTime.value >= 5000) {
    activeImages.value[currentIndex] = nextIndex;
    currentIndexTime.value = 0;
    percent.value = 0;
    setCurrentStoriesImg(StoriesList[currentIndex].images[nextIndex].url);
    if (nextIndex === 0) {
      if (currentIndex === StoriesList.length - 1) {
        closeModal("stories");
        removeCurrentStoriesImg();
      } else {
        mySwiper.value.slideNext();
      }
    }
  } else {
    currentIndexTime.value += 100;
    percent.value = (currentIndexTime.value / 5000) * 100;
  }
};

const onSwiper = (swiper) => {
  mySwiper.value = swiper;
  mySwiper.value.on("slideChange", () => {
    indexSelected.value = mySwiper.value.activeIndex;
    currentIndexTime.value = 0;
    percent.value = 0;
    changeImage();
  });
};

const setImage = (index, imageIndex) => {
  activeImages.value[index] = imageIndex;
  currentIndexTime.value = 0;
  percent.value = 0;
  setCurrentStoriesImg(StoriesList[index].images[imageIndex].url);
};

const clearIntervals = () => {
  clearInterval(timers.value);
};
onMounted(() => {
  timers.value = setInterval(changeImage, 100);
});

onUnmounted(() => {
  clearIntervals();
  if (mySwiper.value) {
    mySwiper.value.off("slideChange");
  }
});

watch(indexSelected, (newVal) => {
  setCurrentStoriesImg(StoriesList[newVal].images[activeImages.value[newVal]].url);
});

watch(
  () => activeImages.value[indexSelected.value],
  (newVal) => {
    setCurrentStoriesImg(StoriesList[indexSelected.value].images[newVal].url);
  }
);

watch(
  () => StoriesList.length,
  () => {
    clearInterval(timers.value);
    timers.value = setInterval(changeImage, 100);
  }
);
</script>

<style scoped lang="scss">
.stories-slider-wrapper {
  position: relative;
}
.stories-slider {
  max-width: 546px;
}

.stories-slide {
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  @include flex-center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.stories_slider__nav {
  position: absolute;
  z-index: 12;
  top: 50%;
  left: 50%;
  width: 125%;
  transform: translate(-50%, -50%);
  @include flex-space;
  color: $white;
  pointer-events: none;

  div {
    pointer-events: all;
  }
}

.progress-bar {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  display: flex;
  height: 3px;
  @include flex-center;
  width: 100%;
  gap: 5px;
  max-width: calc(100% - 10px);
  .progress-segment {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 3;
    .progress_line__bg {
      background-color: #ffffffa2;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .progress_line {
      border-radius: 5px;
      background-color: $white;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.navigation-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  @include flex-center;

  div {
    width: 50%;
    height: 100%;
  }
}

.stories-close {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: #ffffffee;
  @include flex-center;
  color: #b4b4b4;
  cursor: pointer;
  z-index: 101;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fffdfde7;
  }
}
.stories-slider-next,
.stories-slider-prev {
  cursor: pointer;
  &.swiper-button-disabled {
    color: $black;
    cursor: not-allowed;
    opacity: 0.4;
  }
}
</style>
