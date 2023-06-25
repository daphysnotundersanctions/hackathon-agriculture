<script setup lang="ts">
import defLayout from "./layouts/defLayout.vue";
</script>

<template>
  <div id="app">
    <defLayout>
      <main class="page">
        <Suspense>
          <router-view v-slot="{ Component }">
            <transition name="scale" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </Suspense>
      </main>
    </defLayout>
  </div>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
