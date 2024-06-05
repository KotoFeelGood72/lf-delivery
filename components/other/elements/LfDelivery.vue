<template>
  <div class="lfDeliveryBtn">
    <div class="lfDeliveryBtn__title">
      Доставка пиццы <span>{{ dymamicCity }}</span>
    </div>
    <div class="lfDeliveryBtn__other">
      {{ dynamicTimeDelivery }} мин · {{ dynamicStars }} <Icon name="noto:star" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dymamicCity?: string;
    dynamicTimeDelivery?: number;
    dynamicStars?: number;
  }>(),
  {
    dymamicCity: "Краснодар",
    dynamicTimeDelivery: 27,
    dynamicStars: 4.85,
  }
);
</script>

<style scoped lang="scss">
.lfDeliveryBtn__title {
  font-size: $normal_2;
  font-weight: 500;
  margin-bottom: 2px;
  span {
    color: $orange;
  }
}

.lfDeliveryBtn__other {
  font-size: $small_2;
  font-weight: 500;
  @include flex-start;
  gap: 3px;
}
</style>
