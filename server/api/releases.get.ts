export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = query.page ?? 1;
  const data = await $fetch(
    "https://aniliberty.top/api/v1/anime/catalog/releases",
    { query: { page } }
  );
  return data;
});
