import * as React from "react";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const LoadingSpinner = ({ className }: { className?: string }) => {
  return <LoaderCircle className={cn("size-4 animate-spin", className)} />;
};

export { LoadingSpinner };
