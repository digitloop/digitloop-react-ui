import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const noteVariants = cva("flex space-x-4", {
  variants: {
    variant: {
      primary: "bg-primary/10 [&>div]:bg-primary",
      success: "bg-success/10 [&>div]:bg-success",
      warning: "bg-warning/10 [&>div]:bg-warning",
      destructive: "bg-destructive/10 [&>div]:bg-destructive",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface NoteProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noteVariants> {}

function Callout({ variant, className, children }: NoteProps) {
  return (
    <div className={cn(noteVariants({ variant, className }))} role="alert">
      <div className="min-w-1"></div>
      <p className="text-sm p-4 ps-0 leading-relaxed">{children}</p>
    </div>
  );
}

export { Callout };
