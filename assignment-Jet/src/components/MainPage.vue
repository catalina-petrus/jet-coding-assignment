<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useApi } from '../services/useApi'
import type { Restaurant } from '../services/types'
import RestaurantCard from './RestaurantCard.vue'
import { SearchIcon } from 'lucide-vue-next'

const api = useApi()
const restaurants = ref<Restaurant[]>([])
const error = ref<string | null>(null)

const touched = ref(false)
const zipCode = ref('DH45QZ')

// UK postcode validation rule
const postcodeRegex = /^([A-Z]{1,2}[0-9][0-9A-Z]? ?[0-9][A-Z]{2})$/i
const isValid = computed(() => postcodeRegex.test(zipCode.value))
const showError = computed(() => touched.value && !isValid.value)

onMounted(async () => {
  try {
    restaurants.value = await api.getRestaurants(zipCode.value)
  } catch (err) {
    error.value = (err as Error).message
  }
})

//  fetch restaurants by postcode
const fetchRestaurants = async () => {
  if (!isValid.value) return
  try {
    restaurants.value = await api.getRestaurants(zipCode.value)
  } catch (err) {
    error.value = (err as Error).message
  }
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-6">Restaurants</h1>

    <label for="zipcode" class="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
      Enter UK ZIP Code
    </label>
    <div class="relative w-full">
      <input
        id="zipcode"
        v-model="zipCode"
        @blur="touched = true"
        type="text"
        placeholder="e.g. DH45QZ"
        class="w-full pr-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
               dark:bg-zinc-800 dark:text-white dark:border-zinc-600"
      />

      <SearchIcon
        @click="fetchRestaurants"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500 hover:text-blue-600 cursor-pointer"
      />
    </div>

    <!-- Validation messages -->
    <p v-if="showError" class="text-red-600 text-sm mt-1">Invalid UK postcode</p>
    <p v-else-if="zipCode && isValid" class="text-green-600 text-sm mt-1">Looks good!</p>

    <!-- Restaurant Cards -->
    <div class="grid m-4 p-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RestaurantCard
        v-for="(restaurant, index) in restaurants"
        :key="index"
        :restaurant="restaurant"
      />
    </div>
  </section>
</template>
