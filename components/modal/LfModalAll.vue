<template>
  <div
    class="modal"
    v-if="activeModalComponent"
    :class="['modal_postionY__' + positionY, 'modal_postionX__' + positionX]"
  >
    <div
      class="modal__bg"
      :class="{ 'stories-bg': currentStoriesImg }"
      :style="backgroundStyle"
      @click="[closeCurrentModal(), removeCurrentStoriesImg()]"
    ></div>
    <div class="modal_main__w">
      <div class="modal_main">
        <component :is="activeModalComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useModalStoreRefs, useModalStore } from "~/store/useModalStore";
import {
  useStoriesSliderStore,
  useStoriesSliderStoreRefs,
} from "~/store/useStoriesSliderStore";

const AsyncLfModalStories = defineAsyncComponent(
  () => import("./ModalComponent/LfModalStories.vue")
);

const props = withDefaults(
  defineProps<{
    positionY?: "center" | "right" | "left";
    positionX?: "center" | "right" | "left";
  }>(),
  {
    positionY: "center",
    positionX: "center",
  }
);

const { modals } = useModalStoreRefs();
const { closeModal } = useModalStore();
const { removeCurrentStoriesImg } = useStoriesSliderStore();
const { currentStoriesImg } = useStoriesSliderStoreRefs();
type ModalKey = keyof typeof modals.value;

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${currentStoriesImg.value})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const activeModalComponent = computed(() => {
  for (const [key, isActive] of Object.entries(modals.value)) {
    if (isActive) {
      switch (key) {
        case "stories":
          return AsyncLfModalStories;
        default:
          return null;
      }
    }
  }
  return null;
});

const activeModalName = computed(() => {
  for (const name in modals.value) {
    if (modals.value[name as ModalKey]) {
      return name as ModalKey;
    }
  }
  return null;
});

const closeCurrentModal = () => {
  const modalName = activeModalName.value;
  if (modalName) {
    closeModal(modalName);
  }
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;

  .modal_postionY__center {
    @include flex-center;
  }
  .modal_postionX__center {
    @include flex-center;
  }
}
.modal__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000065;
}

.modal_main__w {
  position: relative;
  width: 100%;
  height: 100%;
  @include flex-center;
  pointer-events: none;
}

.modal_main {
  pointer-events: all;
}

.stories-bg {
  transition: background-image 0.5s ease-in-out;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(30px);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0));
  }
}
</style>
