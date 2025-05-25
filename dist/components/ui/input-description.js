import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
const InputDescription = ({ className, children, }) => {
    if (!children) {
        return null;
    }
    return (_jsx("div", { className: cn("text-foreground/50 text-sm", className), children: children }));
};
export { InputDescription };
