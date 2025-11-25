<script setup>
const route = useRoute();
const alias = route.params.alias;

const { anime, pending, error } = await useAnime(alias);
</script>

<template>
  <div v-if="anime">
    <h1>{{ anime.name.main }}</h1>

    <NuxtImg
      v-if="anime.poster && anime.poster.optimized"
      :src="`/base${anime.poster.optimized.preview}`"
    />
  </div>
</template>
