<script setup lang="ts">
import VHeader from '@/components/VHeader.vue'
import VFooter from '@/components/VFooter.vue'
import VNav from '@/components/VNav.vue'
import { usePreferences } from '@/stores/preferences'

const preferences = usePreferences()
</script>

<template>
  <section
    :class="
      'min-h-screen ' +
      'w-screen ' +
      (preferences.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black')
    "
  >
    <div class="hidden md:flex md:flex-col">
      <VHeader />
      <RouterView />
    </div>
    <div class="md:hidden flex flex-row">
      <VNav />
      <RouterView />
    </div>
    <VFooter />
  </section>
</template>

<style scoped></style>
