import { ChangeEvent, memo, useCallback, useState } from "react";
import debounce from "lodash.debounce";

export const InfluencersHeader = memo<{
  onSearch: (options?: {
    query?: Record<string, string>;
    signal?: AbortSignal;
  }) => void;
}>(({ onSearch }) => {
  const [value, setValue] = useState("");

  const debouncedSearch = useCallback(debounce(onSearch, 500), []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedSearch({ query: { name: value } });
  };

  return (
    <div className="flex justify-between items-center mt-8 mb-6">
      <h1 className="text-2xl font-bold">Influencers</h1>
      <input
        className="bg-white shadow appearance-none border rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-md"
        onChange={handleChange}
        placeholder="Search Influencers"
        type="text"
        value={value}
      />
    </div>
  );
});
