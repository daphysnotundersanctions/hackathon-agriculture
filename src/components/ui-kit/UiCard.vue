<template>
  <div>
    {{ cardTitle }}
    {{ cardPercentRaise }}
    {{ cardAmount }}
    <p>1231</p>
  </div>
</template>
<script lang="ts" setup>
// import { defineProps } from "vue";

defineProps({
  cardTitle: String,
  cardAmount: Number,
  cardPercentRaise: String,
});
</script>
<style lang=""></style>
