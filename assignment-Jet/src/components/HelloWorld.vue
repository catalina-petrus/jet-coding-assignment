<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useApi } from '../services/useApi'
import type { Restaurant } from '../services/types'

const api = useApi()
const restaurants = ref<Restaurant[]>([])
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    restaurants.value = await api.getRestaurants() 
  } catch (err) {
    error.value = (err as Error).message
  }
})
</script>

<template>
  <div>
    <h1>Restaurants</h1>
    <p v-if="error">❌ {{ error }}</p>
    <ul v-else>
      <li v-for="(restaurant, index) in restaurants" :key="index">
        <h2>{{ restaurant.name || 'Unknown' }}</h2>
        <p>Cuisines: {{ restaurant.cuisines.map(c => c.name).join(', ') }}</p>
        <p>Rating: {{ restaurant.rating.starRating }}</p>
        <p>Address: {{ restaurant.address.firstLine }}, {{ restaurant.address.city }} {{ restaurant.address.postalCode }}</p>
      </li>
    </ul>
  </div>
</template>
