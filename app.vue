<script setup lang="ts">
import LfModalAll from "./components/modal/LfModalAll.vue";
</script>

<template>
  <div class="main">
    <NuxtPage />
    <LfModalAll />
  </div>
</template>

<style lang="scss">
@import "/assets/scss/fonts";
body {
  font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: $black;
}
</style>
