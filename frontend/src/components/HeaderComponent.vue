<script setup lang="ts">
import BlackLogo from './BlackLogo.vue'
import WhiteLogo from './WhiteLogo.vue'
import { usePreferences } from '../stores/preferences.ts'

const preferences = usePreferences()
</script>

<template>
 <header>
    <div class="wrapper flex flex-col gap-28">
      <div id="logo_container">
        <RouterLink to="/">
          <BlackLogo
            class="size-12"
            v-if="preferences.theme === 'light'"
          />
          <WhiteLogo
            class="size-12"
            v-if="preferences.theme === 'dark'"
          />
        </RouterLink>
      </div>
      <div id="nav_container">
      <nav class="flex flex-col font-montserrat uppercase">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
