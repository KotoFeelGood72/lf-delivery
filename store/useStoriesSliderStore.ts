import { defineStore } from 'pinia';

export const useStoriesSliderStore = defineStore('stories', {
  state: () => ({
    currentStoriesIdx: 0 as number,
    currentStoriesImg: '' as string
  }),
  actions: {
    setCurrentStoriesIdx(idx: number) {
      this.currentStoriesIdx = idx
    },
    setCurrentStoriesImg(img: string) {
      this.currentStoriesImg = img
    },
    removeCurrentStoriesImg() {
      this.currentStoriesImg = ''
    },
  },
});


export const useStoriesSliderStoreRefs = () => storeToRefs(useStoriesSliderStore());
