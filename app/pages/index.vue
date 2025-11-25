<script setup>
const { random, pending, error } = await useRandom(24);
</script>

<template>
  <div>
    <ul>
      <li v-for="anime in random" :key="anime.id">
        <NuxtImg :src="`base${anime.poster.optimized.preview}`" />
        <NuxtLink :to="`/anime/${anime.alias}`">
          {{ anime.name.main }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
