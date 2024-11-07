<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useInvitationStore } from '../stores/invitation'
import type { BrideAndGroom } from '../types'

const router = useRouter()
const store = useInvitationStore()

const title = ref('')
const date = ref('')
const time = ref('')
const venue = ref('')
const address = ref('')
const bride = ref('')
const groom = ref('')
const template = ref('Classic')

const templates = ['Classic', 'Modern', 'Rustic', 'Elegant']

const createInvitation = () => {
  const brideAndGroom: BrideAndGroom = {
    bride: bride.value,
    groom: groom.value
  }

  const newInvitation = {
    id: Date.now(),
    title: title.value,
    date: date.value,
    time: time.value,
    venue: venue.value,
    address: address.value,
    template: template.value,
    status: 'Active',
    brideAndGroom
  }

  store.addInvitation(newInvitation)
  router.push('/dashboard')
}
</script>

<template>
  <div class="px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-serif font-bold text-gray-900 mb-8">Create New Invitation</h1>

      <form @submit.prevent="createInvitation" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Title</label>
          <input
            v-model="title"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Bride's Name</label>
            <input
              v-model="bride"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Groom's Name</label>
            <input
              v-model="groom"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Date</label>
            <input
              v-model="date"
              type="date"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Time</label>
            <input
              v-model="time"
              type="time"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Template</label>
          <select
            v-model="template"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option v-for="t in templates" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Venue</label>
          <input
            v-model="venue"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            v-model="address"
            rows="3"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          ></textarea>
        </div>

        <div class="flex justify-end space-x-3">
          <button
            type="button"
            @click="router.push('/dashboard')"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700"
          >
            Create Invitation
          </button>
        </div>
      </form>
    </div>
  </div>
</template>