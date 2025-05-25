import { type CalendarProps } from "./calendar";
interface DatePickerProps {
    placeholder?: string;
    value?: string;
    className?: string;
    calendarProps?: (close: () => void) => CalendarProps;
}
declare const DatePicker: ({ placeholder, value, className, calendarProps, }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export { DatePicker };
//# sourceMappingURL=datepicker.d.ts.map