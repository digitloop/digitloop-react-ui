import { cn } from "@/lib/utils";
import * as React from "react";

const InputDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode
}) => {
  if (!children) {
    return null;
  }
  
  return (
    <div className={cn("text-foreground/50 text-sm", className)}>{children}</div>
  );
};

export { InputDescription };
