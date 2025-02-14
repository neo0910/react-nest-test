import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => (
  <main className="flex-1">{children}</main>
);
