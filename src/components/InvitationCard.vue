<script setup lang="ts">
import type { Invitation } from '../types'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useInvitationStore } from '../stores/invitation'

const router = useRouter()
const store = useInvitationStore()

const props = defineProps<{
  invitation: Invitation
}>();

const publicUrl = ref('')

onMounted(() => {
  // Get the base URL without any path
  const baseUrl = window.location.origin
  publicUrl.value = `${baseUrl}/invitation/${props.invitation.id}`
})

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(publicUrl.value)
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

const editInvitation = () => {
  router.push(`/edit/${props.invitation.id}`)
}

const deleteInvitation = () => {
  if (confirm('Are you sure you want to delete this invitation?')) {
    store.deleteInvitation(props.invitation.id)
  }
}

const openPublicView = () => {
  window.open(publicUrl.value, '_blank')
}
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-sm hover:bg-gray-50">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <p class="text-lg font-medium text-primary-600">{{ invitation.title }}</p>
      </div>
      <div class="ml-2 flex-shrink-0">
        <span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
          {{ invitation.status }}
        </span>
      </div>
    </div>
    
    <div class="mt-2 sm:flex sm:justify-between">
      <div class="sm:flex items-center space-x-6">
        <p class="flex items-center text-sm text-gray-500">
          <span class="font-medium mr-2">Template:</span>
          {{ invitation.template }}
        </p>
        <p class="flex items-center text-sm text-gray-500">
          <span class="font-medium mr-2">Event Date:</span>
          {{ invitation.date }}
        </p>
      </div>
    </div>

    <div class="mt-4">
      <div class="flex items-center space-x-2 mb-4">
        <input
          type="text"
          :value="publicUrl"
          readonly
          class="flex-1 p-2 text-sm border rounded-md bg-gray-50"
        />
        <button
          @click="copyLink"
          class="px-3 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100"
        >
          Copy Link
        </button>
        <button
          @click="openPublicView"
          class="px-3 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-md hover:bg-green-100"
        >
          Open
        </button>
      </div>
    
      <div class="flex space-x-3">
        <RouterLink
          :to="'/preview/' + invitation.id"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100"
        >
          Preview
        </RouterLink>
        <button
          @click="editInvitation"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100"
        >
          Edit
        </button>
        <button
          @click="deleteInvitation"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>