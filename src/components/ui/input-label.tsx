import { Label } from "./label";

const InputLabel = ({
  className,
  required,
  children,
  ...props
}: React.ComponentProps<typeof Label> & { required?: boolean }) => {
  if (required) {
    return (
      <Label className={className} {...props}>
        {children}
        <span className="text-destructive">*</span>
      </Label>
    );
  }
  return <Label className={className} {...props}>{children}</Label>;
};

export { InputLabel };
