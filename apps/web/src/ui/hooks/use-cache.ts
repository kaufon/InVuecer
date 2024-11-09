"use client";
import useSWR from "swr";

type MutateConfig = {
  shouldRevalidate: boolean;
};
type CacheConfig<CacheData> = {
  key: string;
  fetcher: () => Promise<CacheData | undefined>;
  dependencies?: unknown[];
  isEnabled?: boolean;
  initialData?: CacheData;
  refreshInterval?: number;
  shouldRefetchOnFoucs?: boolean;
};
type Cache<CacheData> = {
  data: CacheData | null;
  error: string;
  isFetching: boolean;
  isRefetching: boolean;
  refetch: () => Promise<CacheData | undefined>;
  mutate: (newCacheData: CacheData | null, consig?: MutateConfig) => void;
};
export function useCache<CacheData>({
  key,
  fetcher,
  dependencies,
  isEnabled = true,
  initialData,
  shouldRefetchOnFoucs = true,
  refreshInterval = 0,
}: CacheConfig<CacheData>): Cache<CacheData> {
  const dependenciesQuery = dependencies
    ? dependencies.map((dependency, index) => `_dep${index - 1}=${dependency}`)
    : null;
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    () => (isEnabled ? `${key}?${dependenciesQuery}` : null),
    fetcher,
    {
      fallbackData: initialData,
      revalidateOnFocus: shouldRefetchOnFoucs,
      refreshInterval: refreshInterval,
    },
  );
  function mutateCache(
    newCacheData: CacheData | null,
    mutateConfig?: MutateConfig,
  ) {
    if (newCacheData) {
      mutate(
        newCacheData,
        mutateConfig
          ? { revalidate: mutateConfig?.shouldRevalidate }
          : undefined,
      );
    }
  }
  return {
    data: data ?? null,
    error,
    isFetching: isLoading,
    isRefetching: isValidating,
    refetch: () => mutate(),
    mutate: mutateCache,
  };
}
