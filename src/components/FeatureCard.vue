<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>();
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-sm">
    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto mb-4">
      <span v-html="icon"></span>
    </div>
    <h3 class="text-lg font-medium text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-500">{{ description }}</p>
  </div>
</template>