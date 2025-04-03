
import http from './api'
import type { Restaurant } from './types'


export const useApi = () => {
    const getRestaurants = async (zipCode: string): Promise<Restaurant[]> => {
      const response = await http.get(`api/discovery/uk/restaurants/enriched/bypostcode/${zipCode}`)
      const restaurants = response.data.restaurants
      console.log(response)
      console.log(restaurants)
  
      if (!restaurants || restaurants.length === 0) {
        throw new Error('No restaurants found')
      }
  
      return restaurants.slice(0, 10)
    }
   
    return{
        getRestaurants
    }
}