import * as React from "react";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { useRef } from "react";

export interface RadioButtonProps {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  className?: string;
}

export const RadioButton = ({
  id,
  checked,
  className,
  onCheckedChange,
}: RadioButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div
      role="button"
      className={cn(
        "size-4 rounded-full border border-input dark:bg-input/30 text-primary flex items-center justify-center",
        {
          "border-primary": checked,
        },
        className
      )}
      onClick={() => {
        inputRef.current?.click();
      }}
    >
      <input
        id={id}
        ref={inputRef}
        type="radio"
        className="hidden"
        checked={checked}
        onChange={(evt) => {
          onCheckedChange?.(evt.target.checked);
        }}
      />
      <Circle
        className={cn("h-2.5 w-2.5 fill-current text-current", {
          invisible: !checked,
        })}
      />
    </div>
  );
};

RadioButton.displayName = "RadioButton";
