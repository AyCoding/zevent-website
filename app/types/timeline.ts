export interface Timeline {
  cover: string
  edition: number
  date: string
  amount_raised: number
  charities: Charity[]
}

export type Charity = {
  name_of_charity: string
  url?: string
}
