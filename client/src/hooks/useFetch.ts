import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>({
  url,
}: {
  url: string;
}): {
  data: null | T;
  error: null | Record<string, unknown>;
  isLoading: boolean;
  trigger: (options?: { signal?: AbortSignal }) => Promise<void>;
} => {
  const [data, setData] = useState<null | T>(null);
  const [error, setError] = useState<null | Record<string, unknown>>(null);
  const [isLoading, setIsLoading] = useState(true);

  const trigger = useCallback(
    async ({ signal }: { signal?: AbortSignal } = {}) => {
      try {
        setIsLoading(true);
        const result = (await (await fetch(url, { signal })).json()) as T;
        setData(result);
        setError(null);
      } catch (error) {
        setError(error as Record<string, unknown>);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    trigger({ signal });

    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, isLoading, trigger };
};
