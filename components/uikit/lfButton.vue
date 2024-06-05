<template>
  <div
    class="lf_button"
    @click="onClick"
    :style="'border-radius: ' + rounded + 'px;'"
    :class="['lf_button__size_' + size, 'lf_button__color_' + colorMode]"
  >
    <div class="lf_button__name">{{ name }}</div>
    <div class="lf_button__icon" v-if="icon"><Icon :name="icon" /></div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);
const props = withDefaults(
  defineProps<{
    name: string;
    icon?: string;
    size?: "xs" | "m" | "l" | "xl" | "xll";
    colorMode?: "gray" | "orange" | "opacity-orange";
    rounded: number;
  }>(),
  {
    name: "Кнопка",
    size: "l",
    colorMode: "orange",
    icon: "",
    rounded: 100,
  }
);
</script>

<style scoped lang="scss">
.lf_button {
  cursor: pointer;
  transition: all 0.3s ease;
  @include flex-center;
  // Size
  &.lf_button__size_xs {
    font-size: $small_2;
    padding: 8px 16px;
    height: 32px;
    font-weight: 600;
  }

  &.lf_button__size_m {
    font-size: $small_2;
    padding: 8px 20px;
    height: 40px;
    font-weight: 500;
    font-size: $small_3;
  }

  // Color mode

  &.lf_button__color_gray {
    background-color: $light-gray;
    color: $gray;
    &:hover {
      color: #000;
    }
  }

  &.lf_button__color_orange {
    background-color: $orange;
    color: $white;
    &:hover {
      background-color: $accent;
    }
  }
}
</style>
