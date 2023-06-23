<script setup lang="ts">
import defLayout from "./layouts/defLayout.vue";
</script>

<template>
  <div id="app">
    <defLayout>
      <main>
        <Suspense>
          <router-view></router-view>
        </Suspense>
      </main>
    </defLayout>
  </div>
</template>

<style lang="scss" scoped></style>
