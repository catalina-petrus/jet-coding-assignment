<script setup lang="ts">
import type { Restaurant } from '../services/types'
import { Card, CardHeader, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { StarIcon } from 'lucide-vue-next'

defineProps<{ restaurant: Restaurant }>()
</script>
<template>
    <Card class="w-full p-4 hover:shadow-xl transition">
      <CardHeader>
        <h2 class="text-xl font-semibold">{{ restaurant.name }}</h2>
      </CardHeader>
  
      <CardContent>
        <div class="flex flex-wrap gap-2 mb-2">
          <Badge v-for="(cuisine, index) in restaurant.cuisines" :key="index" variant="outline">
            {{ cuisine.name }}
          </Badge>
        </div>
  
        <div class="flex items-center gap-2 mb-1">
          <StarIcon class="h-5 w-5 text-yellow-400" />
          <span class="font-medium">{{ restaurant.rating.starRating }}</span>
        </div>
  
        <p class="text-muted-foreground text-sm">
          {{ restaurant.address.firstLine }}, {{ restaurant.address.city }} {{ restaurant.address.postalCode }}
        </p>
      </CardContent>
    </Card>
  </template>
  
 
  