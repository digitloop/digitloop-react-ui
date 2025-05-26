import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

interface CheckboxCompactProps {
  id?: string;
  label: string;
  checked?: CheckboxPrimitive.CheckedState;
  onCheckedChange?: (checked: CheckboxPrimitive.CheckedState) => void;
}

function CheckboxCompact({
  id,
  label,
  checked,
  onCheckedChange,
}: CheckboxCompactProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor={id} className="text-foreground/70">
        {label}
      </Label>
    </div>
  );
}

export { CheckboxCompact }
