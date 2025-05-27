import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar, type CalendarProps } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface DatePickerProps {
  placeholder?: string;
  value?: string;
  className?: string;
  calendarProps?: (close: () => void) => CalendarProps;
}

const DatePicker = ({
  placeholder,
  value,
  className,
  calendarProps,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full">
        <div
          className={cn(
            "flex items-center border border-input rounded-md h-9 px-3 py-2 bg-accent/50 space-x-2 w-full",
            className
          )}
        >
          <span
            className={cn("text-sm text-nowrap grow text-start", {
              "text-muted-foreground": !value,
            })}
          >
            {value ? value : placeholder ?? "Pick a date..."}
          </span>
          <CalendarIcon className="size-4 opacity-50 ms-4" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar {...calendarProps?.(() => setOpen(false))} />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
