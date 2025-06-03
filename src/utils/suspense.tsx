import React from "react";

const Loader = () => <div>Loading...</div>;

export const Suspense = ({ children }: { children: React.ReactNode }) => {
  return <React.Suspense fallback={<Loader />}>{children}</React.Suspense>;
};
