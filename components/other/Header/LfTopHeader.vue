<template>
  <div class="topHeader">
    <div class="container">
      <div class="topHeader__main">
        <nav>
          <NuxtLink
            v-for="(item, i) in topNav"
            :key="'top-nav-item' + i"
            :to="item.link"
            >{{ item.name }}</NuxtLink
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { topNavItemTypes } from "~/types/LfListTypes";
const topNav = ref<topNavItemTypes[]>([
  { name: "Прямой эфир", link: "/" },
  { name: "Работа в Додо", link: "/" },
  { name: "О нас", link: "/" },
  { name: "Контакты", link: "/" },
]);
</script>

<style scoped lang="scss">
.topHeader {
  border-bottom: 1px solid $light-gray;
}
.topHeader__main {
  padding: 15px 0;
  nav {
    @include flex-start;
    gap: 20px;
    a {
      font-size: 14px;
      font-weight: 600;
      &:hover {
        color: $orange;
      }
    }
  }
}
</style>
