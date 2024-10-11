<script setup lang="ts">
import HREFStyle from '@/components/HREFStyle.vue'

const props = defineProps<{
  path: string
  text: string
}>()
</script>

<template>
  <RouterLink :to="props.path">
    <HREFStyle :text="props.text" :bolder="true" />
  </RouterLink>
</template>

<style scoped></style>
