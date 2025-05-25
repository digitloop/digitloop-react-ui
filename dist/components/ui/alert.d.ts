import { type VariantProps } from "class-variance-authority";
declare const alertVariants: (props?: ({
    variant?: "primary" | "success" | "destructive" | "default" | "warning" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    message?: string | string[];
}
declare function Alert({ message, variant, className, children, ...props }: AlertProps): import("react/jsx-runtime").JSX.Element;
export { Alert };
//# sourceMappingURL=alert.d.ts.map