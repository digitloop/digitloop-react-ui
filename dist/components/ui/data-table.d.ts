import { type ColumnDef, type Row, type TableOptions } from "@tanstack/react-table";
import { type ReactNode } from "react";
type DataTableProps<TData> = Pick<TableOptions<TData>, "columns" | "data"> & {
    totalPage: number;
    currentPage: number;
};
declare function DataTable<TData>({ columns, data, totalPage, }: DataTableProps<TData>): import("react/jsx-runtime").JSX.Element;
declare function DataTableColumnHeader<TData>({ className, children, }: {
    column: ColumnDef<TData>;
    className?: string;
    children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function DataTableColumnCell<TData>({ className, children, }: {
    row: Row<TData>;
    className?: string;
    children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export { DataTable, DataTableColumnCell, DataTableColumnHeader };
//# sourceMappingURL=data-table.d.ts.map