import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "./label";
import { RadioButton } from "./radio-button";
function RadioButtonCompact({ id, label, checked, onCheckedChange, }) {
    return (_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(RadioButton, { id: id, checked: checked, onCheckedChange: onCheckedChange }), _jsx(Label, { htmlFor: id, className: "text-foreground/70", children: label })] }));
}
export { RadioButtonCompact };
