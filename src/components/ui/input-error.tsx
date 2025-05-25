import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const InputError = ({
  className,
  children
}: {
  className?: string;
  children: ReactNode
}) => {
  if (!children) {
    return null;
  }
  
  return (
    <div className={cn("text-destructive text-sm", className)}>{children}</div>
  );
};

export { InputError };
