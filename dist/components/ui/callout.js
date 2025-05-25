import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
const noteVariants = cva("flex space-x-4", {
    variants: {
        variant: {
            primary: "bg-primary/10 [&>div]:bg-primary",
            success: "bg-success/10 [&>div]:bg-success",
            warning: "bg-warning/10 [&>div]:bg-warning",
            destructive: "bg-destructive/10 [&>div]:bg-destructive",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
function Callout({ variant, className, children }) {
    return (_jsxs("div", { className: cn(noteVariants({ variant, className })), role: "alert", children: [_jsx("div", { className: "min-w-1" }), _jsx("p", { className: "text-sm p-4 ps-0 leading-relaxed", children: children })] }));
}
export { Callout };
