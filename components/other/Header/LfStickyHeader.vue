<template>
  <div class="lfStickyHeader">
    <div class="container">
      <div class="lfStickyHeader__main">
        <div class="lfStickyHeader_main__left">
          <div class="lfFavicon__logo">
            <svg-icon name="favicon" />
          </div>
          <LfNavMenu />
        </div>
        <lfButton name="Корзина" size="m" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LfNavMenu from "../elements/LfNavMenu.vue";
import lfButton from "~/components/uikit/lfButton.vue";
</script>

<style lang="scss" scoped>
.lfStickyHeader__main,
.lfStickyHeader_main__left {
  @include flex-space;
}

.lfFavicon__logo {
  display: none;
}
</style>
