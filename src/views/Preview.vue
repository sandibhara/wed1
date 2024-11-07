<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useInvitationStore } from '../stores/invitation'

const route = useRoute()
const router = useRouter()
const invitationStore = useInvitationStore()

onMounted(() => {
  // Load data from session storage first
  invitationStore.loadFromSession()
  
  const id = parseInt(route.params.id as string)
  invitationStore.setActiveInvitation(id)
  
  // If invitation not found, redirect to home
  if (!invitationStore.activeInvitation) {
    router.push('/')
  }
})

const isPublicView = route.name === 'public-invitation'
</script>

<template>
  <div v-if="invitationStore.activeInvitation" class="min-h-screen bg-primary-50 px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <!-- Back to Dashboard button (only shown in preview mode) -->
      <div v-if="!isPublicView" class="mb-8">
        <button
          @click="router.push('/dashboard')"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <!-- Header Image/Banner -->
        <div class="relative h-96 bg-gradient-to-r from-primary-600 to-primary-700">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="text-5xl font-serif mb-4">{{ invitationStore.activeInvitation.brideAndGroom.bride }}</h1>
              <p class="text-3xl font-serif">&</p>
              <h1 class="text-5xl font-serif mt-4">{{ invitationStore.activeInvitation.brideAndGroom.groom }}</h1>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="px-8 py-12 text-center">
          <h2 class="text-3xl font-serif text-gray-900 mb-12">We're Getting Married</h2>
          
          <div class="grid gap-12 max-w-2xl mx-auto">
            <div class="space-y-2">
              <h3 class="text-xl font-serif text-gray-900">When</h3>
              <p class="text-lg text-gray-600">{{ invitationStore.activeInvitation.date }}</p>
              <p class="text-lg text-gray-600">{{ invitationStore.activeInvitation.time }}</p>
            </div>

            <div class="space-y-2">
              <h3 class="text-xl font-serif text-gray-900">Where</h3>
              <p class="text-lg text-gray-600">{{ invitationStore.activeInvitation.venue }}</p>
              <p class="text-lg text-gray-600">{{ invitationStore.activeInvitation.address }}</p>
            </div>

            <div class="pt-4">
              <button class="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-colors">
                RSVP Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen bg-primary-50 flex items-center justify-center px-4">
    <div class="text-center">
      <h2 class="text-2xl font-serif text-gray-900 mb-4">Invitation Not Found</h2>
      <p class="text-gray-600 mb-8">The invitation you're looking for might have been removed or is no longer available.</p>
      <button
        @click="router.push('/')"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700"
      >
        Return Home
      </button>
    </div>
  </div>
</template>