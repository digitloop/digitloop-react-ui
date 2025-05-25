import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "./label";
const InputLabel = ({ className, required, children, ...props }) => {
    if (required) {
        return (_jsxs(Label, { className: className, ...props, children: [children, _jsx("span", { className: "text-destructive", children: "*" })] }));
    }
    return _jsx(Label, { className: className, ...props, children: children });
};
export { InputLabel };
