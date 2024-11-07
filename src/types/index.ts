export interface BrideAndGroom {
  bride: string
  groom: string
}

export interface Invitation {
  id: number
  title: string
  date: string
  time: string
  template: string
  status: string
  venue: string
  address: string
  brideAndGroom: BrideAndGroom
}