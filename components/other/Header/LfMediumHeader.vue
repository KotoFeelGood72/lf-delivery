<template>
  <div class="mediumHeader">
    <div class="container">
      <div class="mediumHeader__main">
        <div class="mediumHeader_left__column">
          <div class="mediumHeader__logo">
            <NuxtLink to="/">
              <svg-icon name="logo" />
            </NuxtLink>
          </div>
          <div class="mediumHeader__delivery">
            <LfDelivery />
          </div>
        </div>
        <div class="mediumHeader_right__column">
          <LfBallsBtn />
          <lfButton color-mode="gray" size="xs" name="Войти" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LfDelivery from "../elements/LfDelivery.vue";
import LfBallsBtn from "../elements/LfBallsBtn.vue";
import lfButton from "~/components/uikit/lfButton.vue";
</script>

<style lang="scss" scoped>
.mediumHeader__logo {
  max-width: 250px;
  height: 46px;
  svg {
    width: 100%;
    height: 100%;
  }
}

.mediumHeader_left__column {
  gap: 40px;
}
.mediumHeader_right__column {
  gap: 32px;
}

.mediumHeader__main {
  padding: 24px 0px 16px;
}
.mediumHeader__main,
.mediumHeader_left__column,
.mediumHeader_right__column {
  @include flex-space;
}
</style>
