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
    <div class="episodes-grid">
      <div v-for="episode in anime.episodes">
        <div class="img-wrap">
          <NuxtImg :src="`base${episode.preview.optimized.preview}`" />
        </div>
        {{ episode.name }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.episodes-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.img-wrap {
  aspect-ratio: 16 / 9; /* поддерживается во всех браузерах */
  overflow: hidden;
  border-radius: 12px;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
