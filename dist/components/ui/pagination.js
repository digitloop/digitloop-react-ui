import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, EllipsisIcon, } from "lucide-react";
import { useMemo } from "react";
import { Button } from "./button";
function Pagination({ totalPage, currentPage, renderPage = 3, searchParams, renderItem, }) {
    const params = useMemo(() => {
        const params = new URLSearchParams(searchParams);
        // params.delete("page");
        // return params.size > 0 ? params.toString() : undefined;
        return params;
    }, [searchParams]);
    const pages = useMemo(() => {
        if (currentPage > totalPage) {
            return [];
        }
        if (totalPage <= 1) {
            return [];
        }
        const pages = Array(totalPage > renderPage ? renderPage : totalPage).fill(0);
        const len = pages.length;
        return pages.map((_p, i) => {
            if (currentPage > 1) {
                if (currentPage === totalPage) {
                    return totalPage - (len - 1 - i);
                }
                return i + (currentPage - 1);
            }
            return i + currentPage;
        });
    }, [currentPage, totalPage, renderPage]);
    // const renderItem = ({ page, children }: PaginationItemProps) => {
    //   const href = params ? `?${params}&page=${page}` : `?page=${page}`;
    //   return <Link to={href}>{children}</Link>;
    // };
    if (totalPage <= 1) {
        return null;
    }
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPage;
    const iconSize = 20;
    return (_jsx("nav", { "aria-label": "Pagination", children: _jsxs("ul", { className: "flex space-x-1 mb-0 items-center", children: [_jsx("li", { className: cn("lg:hidden", {
                        "cursor-not-allowed": !hasPrev,
                    }), children: _jsx(Button, { variant: "secondary", size: "icon", disabled: !hasPrev, asChild: hasPrev, children: renderItem({
                            page: 1,
                            children: _jsx(ChevronsLeftIcon, { size: iconSize }),
                            searchParams: params,
                        }) }) }), _jsx("li", { className: cn({ "cursor-not-allowed": !hasPrev }), children: _jsx(Button, { variant: "secondary", size: "icon", disabled: !hasPrev, asChild: hasPrev, children: renderItem({
                            page: currentPage - 1,
                            children: _jsx(ChevronLeftIcon, { size: iconSize }),
                            searchParams: params,
                        }) }) }), totalPage !== renderPage && currentPage >= renderPage && (_jsx("li", { className: "cursor-not-allowed hidden lg:block", children: _jsx(Button, { variant: "secondary", size: "icon", asChild: true, children: renderItem({
                            page: 1,
                            children: `${1}`,
                            searchParams: params,
                        }) }) })), currentPage > renderPage && (_jsx("li", { className: "text-muted-foreground px-2 hidden lg:block", children: _jsx(EllipsisIcon, { size: iconSize }) })), pages.map((e, i) => {
                    const isActive = currentPage === e;
                    return (_jsx("li", { className: "hidden lg:block", children: _jsx(Button, { size: "icon", variant: isActive ? "default" : "secondary", asChild: true, children: renderItem({
                                page: e,
                                isActive: isActive,
                                children: `${e}`,
                                searchParams: params,
                            }) }) }, i));
                }), totalPage - renderPage > currentPage - 1 && (_jsx("li", { className: "text-muted-foreground px-2 hidden lg:block", children: _jsx(EllipsisIcon, { size: iconSize }) })), totalPage !== renderPage &&
                    totalPage - renderPage >= currentPage - 1 && (_jsx("li", { className: "cursor-not-allowed hidden lg:block", children: _jsx(Button, { variant: "secondary", size: "icon", asChild: true, children: renderItem({
                            page: totalPage,
                            children: `${totalPage}`,
                            searchParams: params,
                        }) }) })), _jsx("li", { className: cn({ "cursor-not-allowed": !hasNext }), children: _jsx(Button, { variant: "secondary", size: "icon", disabled: !hasNext, asChild: hasNext, children: renderItem({
                            page: currentPage + 1,
                            children: _jsx(ChevronRightIcon, { size: iconSize }),
                            searchParams: params,
                        }) }) }), _jsx("li", { className: cn("lg:hidden", { "cursor-not-allowed": !hasNext }), children: _jsx(Button, { variant: "secondary", size: "icon", disabled: !hasNext, asChild: hasNext, children: renderItem({
                            page: totalPage,
                            children: _jsx(ChevronsRightIcon, { size: iconSize }),
                            searchParams: params,
                        }) }) })] }) }));
}
export { Pagination };
