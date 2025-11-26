<script setup>
const route = useRoute();
const alias = route.params.alias;

const { anime, pending, error } = await useAnime(alias);

const currentEpisode = ref(null);

const selectEpisode = (episode) => {
  currentEpisode.value = episode;
};
</script>

<template>
  <div v-if="anime">
    <h1>{{ anime.name.main }}</h1>

    <NuxtImg
      v-if="anime.poster && anime.poster.optimized"
      :src="`/base${anime.poster.optimized.preview}`"
    />

    <HlsPlayer
      v-if="currentEpisode && currentEpisode.hls_720"
      :src="currentEpisode.hls_720"
    />

    <div class="episodes-grid">
      <button
        v-for="ep in anime.episodes"
        :key="ep.id"
        class="episode-card"
        @click="selectEpisode(ep)"
      >
        <div class="img-wrap">
          <NuxtImg :src="`base${ep.preview.optimized.preview}`" />
        </div>
      </button>
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
