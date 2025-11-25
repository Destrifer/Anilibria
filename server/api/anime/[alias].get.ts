export default defineEventHandler(async (event) => {
  const alias = getRouterParam(event, "alias");
  const data = await $fetch(
    `https://aniliberty.top/api/v1/anime/releases/${alias}`
  );
  return data;
});
