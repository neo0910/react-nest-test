export const generateQueryString = (query: Record<string, unknown>) =>
  Object.entries(query).reduce(
    (acc, [key, value]) => acc + `${key}=${value}`,
    ""
  );
