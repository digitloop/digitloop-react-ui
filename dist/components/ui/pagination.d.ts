import { type ReactNode } from "react";
interface PaginationItemProps {
    page: number;
    isActive?: boolean;
    children?: ReactNode;
    searchParams: URLSearchParams;
}
interface PaginationProps {
    totalPage: number;
    currentPage: number;
    renderItem: (props: PaginationItemProps) => ReactNode;
    renderPage?: number;
    searchParams?: string;
}
declare function Pagination({ totalPage, currentPage, renderPage, searchParams, renderItem, }: PaginationProps): import("react/jsx-runtime").JSX.Element | null;
export { Pagination };
//# sourceMappingURL=pagination.d.ts.map