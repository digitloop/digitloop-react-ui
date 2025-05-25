import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
const PasswordInput = React.forwardRef(({ ...props }, ref) => {
    const [inputType, setInputType] = useState("password");
    return (_jsxs("div", { className: "relative", children: [_jsx(Input, { ref: ref, ...props, type: inputType, className: "pe-10" }), _jsx("div", { className: "absolute right-1 top-0 bottom-0 flex items-center", children: _jsx(Button, { type: "button", variant: "ghost", className: "size-8 rounded-full", tabIndex: -1, onClick: () => {
                        setInputType(inputType === "password" ? "text" : "password");
                    }, children: inputType === "password" ? (_jsx(EyeOffIcon, { size: 20 })) : (_jsx(EyeIcon, { size: 20 })) }) })] }));
});
PasswordInput.displayName = "Password Input";
export { PasswordInput };
