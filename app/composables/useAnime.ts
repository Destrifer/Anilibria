// @ts-nocheck
export async function useAnime(alias) {
  const { data, pending, error } = await useFetch(`/api/anime/${alias}`);
  return { anime: data, pending, error };
}
