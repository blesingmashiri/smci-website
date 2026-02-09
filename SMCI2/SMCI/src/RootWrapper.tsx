import React from "react";
import { HelmetProvider } from "react-helmet-async";

export default function RootWrapper({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <div id="root-wrapper">{children}</div>
    </HelmetProvider>
  );
}
