export type APIResponse<T> = {
    success: boolean
    result?: T
    message?: string
}
  

export interface Restaurant {
    name: string
    cuisines: { name: string }[]
    rating: {
      starRating: number
    }
    address: {
      firstLine: string
      city: string
      postalCode: string
    }
  }