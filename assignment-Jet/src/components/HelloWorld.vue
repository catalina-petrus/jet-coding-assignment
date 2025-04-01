<script setup lang="ts">

import { useApi } from '../services/useApi'

const { restaurants, loading, error, fetchRestaurants } = useApi()

fetchRestaurants('E1')

</script>

<template>
  <h1>Project </h1>

 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
