import * as React from "react";
import { cn } from "@/lib/utils";

const InputError = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode
}) => {
  if (!children) {
    return null;
  }
  
  return (
    <div className={cn("text-destructive text-sm", className)}>{children}</div>
  );
};

export { InputError };
