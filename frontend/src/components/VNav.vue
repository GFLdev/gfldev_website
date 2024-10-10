<script setup lang="ts">
import WhiteLogo from '@/components/logos/WhiteLogo.vue'
import BlackLogo from '@/components/logos/BlackLogo.vue'
import VNavBtn from '@/components/VNavBtn.vue'
import { usePreferences } from '@/stores/preferences'

const preferences = usePreferences()
</script>

<template>
  <section class="w-fit h-screen py-4 px-8">
    <nav
      class="flex flex-col font-montserrat font-light uppercase justify-start items-center h-full w-full gap-8"
    >
      <RouterLink to="/">
        <BlackLogo class="w-12" v-if="preferences.theme === 'light'" />
        <WhiteLogo class="w-12" v-else />
      </RouterLink>
      <VNavBtn path="/skills" text="Skills" />
      <VNavBtn path="/projects" text="Projects" />
      <VNavBtn path="/about" text="About" />
      <VNavBtn path="/contact" text="Contact" />
    </nav>
  </section>
</template>

<style scoped></style>
