<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <RouterLink to="/" class="flex-shrink-0 flex items-center">
            <span class="text-2xl font-serif text-primary-600">WeddingSaaS</span>
          </RouterLink>
        </div>
        <div class="flex items-center">
          <RouterLink
            to="/dashboard"
            class="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Dashboard
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>