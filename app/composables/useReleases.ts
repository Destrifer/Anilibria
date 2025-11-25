type ReleasesResponse = {
  data: any[]; // позже заменим any на нормальный тип
  meta: any; // сейчас нам meta не важен
};

export async function useReleases(page = 1) {
  const { data, pending, error } = await useFetch<ReleasesResponse>(
    "/api/releases",
    { query: { page } }
  );
  const releases = data.value?.data || [];
  return {
    releases,
    pending,
    error,
  };
}
