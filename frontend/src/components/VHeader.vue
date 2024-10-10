<script setup lang="ts">
import BlackLogo from '@/components/logos/BlackLogo.vue'
import WhiteLogo from '@/components/logos/WhiteLogo.vue'
import { usePreferences } from '@/stores/preferences'
import VNavBtn from '@/components/VNavBtn.vue'

const preferences = usePreferences()
</script>

<template>
  <header class="h-fit w-screen sticky py-4 px-8">
    <nav
      class="flex flex-row font-montserrat font-light uppercase justify-center items-center w-full lg:gap-32 md:gap-24"
    >
      <VNavBtn path="/skills" text="Skills" />
      <VNavBtn path="/projects" text="Projects" />
      <RouterLink to="/">
        <BlackLogo class="w-12" v-if="preferences.theme === 'light'" />
        <WhiteLogo class="w-12" v-else />
      </RouterLink>
      <VNavBtn path="/about" text="About" />
      <VNavBtn path="/contact" text="Contact" />
    </nav>
  </header>
</template>

<style scoped></style>
