<template>
  <div class="lfNavMenu">
    <nav>
      <NuxtLink
        v-for="(item, i) in productMenu"
        :key="'product-nav-menu-item' + i"
        :to="item.link"
        >{{ item.name }}</NuxtLink
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { topNavItemTypes } from "~/types/LfListTypes";
const productMenu = ref<topNavItemTypes[]>([
  { name: "Завтрак", link: "/" },
  { name: "Пиццы", link: "/" },
  { name: "Комбо", link: "/" },
  { name: "Закуски", link: "/" },
  { name: "Коктейли", link: "/" },
  { name: "Кофе", link: "/" },
  { name: "Напитки", link: "/" },
  { name: "Десерты", link: "/" },
  { name: "Соусы", link: "/" },
  { name: "Другие товары", link: "/" },
  { name: "Акции", link: "/" },
]);
</script>

<style scoped lang="scss">
.lfNavMenu {
  nav {
    @include flex-start;
    gap: 20px;
    font-size: $small_2;
    font-weight: 600;
    a {
      &:hover {
        color: $orange;
      }
    }
  }
}
</style>
