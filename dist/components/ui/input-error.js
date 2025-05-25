import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
const InputError = ({ className, children }) => {
    if (!children) {
        return null;
    }
    return (_jsx("div", { className: cn("text-destructive text-sm", className), children: children }));
};
export { InputError };
