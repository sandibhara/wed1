import { defineStore } from 'pinia'
import type { Invitation } from '../types'

const STORAGE_KEY = 'wedding_invitations'

export const useInvitationStore = defineStore('invitation', {
  state: () => ({
    invitations: [] as Invitation[],
    activeInvitation: null as Invitation | null
  }),
  
  actions: {
    addInvitation(invitation: Invitation) {
      this.invitations.push(invitation)
      this.saveToSession()
    },
    
    updateInvitation(updatedInvitation: Invitation) {
      const index = this.invitations.findIndex(inv => inv.id === updatedInvitation.id)
      if (index !== -1) {
        this.invitations[index] = updatedInvitation
        this.saveToSession()
      }
    },

    deleteInvitation(id: number) {
      this.invitations = this.invitations.filter(inv => inv.id !== id)
      this.saveToSession()
    },
    
    setActiveInvitation(id: number) {
      this.activeInvitation = this.invitations.find(inv => inv.id === id) || null
    },

    saveToSession() {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.invitations))
    },

    loadFromSession() {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored) {
        this.invitations = JSON.parse(stored)
      }
    },
    
    loadInitialData() {
      this.loadFromSession()
      
      if (this.invitations.length === 0) {
        this.invitations = [{
          id: 1,
          title: "John & Jane's Wedding",
          date: "2024-12-25",
          time: "2:00 PM",
          template: "Classic",
          status: "Active",
          venue: "Grand Ballroom, Luxury Hotel",
          address: "123 Wedding Street, Romance City",
          brideAndGroom: {
            bride: "Jane Smith",
            groom: "John Doe"
          }
        }]
        this.saveToSession()
      }
    }
  }
})