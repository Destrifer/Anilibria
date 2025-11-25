type RandomResponse = any;

export async function useRandom(limit = 24) {
  const { data, pending, error } = await useFetch<RandomResponse[]>(
    "/api/random",
    { query: { limit } }
  );
  const random = data.value || [];
  return {
    random,
    pending,
    error,
  };
}
