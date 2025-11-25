export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const limit = Number(query.limit) || 24;
  const data = await $fetch(
    "https://aniliberty.top/api/v1/anime/releases/random",
    { query: { limit } }
  );
  return data;
});
