<template>
  <section class="category-bloc">
    <div class="container">
      <div class="category-bloc__main">
        <lfTitle
          size="36"
          :title="data.categoryName"
          :level="2"
          :weight="true"
          class="category-title"
        />
        <ul class="products_grid__list">
          <li v-for="product in data.products" :key="product.id">
            <lfProductsGridCard :data="product" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import lfProductsGridCard from "../cards/lfProductsGridCard.vue";
import lfTitle from "../uikit/lfTitle.vue";
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss">
.products_grid__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
}
.category-title {
  margin: 32px 0;
}
</style>
