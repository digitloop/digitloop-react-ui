import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { flexRender, getCoreRowModel, useReactTable, } from "@tanstack/react-table";
import { Fragment } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "./table";
function DataTable({ columns, data, totalPage, }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount: totalPage,
    });
    return (_jsx(_Fragment, { children: _jsxs(Table, { children: [table.getRowCount() === 0 && (_jsx(TableCaption, { className: "text-center", children: "No data" })), _jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => {
                        return (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                                return (_jsx(Fragment, { children: flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                            }) }, headerGroup.id));
                    }) }), _jsx(TableBody, { className: "border-b", children: table.getRowModel().rows.map((row) => {
                        return (_jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => {
                                return (_jsx(Fragment, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                            }) }, row.id));
                    }) })] }) }));
}
function DataTableColumnHeader({ className, children, }) {
    return (_jsx(TableHead, { className: cn("text-sm", className), children: children }));
}
function DataTableColumnCell({ className, children, }) {
    return _jsx(TableCell, { className: className, children: children });
}
export { DataTable, DataTableColumnCell, DataTableColumnHeader };
