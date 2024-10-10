<script setup lang="ts">
import { usePreferences } from '@/stores/preferences'

const preferences = usePreferences()
const props = defineProps<{
  path: string
  text: string
}>()
</script>

<template>
  <RouterLink :to="props.path">
    <span class="underline-transition">
      <span
        :title="props.text"
        :class="
          'hover:font-normal ' +
          'transition-all ' +
          'duration-300 ' +
          (preferences.theme === 'dark' ? 'after:bg-white' : 'after:bg-black')
        "
      >
        {{ props.text }}
      </span>
    </span>
  </RouterLink>
</template>

<style scoped>
.underline-transition {
  display: inline-block;
  position: relative;
}

.underline-transition:after {
  content: '';
  width: 0;
  height: 1px;
  position: absolute;
  top: 100%;
  left: 0;
  transition:
    width 300ms,
    left 300ms;
}

.underline-transition:hover:after {
  width: 100%;
}

.underline-transition:not(:hover):after {
  left: auto;
  right: 0;
}

span::after {
  display: block;
  content: attr(title);
  font-weight: normal;
  height: 1px;
  color: transparent;
  overflow: hidden;
  visibility: hidden;
}
</style>
