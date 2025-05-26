"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Alert: () => Alert,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  Calendar: () => Calendar,
  Callout: () => Callout,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  CheckboxCompact: () => CheckboxCompact,
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  DataTable: () => DataTable,
  DataTableColumnCell: () => DataTableColumnCell,
  DataTableColumnHeader: () => DataTableColumnHeader,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Input: () => Input,
  InputDescription: () => InputDescription,
  InputError: () => InputError,
  InputLabel: () => InputLabel,
  Label: () => Label,
  LoadingSpinner: () => LoadingSpinner,
  Pagination: () => Pagination,
  PasswordInput: () => PasswordInput,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  RadioButton: () => RadioButton,
  RadioButtonCompact: () => RadioButtonCompact,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Textarea: () => Textarea,
  Toaster: () => Toaster,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/accordion.tsx
var React2 = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_lucide_react = require("lucide-react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/accordion.tsx
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ React2.createElement(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ React2.createElement(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React2.createElement(AccordionPrimitive.Header, { className: "flex" }, /* @__PURE__ */ React2.createElement(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React2.createElement(import_lucide_react.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
  ));
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React2.createElement(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props
    },
    /* @__PURE__ */ React2.createElement("div", { className: cn("pt-0 pb-4", className) }, children)
  );
}

// src/components/ui/alert.tsx
var React3 = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");
var alertVariants = (0, import_class_variance_authority.cva)("rounded p-3 border text-sm", {
  variants: {
    variant: {
      primary: "bg-primary/10 border-primary/15 text-primary",
      success: "bg-success/10 border-success/15 text-success",
      destructive: "bg-destructive/10 border-destructive/15 text-destructive/95",
      default: "bg-accent/70 text-foreground/90",
      warning: "bg-warning/15 border-warning/30 text-yellow-600"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
function Alert({
  message,
  variant,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: cn(alertVariants({ variant, className })),
      role: "alert",
      ...props
    },
    children
  );
}

// src/components/ui/alert-dialog.tsx
var React5 = __toESM(require("react"), 1);
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"), 1);

// src/components/ui/button.tsx
var React4 = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ React4.createElement(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/alert-dialog.tsx
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(AlertDialogPortal, null, /* @__PURE__ */ React5.createElement(AlertDialogOverlay, null), /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Content,
    {
      "data-slot": "alert-dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      ),
      ...props
    }
  ));
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}

// src/components/ui/avatar.tsx
var React6 = __toESM(require("react"), 1);
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ React6.createElement(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ React6.createElement(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ React6.createElement(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/breadcrumb.tsx
var React7 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_lucide_react2 = require("lucide-react");
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ React7.createElement("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ React7.createElement(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ React7.createElement(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "a";
  return /* @__PURE__ */ React7.createElement(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ React7.createElement(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ React7.createElement(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props
    },
    children ?? /* @__PURE__ */ React7.createElement(import_lucide_react2.ChevronRight, null)
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ React7.createElement(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props
    },
    /* @__PURE__ */ React7.createElement(import_lucide_react2.MoreHorizontal, { className: "size-4" }),
    /* @__PURE__ */ React7.createElement("span", { className: "sr-only" }, "More")
  );
}

// src/components/ui/calendar.tsx
var React8 = __toESM(require("react"), 1);
var import_lucide_react3 = require("lucide-react");
var import_react_day_picker = require("react-day-picker");
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ React8.createElement(
    import_react_day_picker.DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ React8.createElement(import_lucide_react3.ChevronLeft, { className: cn("size-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ React8.createElement(import_lucide_react3.ChevronRight, { className: cn("size-4", className2), ...props2 })
      },
      ...props
    }
  );
}

// src/components/ui/callout.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var React9 = __toESM(require("react"), 1);
var noteVariants = (0, import_class_variance_authority3.cva)("flex space-x-4", {
  variants: {
    variant: {
      primary: "bg-primary/10 [&>div]:bg-primary",
      success: "bg-success/10 [&>div]:bg-success",
      warning: "bg-warning/10 [&>div]:bg-warning",
      destructive: "bg-destructive/10 [&>div]:bg-destructive"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
function Callout({ variant, className, children }) {
  return /* @__PURE__ */ React9.createElement("div", { className: cn(noteVariants({ variant, className })), role: "alert" }, /* @__PURE__ */ React9.createElement("div", { className: "min-w-1" }), /* @__PURE__ */ React9.createElement("p", { className: "text-sm p-4 ps-0 leading-relaxed" }, children));
}

// src/components/ui/card.tsx
var React10 = __toESM(require("react"), 1);
function Card({ className, ...props }) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/components/ui/checkbox.tsx
var React11 = __toESM(require("react"), 1);
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_lucide_react4 = require("lucide-react");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ React11.createElement(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React11.createElement(
      CheckboxPrimitive.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center text-current transition-none"
      },
      /* @__PURE__ */ React11.createElement(import_lucide_react4.CheckIcon, { className: "size-3.5" })
    )
  );
}

// src/components/ui/checkbox-compact.tsx
var React13 = __toESM(require("react"), 1);

// src/components/ui/label.tsx
var React12 = __toESM(require("react"), 1);
var LabelPrimitive = __toESM(require("@radix-ui/react-label"), 1);
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ React12.createElement(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/checkbox-compact.tsx
function CheckboxCompact({
  id,
  label,
  checked,
  onCheckedChange
}) {
  return /* @__PURE__ */ React13.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React13.createElement(Checkbox, { id, checked, onCheckedChange }), /* @__PURE__ */ React13.createElement(Label, { htmlFor: id, className: "text-foreground/70" }, label));
}

// src/components/ui/command.tsx
var React15 = __toESM(require("react"), 1);
var import_cmdk = require("cmdk");
var import_lucide_react6 = require("lucide-react");

// src/components/ui/dialog.tsx
var React14 = __toESM(require("react"), 1);
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_lucide_react5 = require("lucide-react");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(DialogPortal, { "data-slot": "dialog-portal" }, /* @__PURE__ */ React14.createElement(DialogOverlay, null), /* @__PURE__ */ React14.createElement(
    DialogPrimitive.Content,
    {
      "data-slot": "dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React14.createElement(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" }, /* @__PURE__ */ React14.createElement(import_lucide_react5.XIcon, null), /* @__PURE__ */ React14.createElement("span", { className: "sr-only" }, "Close"))
  ));
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React14.createElement(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/command.tsx
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    import_cmdk.Command,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(Dialog, { ...props }, /* @__PURE__ */ React15.createElement(DialogHeader, { className: "sr-only" }, /* @__PURE__ */ React15.createElement(DialogTitle, null, title), /* @__PURE__ */ React15.createElement(DialogDescription, null, description)), /* @__PURE__ */ React15.createElement(DialogContent, { className: "overflow-hidden p-0" }, /* @__PURE__ */ React15.createElement(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, children)));
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3"
    },
    /* @__PURE__ */ React15.createElement(import_lucide_react6.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ React15.createElement(
      import_cmdk.Command.Input,
      {
        "data-slot": "command-input",
        className: cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    )
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    import_cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    import_cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    import_cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    import_cmdk.Command.Separator,
    {
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    import_cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ React15.createElement(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/data-table.tsx
var React17 = __toESM(require("react"), 1);
var import_react_table = require("@tanstack/react-table");
var import_react = require("react");

// src/components/ui/table.tsx
var React16 = __toESM(require("react"), 1);
function Table({ className, ...props }) {
  return /* @__PURE__ */ React16.createElement(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto"
    },
    /* @__PURE__ */ React16.createElement(
      "table",
      {
        "data-slot": "table",
        className: cn("w-full caption-bottom text-sm", className),
        ...props
      }
    )
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ React16.createElement(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ React16.createElement(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ React16.createElement(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ React16.createElement(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ React16.createElement(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ React16.createElement(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ React16.createElement(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className),
      ...props
    }
  );
}

// src/components/ui/data-table.tsx
function DataTable({
  columns,
  data,
  totalPage
}) {
  const table = (0, import_react_table.useReactTable)({
    data,
    columns,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
    manualPagination: true,
    pageCount: totalPage
  });
  return /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement(Table, null, table.getRowCount() === 0 && /* @__PURE__ */ React17.createElement(TableCaption, { className: "text-center" }, "No data"), /* @__PURE__ */ React17.createElement(TableHeader, null, table.getHeaderGroups().map((headerGroup) => {
    return /* @__PURE__ */ React17.createElement(TableRow, { key: headerGroup.id }, headerGroup.headers.map((header) => {
      return /* @__PURE__ */ React17.createElement(import_react.Fragment, { key: header.id }, (0, import_react_table.flexRender)(
        header.column.columnDef.header,
        header.getContext()
      ));
    }));
  })), /* @__PURE__ */ React17.createElement(TableBody, { className: "border-b" }, table.getRowModel().rows.map((row) => {
    return /* @__PURE__ */ React17.createElement(
      TableRow,
      {
        key: row.id,
        "data-state": row.getIsSelected() && "selected"
      },
      row.getVisibleCells().map((cell) => {
        return /* @__PURE__ */ React17.createElement(import_react.Fragment, { key: cell.id }, (0, import_react_table.flexRender)(
          cell.column.columnDef.cell,
          cell.getContext()
        ));
      })
    );
  }))));
}
function DataTableColumnHeader({
  className,
  children
}) {
  return /* @__PURE__ */ React17.createElement(TableHead, { className: cn("text-sm", className) }, children);
}
function DataTableColumnCell({
  className,
  children
}) {
  return /* @__PURE__ */ React17.createElement(TableCell, { className }, children);
}

// src/components/ui/datepicker.tsx
var import_lucide_react7 = require("lucide-react");
var import_react2 = require("react");

// src/components/ui/popover.tsx
var React18 = __toESM(require("react"), 1);
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"), 1);
function Popover({
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  noPortal,
  ...props
}) {
  const content = /* @__PURE__ */ React18.createElement(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  );
  if (noPortal) {
    return content;
  }
  return /* @__PURE__ */ React18.createElement(PopoverPrimitive.Portal, null, content);
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}

// src/components/ui/datepicker.tsx
var DatePicker = ({
  placeholder,
  value,
  className,
  calendarProps
}) => {
  const [open, setOpen] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ React.createElement(Popover, { open, onOpenChange: setOpen }, /* @__PURE__ */ React.createElement(PopoverTrigger, { className: "w-full" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "flex items-center border border-input rounded-md h-9 px-3 py-2 bg-accent/50 space-x-2 w-full",
        className
      )
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: cn("text-sm text-nowrap grow text-start", {
          "text-muted-foreground": !value
        })
      },
      value ? value : placeholder ?? "Pick a date..."
    ),
    /* @__PURE__ */ React.createElement(import_lucide_react7.CalendarIcon, { className: "size-4 opacity-50 ms-4" })
  )), /* @__PURE__ */ React.createElement(PopoverContent, { className: "w-auto p-0", align: "start" }, /* @__PURE__ */ React.createElement(Calendar, { ...calendarProps?.(() => setOpen(false)) })));
};

// src/components/ui/dropdown-menu.tsx
var React19 = __toESM(require("react"), 1);
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_lucide_react8 = require("lucide-react");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ));
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props
    },
    /* @__PURE__ */ React19.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React19.createElement(import_lucide_react8.CheckIcon, { className: "size-4" }))),
    children
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React19.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React19.createElement(import_lucide_react8.CircleIcon, { className: "size-2 fill-current" }))),
    children
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React19.createElement(import_lucide_react8.ChevronRightIcon, { className: "ml-auto size-4" })
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/input.tsx
var React20 = __toESM(require("react"), 1);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ React20.createElement(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/input-description.tsx
var React21 = __toESM(require("react"), 1);
var InputDescription = ({
  className,
  children
}) => {
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ React21.createElement("div", { className: cn("text-foreground/50 text-sm", className) }, children);
};

// src/components/ui/input-error.tsx
var React22 = __toESM(require("react"), 1);
var InputError = ({
  className,
  children
}) => {
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ React22.createElement("div", { className: cn("text-destructive text-sm", className) }, children);
};

// src/components/ui/input-label.tsx
var React23 = __toESM(require("react"), 1);
var InputLabel = ({
  className,
  required,
  children,
  ...props
}) => {
  if (required) {
    return /* @__PURE__ */ React23.createElement(Label, { className, ...props }, children, /* @__PURE__ */ React23.createElement("span", { className: "text-destructive" }, "*"));
  }
  return /* @__PURE__ */ React23.createElement(Label, { className, ...props }, children);
};

// src/components/ui/loading-spinner.tsx
var React24 = __toESM(require("react"), 1);
var import_lucide_react9 = require("lucide-react");
var LoadingSpinner = ({ className }) => {
  return /* @__PURE__ */ React24.createElement(import_lucide_react9.LoaderCircle, { className: cn("size-4 animate-spin", className) });
};

// src/components/ui/pagination.tsx
var import_lucide_react10 = require("lucide-react");
var import_react3 = require("react");
var React25 = __toESM(require("react"), 1);
function Pagination({
  totalPage,
  currentPage,
  renderPage = 3,
  searchParams,
  renderItem
}) {
  const params = (0, import_react3.useMemo)(() => {
    const params2 = new URLSearchParams(searchParams);
    params2.delete("page");
    return params2;
  }, [searchParams]);
  const pages = (0, import_react3.useMemo)(() => {
    if (currentPage > totalPage) {
      return [];
    }
    if (totalPage <= 1) {
      return [];
    }
    const pages2 = Array(totalPage > renderPage ? renderPage : totalPage).fill(
      0
    );
    const len = pages2.length;
    return pages2.map((_p, i) => {
      if (currentPage > 1) {
        if (currentPage === totalPage) {
          return totalPage - (len - 1 - i);
        }
        return i + (currentPage - 1);
      }
      return i + currentPage;
    });
  }, [currentPage, totalPage, renderPage]);
  if (totalPage <= 1) {
    return null;
  }
  if (currentPage > totalPage) {
    return /* @__PURE__ */ React25.createElement(Alert, { variant: "destructive" }, "Current page must not greater than total page");
  }
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPage;
  const iconSize = 20;
  return /* @__PURE__ */ React25.createElement("nav", { "aria-label": "Pagination" }, /* @__PURE__ */ React25.createElement("ul", { className: "flex space-x-1 mb-0 items-center" }, /* @__PURE__ */ React25.createElement(
    "li",
    {
      className: cn("lg:hidden", {
        "cursor-not-allowed": !hasPrev
      })
    },
    /* @__PURE__ */ React25.createElement(
      Button,
      {
        variant: "secondary",
        size: "icon",
        disabled: !hasPrev,
        asChild: hasPrev
      },
      renderItem({
        page: 1,
        children: /* @__PURE__ */ React25.createElement(import_lucide_react10.ChevronsLeftIcon, { size: iconSize }),
        searchParams: params
      })
    )
  ), /* @__PURE__ */ React25.createElement("li", { className: cn({ "cursor-not-allowed": !hasPrev }) }, /* @__PURE__ */ React25.createElement(
    Button,
    {
      variant: "secondary",
      size: "icon",
      disabled: !hasPrev,
      asChild: hasPrev
    },
    renderItem({
      page: currentPage - 1,
      children: /* @__PURE__ */ React25.createElement(import_lucide_react10.ChevronLeftIcon, { size: iconSize }),
      searchParams: params
    })
  )), totalPage !== renderPage && currentPage >= renderPage && /* @__PURE__ */ React25.createElement("li", { className: cn("hidden lg:block") }, /* @__PURE__ */ React25.createElement(Button, { variant: "secondary", size: "icon", asChild: true }, renderItem({
    page: 1,
    children: `${1}`,
    searchParams: params
  }))), currentPage > renderPage && /* @__PURE__ */ React25.createElement("li", { className: "text-muted-foreground px-2 hidden lg:block" }, /* @__PURE__ */ React25.createElement(import_lucide_react10.EllipsisIcon, { size: iconSize })), pages.map((e, i) => {
    const isActive = currentPage === e;
    return /* @__PURE__ */ React25.createElement("li", { key: i, className: "hidden lg:block" }, /* @__PURE__ */ React25.createElement(
      Button,
      {
        size: "icon",
        variant: isActive ? "default" : "secondary",
        asChild: true
      },
      renderItem({
        page: e,
        isActive,
        children: `${e}`,
        searchParams: params
      })
    ));
  }), totalPage - renderPage > currentPage - 1 && /* @__PURE__ */ React25.createElement("li", { className: "text-muted-foreground px-2 hidden lg:block" }, /* @__PURE__ */ React25.createElement(import_lucide_react10.EllipsisIcon, { size: iconSize })), totalPage !== renderPage && totalPage - renderPage >= currentPage - 1 && /* @__PURE__ */ React25.createElement("li", { className: cn("hidden lg:block") }, /* @__PURE__ */ React25.createElement(Button, { variant: "secondary", size: "icon", asChild: true }, renderItem({
    page: totalPage,
    children: `${totalPage}`,
    searchParams: params
  }))), /* @__PURE__ */ React25.createElement("li", { className: cn({ "cursor-not-allowed": !hasNext }) }, /* @__PURE__ */ React25.createElement(
    Button,
    {
      variant: "secondary",
      size: "icon",
      disabled: !hasNext,
      asChild: hasNext
    },
    renderItem({
      page: currentPage + 1,
      children: /* @__PURE__ */ React25.createElement(import_lucide_react10.ChevronRightIcon, { size: iconSize }),
      searchParams: params
    })
  )), /* @__PURE__ */ React25.createElement("li", { className: cn("lg:hidden", { "cursor-not-allowed": !hasNext }) }, /* @__PURE__ */ React25.createElement(
    Button,
    {
      variant: "secondary",
      size: "icon",
      disabled: !hasNext,
      asChild: hasNext
    },
    renderItem({
      page: totalPage,
      children: /* @__PURE__ */ React25.createElement(import_lucide_react10.ChevronsRightIcon, { size: iconSize }),
      searchParams: params
    })
  ))));
}

// src/components/ui/password-input.tsx
var import_lucide_react11 = require("lucide-react");
var React26 = __toESM(require("react"), 1);
var import_react4 = require("react");
var PasswordInput = React26.forwardRef(({ ...props }, ref) => {
  const [inputType, setInputType] = (0, import_react4.useState)("password");
  return /* @__PURE__ */ React26.createElement("div", { className: "relative" }, /* @__PURE__ */ React26.createElement(Input, { ref, ...props, type: inputType, className: "pe-10" }), /* @__PURE__ */ React26.createElement("div", { className: "absolute right-1 top-0 bottom-0 flex items-center" }, /* @__PURE__ */ React26.createElement(
    Button,
    {
      type: "button",
      variant: "ghost",
      className: "size-8 rounded-full",
      tabIndex: -1,
      onClick: () => {
        setInputType(inputType === "password" ? "text" : "password");
      }
    },
    inputType === "password" ? /* @__PURE__ */ React26.createElement(import_lucide_react11.EyeOffIcon, { size: 20 }) : /* @__PURE__ */ React26.createElement(import_lucide_react11.EyeIcon, { size: 20 })
  )));
});
PasswordInput.displayName = "Password Input";

// src/components/ui/radio-button.tsx
var React27 = __toESM(require("react"), 1);
var import_lucide_react12 = require("lucide-react");
var import_react5 = require("react");
var RadioButton = ({
  id,
  checked,
  className,
  onCheckedChange
}) => {
  const inputRef = (0, import_react5.useRef)(null);
  return /* @__PURE__ */ React27.createElement(
    "div",
    {
      role: "button",
      className: cn(
        "size-4 rounded-full border border-input dark:bg-input/30 text-primary flex items-center justify-center",
        {
          "border-primary": checked
        },
        className
      ),
      onClick: () => {
        inputRef.current?.click();
      }
    },
    /* @__PURE__ */ React27.createElement(
      "input",
      {
        id,
        ref: inputRef,
        type: "radio",
        className: "hidden",
        checked,
        onChange: (evt) => {
          onCheckedChange?.(evt.target.checked);
        }
      }
    ),
    /* @__PURE__ */ React27.createElement(
      import_lucide_react12.Circle,
      {
        className: cn("h-2.5 w-2.5 fill-current text-current", {
          invisible: !checked
        })
      }
    )
  );
};
RadioButton.displayName = "RadioButton";

// src/components/ui/radio-button-compact.tsx
var React28 = __toESM(require("react"), 1);
function RadioButtonCompact({
  id,
  label,
  checked,
  onCheckedChange
}) {
  return /* @__PURE__ */ React28.createElement("div", { className: "flex items-center space-x-1" }, /* @__PURE__ */ React28.createElement(
    RadioButton,
    {
      id,
      checked,
      onCheckedChange
    }
  ), /* @__PURE__ */ React28.createElement(Label, { htmlFor: id, className: "text-foreground/70" }, label));
}

// src/components/ui/scroll-area.tsx
var React29 = __toESM(require("react"), 1);
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"), 1);
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React29.createElement(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props
    },
    /* @__PURE__ */ React29.createElement(
      ScrollAreaPrimitive.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      },
      children
    ),
    /* @__PURE__ */ React29.createElement(ScrollBar, null),
    /* @__PURE__ */ React29.createElement(ScrollAreaPrimitive.Corner, null)
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ React29.createElement(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React29.createElement(
      ScrollAreaPrimitive.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"
      }
    )
  );
}

// src/components/ui/select.tsx
var React30 = __toESM(require("react"), 1);
var SelectPrimitive = __toESM(require("@radix-ui/react-select"), 1);
var import_lucide_react13 = require("lucide-react");
function Select({
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React30.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React30.createElement(import_lucide_react13.ChevronDownIcon, { className: "size-4 opacity-50" }))
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React30.createElement(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props
    },
    /* @__PURE__ */ React30.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React30.createElement(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
        )
      },
      children
    ),
    /* @__PURE__ */ React30.createElement(SelectScrollDownButton, null)
  ));
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React30.createElement("span", { className: "absolute right-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React30.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React30.createElement(import_lucide_react13.CheckIcon, { className: "size-4" }))),
    /* @__PURE__ */ React30.createElement(SelectPrimitive.ItemText, null, children)
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React30.createElement(import_lucide_react13.ChevronUpIcon, { className: "size-4" })
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React30.createElement(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React30.createElement(import_lucide_react13.ChevronDownIcon, { className: "size-4" })
  );
}

// src/components/ui/sonner.tsx
var React31 = __toESM(require("react"), 1);
var import_next_themes = require("next-themes");
var import_sonner = require("sonner");
var Toaster = ({ ...props }) => {
  const { theme = "system" } = (0, import_next_themes.useTheme)();
  return /* @__PURE__ */ React31.createElement(
    import_sonner.Toaster,
    {
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...props
    }
  );
};

// src/components/ui/switch.tsx
var React32 = __toESM(require("react"), 1);
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"), 1);
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ React32.createElement(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React32.createElement(
      SwitchPrimitive.Thumb,
      {
        "data-slot": "switch-thumb",
        className: cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )
      }
    )
  );
}

// src/components/ui/textarea.tsx
var React33 = __toESM(require("react"), 1);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ React33.createElement(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/tooltip.tsx
var React34 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ React34.createElement(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ React34.createElement(TooltipProvider, null, /* @__PURE__ */ React34.createElement(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }));
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ React34.createElement(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ React34.createElement(TooltipPrimitive.Portal, null, /* @__PURE__ */ React34.createElement(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React34.createElement(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
  ));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  Callout,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CheckboxCompact,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  DataTable,
  DataTableColumnCell,
  DataTableColumnHeader,
  DatePicker,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  InputDescription,
  InputError,
  InputLabel,
  Label,
  LoadingSpinner,
  Pagination,
  PasswordInput,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  RadioButton,
  RadioButtonCompact,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  buttonVariants
});
