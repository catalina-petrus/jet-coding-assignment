<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useApi } from '../services/useApi'
import type { Restaurant } from '../services/types'
import RestaurantCard from './RestaurantCard.vue'

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
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-6 text-blue-800 dark:text-white">Restaurants </h1>

    <div class="grid m-4 p-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RestaurantCard
        v-for="(restaurant, index) in restaurants"
        :key="index"
        :restaurant="restaurant"
      />
    </div>
  </section>
</template>


