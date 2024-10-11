<script setup lang="ts">
import { usePreferences } from '@/stores/preferences'

const preferences = usePreferences()
const props = defineProps<{
  text: string
  bolder: boolean
}>()
</script>

<template>
  <span :title="props.text" :class="bolder ? 'link_hover' : ''">
    <span
      :class="
        preferences.theme === 'dark' ? 'underline-transition-dark' : 'underline-transition-light'
      "
      >{{ props.text }}</span
    >
  </span>
</template>

<style scoped></style>
