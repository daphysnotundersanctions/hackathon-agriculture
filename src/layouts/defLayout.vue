<template>
  <div class="defLayout">
    <LeftBar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import LeftBar from "../components/LeftBar.vue";
</script>

<style lang="scss" scoped>
.defLayout {
  display: flex;
}
</style>
