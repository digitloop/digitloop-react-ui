import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
const LoadingSpinner = ({ className }) => {
    return _jsx(LoaderCircle, { className: cn("size-4 animate-spin", className) });
};
export { LoadingSpinner };
