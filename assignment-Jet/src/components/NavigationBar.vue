<script setup>
import { User } from 'lucide-vue-next'
</script>

<template>
  <nav class="w-full bg-[#FF8000] text-white shadow-md px-6 py-3 flex justify-between items-center">
    <div class="text-lg font-bold">
        <img src="@/assets/logo.png" alt="Logo" class="w-10 h-10">
    </div>
    <div class="text-lg font-bold">Coding Assignment Early Careers Just Eat Takeaway</div>
    <div class="flex items-center gap-2">
      <span class="text-sm font-medium">Cătălina Antonia Petruș</span>
      <User class="w-5 h-5 text-white" />
    </div>
  </nav>
</template>
