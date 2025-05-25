import { type VariantProps } from "class-variance-authority";
declare const noteVariants: (props?: ({
    variant?: "primary" | "success" | "destructive" | "warning" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface NoteProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof noteVariants> {
}
declare function Callout({ variant, className, children }: NoteProps): import("react/jsx-runtime").JSX.Element;
export { Callout };
//# sourceMappingURL=callout.d.ts.map