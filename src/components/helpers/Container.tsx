import type { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container mx-auto max-w-[1250px] w-full px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
