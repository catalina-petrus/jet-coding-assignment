<script setup lang="ts">
import type { Restaurant } from '../services/types'
import { Card, CardHeader, CardContent } from '../components/ui/card'
import Button from '../components/ui/button/Button.vue'
import { StarIcon } from 'lucide-vue-next'

defineProps<{ restaurant: Restaurant }>()
</script>

<template>
  <Card class="w-full max-w-md bg-pink-50 dark:bg-zinc-900 rounded-2xl p-5 m-4 shadow-sm hover:shadow-lg transition-all duration-200">

    <CardHeader class="mb-3 p-0">
      <h2 class="text-lg font-semibold text-zinc-800 dark:text-white leading-tight">
        {{ restaurant.name }}
      </h2>
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

      <div class="inline-flex items-center gap-1 px-2 py-1 bg-black text-white text-xs font-semibold rounded-full">
        <StarIcon class="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span>{{ restaurant.rating.starRating}}</span>
      </div>
      <p class="text-sm text-zinc-600 dark:text-white leading-snug">
        {{ restaurant.address.firstLine }}, {{ restaurant.address.city }} {{ restaurant.address.postalCode }}
      </p>
    </CardContent>
  </Card>
</template>
