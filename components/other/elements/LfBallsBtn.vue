<template>
  <div class="LfBallsBtn">
    <Icon name="mingcute:dogecoin-doge-line" size="24" />
    <p>Бонусы</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.LfBallsBtn {
  @include flex-center;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    color: $orange;
    svg {
      transform: translateY(-3px);
    }
  }
  svg {
    transition: all 0.3s ease;
  }
  p {
    transition: all 0.3s ease;
    font-size: $small_2;
    font-weight: 600;
  }
}
</style>
