import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
function CheckboxCompact({ id, label, checked, onCheckedChange, }) {
    return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: id, checked: checked, onCheckedChange: onCheckedChange }), _jsx(Label, { htmlFor: id, className: "text-foreground/70", children: label })] }));
}
export { CheckboxCompact };
