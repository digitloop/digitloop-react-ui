import { cn } from "@/lib/utils";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type Row,
  type TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, type ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

type DataTableProps<TData> = Pick<TableOptions<TData>, "columns" | "data"> & {
  totalPage: number;
  currentPage: number;
};

function DataTable<TData>({
  columns,
  data,
  totalPage,
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPage,
  });

  return (
    <>
      <Table>
        {table.getRowCount() === 0 && (
          <TableCaption className="text-center">No data</TableCaption>
        )}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Fragment key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Fragment>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>
        <TableBody className="border-b">
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Fragment key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Fragment>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* {totalPage > 1 && (
        <div className="mt-8 flex items-center justify-end space-x-10">
          <div className="text-sm text-muted-foreground block lg:hidden">
            Page {currentPage + 1} of {totalPage}
          </div>
          <Pagination totalPage={totalPage} currentPage={currentPage + 1} />
        </div>
      )} */}
    </>
  );
}

function DataTableColumnHeader<TData>({
  className,
  children,
}: {
  column: ColumnDef<TData>;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <TableHead className={cn("text-sm", className)}>{children}</TableHead>
  );
}

function DataTableColumnCell<TData>({
  className,
  children,
}: {
  row: Row<TData>;
  className?: string;
  children?: ReactNode;
}) {
  return <TableCell className={className}>{children}</TableCell>;
}

export { DataTable, DataTableColumnCell, DataTableColumnHeader };
