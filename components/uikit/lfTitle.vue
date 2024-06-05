<template>
  <component
    :is="`h${level}`"
    :class="[isSizeTitle, { 'font-bold': weight, 'font-normal': !weight }]"
    >{{ title }} <span><slot></slot></span
  ></component>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string;
    level: number;
    size: "16" | "20" | "24" | "36" | "default";
    weight: boolean;
  }>(),
  {
    title: "",
    level: 3,
    weight: true,
  }
);

const isSizeTitle = computed(() => {
  switch (props.size) {
    case "16":
      return "title-16";
    case "20":
      return "title-20";
    case "24":
      return "title-24";
    case "36":
      return "title-36";
    default:
      return "title-default";
  }
});
</script>

<style lang="scss" scoped>
.title-16 {
  font-size: $small_2;
}
.title-20 {
  font-size: $normal_3;
}
.title-24 {
  font-size: $medium_2;
}
.title-36 {
  font-size: $xlarge_2;
}

.font-bold {
  font-weight: 600;
}
.font-normal {
  font-weight: 400;
}
</style>
