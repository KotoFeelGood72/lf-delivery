<template>
  <NuxtLayout>
    <LfStoriesSlider :data="StoriesList" />
    <LfPopularSlider :data="PopularList" />
    <lfProductsGridList
      v-for="category in categories"
      :data="category"
      :key="category.id"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import LfStoriesSlider from "~/components/sliders/LfStoriesSlider.vue";
import LfPopularSlider from "~/components/sliders/LfPopularSlider.vue";
import { StoriesList } from "./../consts/StoriesList";
import { PopularList } from "~/consts/PopularList";
import { categories } from "~/consts/ProductsList";
import lfProductsGridList from "./../components/list/lfProductsGridList.vue";

console.log(categories);
</script>

<style scoped></style>
