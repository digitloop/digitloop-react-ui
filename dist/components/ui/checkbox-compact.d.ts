import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
interface CheckboxCompactProps {
    id?: string;
    label: string;
    checked?: CheckboxPrimitive.CheckedState;
    onCheckedChange?: (checked: CheckboxPrimitive.CheckedState) => void;
}
declare function CheckboxCompact({ id, label, checked, onCheckedChange, }: CheckboxCompactProps): import("react/jsx-runtime").JSX.Element;
export { CheckboxCompact };
//# sourceMappingURL=checkbox-compact.d.ts.map