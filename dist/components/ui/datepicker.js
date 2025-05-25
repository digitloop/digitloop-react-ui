import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
const DatePicker = ({ placeholder, value, className, calendarProps, }) => {
    const [open, setOpen] = useState(false);
    return (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { className: "w-full", children: _jsxs("div", { className: cn("flex items-center border border-input rounded-md h-9 px-3 py-2 bg-accent/50 space-x-2 w-full", className), children: [_jsx("span", { className: cn("text-sm text-nowrap grow text-start", {
                                "text-muted-foreground": !value,
                            }), children: value ? value : placeholder ?? "Pick a date..." }), _jsx(CalendarIcon, { className: "size-4 opacity-50 ms-4" })] }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: _jsx(Calendar, { ...calendarProps?.(() => setOpen(false)) }) })] }));
};
export { DatePicker };
