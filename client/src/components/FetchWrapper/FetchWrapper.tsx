import { PropsWithChildren } from "react";

export const FetchWrapper = ({
  children,
  error,
  isDataEmpty,
  isLoading,
  placeholderMessage = "No data",
}: PropsWithChildren<{
  error: null | Record<string, unknown>;
  isDataEmpty: boolean;
  isLoading: boolean;
  placeholderMessage?: string;
}>) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-2xl text-gray-600">Loading</p>
      </div>
    );
  }

  if (error || isDataEmpty) {
    return (
      <div className="py-6 px-30">
        <p className="text-2xl text-gray-600">
          {(error?.message as string) || placeholderMessage}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
