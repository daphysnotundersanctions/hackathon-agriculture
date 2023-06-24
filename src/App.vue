<script setup lang="ts">
import defLayout from "./layouts/defLayout.vue";
import "@progress/kendo-theme-default/dist/all.css";
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
