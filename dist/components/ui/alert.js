import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
const alertVariants = cva("rounded p-3 border text-sm", {
    variants: {
        variant: {
            primary: "bg-primary/10 border-primary/15 text-primary",
            success: "bg-success/10 border-success/15 text-success",
            destructive: "bg-destructive/10 border-destructive/15 text-destructive/95",
            default: "bg-accent/70 text-foreground/90",
            warning: "bg-warning/15 border-warning/30 text-yellow-600",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
function Alert({ message, variant, className, children, ...props }) {
    // const content = () => {
    //   if (typeof message === "string") {
    //     return message;
    //   }
    //   if (typeof message === "object" && message instanceof Array) {
    //     if (message.length > 1) {
    //       return (
    //         <ul className="list-disc list-inside">
    //           {message.map((m, i) => {
    //             return <li key={i}>{m}</li>;
    //           })}
    //         </ul>
    //       );
    //     }
    //     return message.length > 0 ? message[0] : null;
    //   }
    //   return null;
    // };
    return (_jsx("div", { className: cn(alertVariants({ variant, className })), role: "alert", ...props, children: children }));
}
export { Alert };
