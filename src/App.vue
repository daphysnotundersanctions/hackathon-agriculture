<script setup lang="ts">
import defLayout from "./layouts/defLayout.vue";
</script>

<template>
  <div id="app">
    <defLayout>
      <main class="page">
        <Suspense>
          <transition name="drain">
            <router-view></router-view>
          </transition>
        </Suspense>
      </main>
    </defLayout>
  </div>
</template>

<style>
.slither-enter-active,
.slither-leave-active {
  transition: transform 1s;
}

.slither-enter,
.slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to,
.slither-leave {
  transform: translateX(0);
}

.drain-enter-active,
.drain-leave-active {
  transition: transform 1s;
}

.drain-enter,
.drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to,
.drain-leave {
  transform: translateY(0);
}
</style>
