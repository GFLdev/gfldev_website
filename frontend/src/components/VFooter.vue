<script setup lang="ts">
import { usePreferences } from '@/stores/preferences'
import UserThemeToggle from '@/components/UserThemeToggle.vue'
import HREFStyle from '@/components/HREFStyle.vue'

const preferences = usePreferences()
const currYear = new Date().getFullYear()
</script>

<template>
  <footer
    :class="
      'flex ' +
      'flex-col ' +
      'justify-center ' +
      'items-center ' +
      'w-full ' +
      'fixed ' +
      'bottom-0 ' +
      'px-8 ' +
      'py-12 ' +
      (preferences.theme === 'dark' ? 'bg-black' : 'bg-white')
    "
  >
    <div>
      <section>
        <UserThemeToggle />
      </section>
    </div>
    <div id="footer_owner_label" class="text-sm font-extralight font-lato">
      <p>
        <a href="https://github.com/GFLdev/" target="_blank">
          <HREFStyle text="GFL" :bolder="false" />
        </a>
        by
        <a href="https://www.linkedin.com/in/gfrancolourenco/" target="_blank">
          <HREFStyle text="Gabriel Franco Lourenço" :bolder="false" />
        </a>
        | {{ currYear }}
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
