<template>
  <div class="uiCard">
    <div class="uiCard__title">
      {{ cardTitle }}
    </div>
    <div class="uiCard__info">
      <h3 style="color: #000000; font-weight: 400">
        {{ cardAmount }}
      </h3>
      <div class="uiCard__perc">
        <p style="color: #000000" v-show="isRaised">+</p>
        <p style="color: #000000" v-show="!isRaised">-</p>
        <p style="color: #000000">
          {{ cardPercentRaise }}
        </p>
      </div>
      <img v-show="isRaised" src="../../assets/icons/arrowRaise.svg" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { defineProps } from "vue";

defineProps({
  cardTitle: String,
  cardAmount: Number,
  cardPercentRaise: String,
  isRaised: Boolean,
});
</script>
<style lang="scss" scoped>
.uiCard {
  border-radius: 16px;
  background: linear-gradient(
    329deg,
    #eccd13 0%,
    #f8f9ca 17.18%,
    #ebe4bb 48.92%,
    #dedcc7 100%
  );
  padding: 30px 25px;
  max-width: 220px;
  width: 100%;
  &__title {
    color: $black !important ;
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__info {
    color: $black !important ;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 24px;
  }
  &__perc {
    color: $black !important ;
    display: flex;
  }
}
</style>
