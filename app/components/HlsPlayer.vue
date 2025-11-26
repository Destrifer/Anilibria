<script setup>
import { onMounted, ref } from "vue";
import Hls from "hls.js";

const props = defineProps({
  src: { type: String, required: true },
});

const videoEl = ref(null);

onMounted(() => {
  const video = videoEl.value;
  const source = props.src;

  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = source;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
  }
});
</script>

<template>
  <video ref="videoEl" controls></video>
</template>
