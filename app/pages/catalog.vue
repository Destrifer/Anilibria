<script setup>
const { releases, pending, error } = await useReleases(2);
</script>

<template>
  <div>
    <ul>
      <li v-for="anime in releases" :key="anime.id">
        {{ anime.name.main }}
      </li>
    </ul>
  </div>
</template>
