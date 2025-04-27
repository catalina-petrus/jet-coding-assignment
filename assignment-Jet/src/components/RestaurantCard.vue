<script setup lang="ts">
import type { Restaurant } from '../services/types'
import { Card, CardHeader, CardContent } from '../components/ui/card'
import Button from '../components/ui/button/Button.vue'
import { StarIcon, MapPin } from 'lucide-vue-next'

defineProps<{ restaurant: Restaurant }>()
</script>

<template>
  <Card class="w-full max-w-md dark:bg-zinc-900 rounded-2xl p-5 m-4 shadow-sm hover:shadow-lg transition-all duration-200 relative">

    <CardHeader class="mb-1 p-0 flex flex-wrap justify-between items-start gap-2">
      <h2 class="text-lg font-semibold text-zinc-800 dark:text-white leading-tight flex-1 max-w-[80%]">
        {{ restaurant.name }}
      </h2>
      <div class="inline-flex items-center gap-1 px-2 py-1 bg-black text-white text-xs font-semibold rounded-full shrink-0">
        <StarIcon class="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span>{{ restaurant.rating.starRating }}</span>
      </div>
    </CardHeader>

    <CardContent class="p-0">
      <div class="flex flex-wrap gap-2 mb-3">
        <Button
          v-for="(cuisine, index) in restaurant.cuisines"
          :key="index"
          variant="outline"
          class="text-xs rounded-full px-3 py-1 border-zinc-300 text-zinc-700 dark:text-zinc-100"
        >
          {{ cuisine.name }}
        </Button>
      </div>

      <a
        :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          restaurant.address.firstLine + ', ' +
          restaurant.address.city + ' ' +
          restaurant.address.postalCode
        )}`"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-white text-xs font-medium px-3 py-1 rounded-full mt-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
      >
        <MapPin class="w-4 h-4 text-red-500" />
        {{ restaurant.address.firstLine }}, {{ restaurant.address.city }} {{ restaurant.address.postalCode }}
      </a>
    </CardContent>
  </Card>
</template>
