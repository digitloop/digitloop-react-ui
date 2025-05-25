import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { useRef } from "react";
export const RadioButton = ({ id, checked, className, onCheckedChange, }) => {
    const inputRef = useRef(null);
    return (_jsxs("div", { role: "button", className: cn("size-4 rounded-full border border-input dark:bg-input/30 text-primary flex items-center justify-center", {
            "border-primary": checked,
        }, className), onClick: () => {
            inputRef.current?.click();
        }, children: [_jsx("input", { id: id, ref: inputRef, type: "radio", className: "hidden", checked: checked, onChange: (evt) => {
                    onCheckedChange?.(evt.target.checked);
                } }), _jsx(Circle, { className: cn("h-2.5 w-2.5 fill-current text-current", {
                    invisible: !checked,
                }) })] }));
};
RadioButton.displayName = "RadioButton";
