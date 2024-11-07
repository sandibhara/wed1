<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FeatureCard from '../components/FeatureCard.vue'

const features = [
  {
    title: 'Easy Customization',
    description: 'Customize every aspect of your invitation with our intuitive editor.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>`
  },
  {
    title: 'RSVP Management',
    description: 'Track your guest responses and manage attendance easily.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>`
  },
  {
    title: 'Responsive Design',
    description: 'Your invitation looks perfect on any device.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>`
  }
]
</script>

<template>
  <div class="px-4">
    <!-- Hero Section -->
    <div class="relative py-20">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-serif font-bold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block">Create Beautiful</span>
          <span class="block text-primary-600">Wedding Invitations</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create stunning digital wedding invitations in minutes. Choose from beautiful templates, customize to your style, and share with your loved ones.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <RouterLink
            to="/dashboard"
            class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 shadow-sm"
          >
            Get Started
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16">
      <div class="text-center">
        <h2 class="text-3xl font-serif font-bold text-gray-900 mb-12">Features</h2>
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>