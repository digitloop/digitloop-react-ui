import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import * as React from "react";
import { useState } from "react";

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<"input">, "type">
>(({ ...props }, ref) => {
  const [inputType, setInputType] =
    useState<React.HTMLInputTypeAttribute>("password");

  return (
    <div className="relative">
      <Input ref={ref} {...props} type={inputType} className="pe-10" />
      <div className="absolute right-1 top-0 bottom-0 flex items-center">
        <Button
          type="button"
          variant="ghost"
          className="size-8 rounded-full"
          tabIndex={-1}
          onClick={() => {
            setInputType(inputType === "password" ? "text" : "password");
          }}
        >
          {inputType === "password" ? (
            <EyeOffIcon size={20} />
          ) : (
            <EyeIcon size={20} />
          )}
        </Button>
      </div>
    </div>
  );
});

PasswordInput.displayName = "Password Input";

export { PasswordInput };
