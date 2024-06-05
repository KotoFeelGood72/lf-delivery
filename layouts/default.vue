<template>
  <div class="layouts">
    <LfHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import LfHeader from "~/components/shared/LfHeader.vue";
</script>

<style scoped></style>
