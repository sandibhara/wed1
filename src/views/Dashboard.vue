<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useInvitationStore } from '../stores/invitation'
import InvitationCard from '../components/InvitationCard.vue'

const router = useRouter()
const invitationStore = useInvitationStore()

onMounted(() => {
  invitationStore.loadInitialData()
})

const createNewInvitation = () => {
  router.push('/create')
}
</script>

<template>
  <div class="px-4 py-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-serif font-bold text-gray-900">My Invitations</h1>
        <button 
          @click="createNewInvitation"
          class="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-sm"
        >
          Create New Invitation
        </button>
      </div>

      <div class="space-y-4">
        <InvitationCard
          v-for="invitation in invitationStore.invitations"
          :key="invitation.id"
          :invitation="invitation"
        />
      </div>
    </div>
  </div>
</template>