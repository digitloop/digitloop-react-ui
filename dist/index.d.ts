import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DayPicker } from 'react-day-picker';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { TableOptions, Row, ColumnDef } from '@tanstack/react-table';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ToasterProps } from 'sonner';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

declare function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>): React.JSX.Element;
declare function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>): React.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>): React.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>): React.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "primary" | "success" | "destructive" | "default" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    message?: string | string[];
}
declare function Alert({ message, variant, className, children, ...props }: AlertProps): React.JSX.Element;

declare function AlertDialog({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>): React.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>): React.JSX.Element;
declare function AlertDialogPortal({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Portal>): React.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>): React.JSX.Element;
declare function AlertDialogContent({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Content>): React.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>): React.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Description>): React.JSX.Element;
declare function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>): React.JSX.Element;
declare function AlertDialogCancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>): React.JSX.Element;

declare function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>): React.JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): React.JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): React.JSX.Element;

declare function Breadcrumb({ ...props }: React.ComponentProps<"nav">): React.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">): React.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">): React.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React.ComponentProps<"a"> & {
    asChild?: boolean;
}): React.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<"li">): React.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "destructive" | "default" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;

type CalendarProps = React.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, showOutsideDays, ...props }: React.ComponentProps<typeof DayPicker>): React.JSX.Element;

declare const noteVariants: (props?: ({
    variant?: "primary" | "success" | "destructive" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NoteProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof noteVariants> {
}
declare function Callout({ variant, className, children }: NoteProps): React.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;

declare function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>): React.JSX.Element;

interface CheckboxCompactProps {
    id?: string;
    label: string;
    checked?: CheckboxPrimitive.CheckedState;
    onCheckedChange?: (checked: CheckboxPrimitive.CheckedState) => void;
}
declare function CheckboxCompact({ id, label, checked, onCheckedChange, }: CheckboxCompactProps): React.JSX.Element;

declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): React.JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): React.JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>): React.JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): React.JSX.Element;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>): React.JSX.Element;
declare function DialogContent({ className, children, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>): React.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DialogFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): React.JSX.Element;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): React.JSX.Element;

declare function Command({ className, ...props }: React.ComponentProps<typeof Command$1>): React.JSX.Element;
declare function CommandDialog({ title, description, children, ...props }: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
}): React.JSX.Element;
declare function CommandInput({ className, ...props }: React.ComponentProps<typeof Command$1.Input>): React.JSX.Element;
declare function CommandList({ className, ...props }: React.ComponentProps<typeof Command$1.List>): React.JSX.Element;
declare function CommandEmpty({ ...props }: React.ComponentProps<typeof Command$1.Empty>): React.JSX.Element;
declare function CommandGroup({ className, ...props }: React.ComponentProps<typeof Command$1.Group>): React.JSX.Element;
declare function CommandSeparator({ className, ...props }: React.ComponentProps<typeof Command$1.Separator>): React.JSX.Element;
declare function CommandItem({ className, ...props }: React.ComponentProps<typeof Command$1.Item>): React.JSX.Element;
declare function CommandShortcut({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;

type DataTableProps<TData> = Pick<TableOptions<TData>, "columns" | "data"> & {
    totalPage: number;
    currentPage: number;
};
declare function DataTable<TData>({ columns, data, totalPage, }: DataTableProps<TData>): React.JSX.Element;
declare function DataTableColumnHeader<TData>({ className, children, }: {
    column: ColumnDef<TData>;
    className?: string;
    children?: React.ReactNode;
}): React.JSX.Element;
declare function DataTableColumnCell<TData>({ className, children, }: {
    row: Row<TData>;
    className?: string;
    children?: React.ReactNode;
}): React.JSX.Element;

interface DatePickerProps {
    placeholder?: string;
    value?: string;
    className?: string;
    calendarProps?: (close: () => void) => CalendarProps;
}
declare const DatePicker: ({ placeholder, value, className, calendarProps, }: DatePickerProps) => React.JSX.Element;

declare function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>): React.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>): React.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): React.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>): React.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>): React.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): React.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): React.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): React.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>): React.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>): React.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): React.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<"input">): React.JSX.Element;

declare const InputDescription: ({ className, children, }: {
    className?: string;
    children: React.ReactNode;
}) => React.JSX.Element | null;

declare const InputError: ({ className, children }: {
    className?: string;
    children: React.ReactNode;
}) => React.JSX.Element | null;

declare function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): React.JSX.Element;

declare const InputLabel: ({ className, required, children, ...props }: React.ComponentProps<typeof Label> & {
    required?: boolean;
}) => React.JSX.Element;

declare const LoadingSpinner: ({ className }: {
    className?: string;
}) => React.JSX.Element;

interface PaginationItemProps {
    page: number;
    isActive?: boolean;
    children?: React.ReactNode;
    searchParams: URLSearchParams;
}
interface PaginationProps {
    totalPage: number;
    currentPage: number;
    renderItem: (props: PaginationItemProps) => React.ReactNode;
    renderPage?: number;
    searchParams?: string;
}
declare function Pagination({ totalPage, currentPage, renderPage, searchParams, renderItem, }: PaginationProps): React.JSX.Element | null;

declare const PasswordInput: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type">, "ref"> & React.RefAttributes<HTMLInputElement>>;

declare function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>): React.JSX.Element;
declare function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>): React.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, noPortal, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content> & {
    noPortal?: boolean;
}): React.JSX.Element;
declare function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>): React.JSX.Element;

interface RadioButtonProps {
    id?: string;
    checked?: boolean;
    onCheckedChange?: (value: boolean) => void;
    className?: string;
}
declare const RadioButton: {
    ({ id, checked, className, onCheckedChange, }: RadioButtonProps): React.JSX.Element;
    displayName: string;
};

interface RadioButtonCompactProps {
    id?: string;
    label: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
declare function RadioButtonCompact({ id, label, checked, onCheckedChange, }: RadioButtonCompactProps): React.JSX.Element;

declare function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): React.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): React.JSX.Element;

declare function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>): React.JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): React.JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): React.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}): React.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): React.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): React.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): React.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): React.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): React.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React.JSX.Element;

declare function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>): React.JSX.Element;

declare function Table({ className, ...props }: React.ComponentProps<"table">): React.JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<"thead">): React.JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<"tbody">): React.JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): React.JSX.Element;
declare function TableRow({ className, ...props }: React.ComponentProps<"tr">): React.JSX.Element;
declare function TableHead({ className, ...props }: React.ComponentProps<"th">): React.JSX.Element;
declare function TableCell({ className, ...props }: React.ComponentProps<"td">): React.JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<"caption">): React.JSX.Element;

declare function Textarea({ className, ...props }: React.ComponentProps<"textarea">): React.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): React.JSX.Element;
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): React.JSX.Element;
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): React.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): React.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, Avatar, AvatarFallback, AvatarImage, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, type CalendarProps, Callout, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, CheckboxCompact, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, DataTable, DataTableColumnCell, DataTableColumnHeader, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Input, InputDescription, InputError, InputLabel, Label, LoadingSpinner, Pagination, PasswordInput, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, RadioButton, RadioButtonCompact, type RadioButtonProps, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Textarea, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, buttonVariants };
