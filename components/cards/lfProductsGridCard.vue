<template>
  <div class="lfproduct_item">
    <div class="lfproduct_item__img">
      <img :src="data.img" alt="" />
    </div>
    <div class="lfproduct_item__content">
      <div class="lfproduct_item__txt">
        <lfTitle size="20" :title="data.title" :level="3" />
        <p>{{ data.description }}</p>
      </div>
      <div class="lfproduct_item__info">
        <span>{{ data.price }}</span>
        <lfButton name="В корзину" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import lfTitle from "../uikit/lfTitle.vue";
import lfButton from "../uikit/lfButton.vue";
const props = withDefaults(
  defineProps<{
    data: any;
  }>(),
  {
    data: null,
  }
);
</script>

<style scoped></style>
