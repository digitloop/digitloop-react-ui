import * as React from "react";
import { Label } from "./label";
import { RadioButton } from "./radio-button";

interface RadioButtonCompactProps {
  id?: string;
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function RadioButtonCompact({
  id,
  label,
  checked,
  onCheckedChange,
}: RadioButtonCompactProps) {
  return (
    <div className="flex items-center space-x-1">
      <RadioButton
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={id} className="text-foreground/70">
        {label}
      </Label>
    </div>
  );
}

export { RadioButtonCompact }