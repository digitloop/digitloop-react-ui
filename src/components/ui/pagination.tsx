import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EllipsisIcon,
} from "lucide-react";
import { type ReactNode, useMemo } from "react";
import { Button } from "./button";

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

function Pagination({
  totalPage,
  currentPage,
  renderPage = 3,
  searchParams,
  renderItem,
}: PaginationProps) {
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

    const pages = Array(totalPage > renderPage ? renderPage : totalPage).fill(
      0
    );
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

  return (
    <nav aria-label="Pagination">
      <ul className="flex space-x-1 mb-0 items-center">
        <li
          className={cn("lg:hidden", {
            "cursor-not-allowed": !hasPrev,
          })}
        >
          <Button
            variant="secondary"
            size="icon"
            disabled={!hasPrev}
            asChild={hasPrev}
          >
            {renderItem({
              page: 1,
              children: <ChevronsLeftIcon size={iconSize} />,
              searchParams: params,
            })}
          </Button>
        </li>
        <li className={cn({ "cursor-not-allowed": !hasPrev })}>
          <Button
            variant="secondary"
            size="icon"
            disabled={!hasPrev}
            asChild={hasPrev}
          >
            {renderItem({
              page: currentPage - 1,
              children: <ChevronLeftIcon size={iconSize} />,
              searchParams: params,
            })}
          </Button>
        </li>
        {totalPage !== renderPage && currentPage >= renderPage && (
          <li className="cursor-not-allowed hidden lg:block">
            <Button variant="secondary" size="icon" asChild>
              {renderItem({
                page: 1,
                children: `${1}`,
                searchParams: params,
              })}
            </Button>
          </li>
        )}
        {currentPage > renderPage && (
          <li className="text-muted-foreground px-2 hidden lg:block">
            <EllipsisIcon size={iconSize} />
          </li>
        )}
        {pages.map((e, i) => {
          const isActive = currentPage === e;
          return (
            <li key={i} className="hidden lg:block">
              <Button
                size="icon"
                variant={isActive ? "default" : "secondary"}
                asChild
              >
                {renderItem({
                  page: e,
                  isActive: isActive,
                  children: `${e}`,
                  searchParams: params,
                })}
              </Button>
            </li>
          );
        })}
        {totalPage - renderPage > currentPage - 1 && (
          <li className="text-muted-foreground px-2 hidden lg:block">
            <EllipsisIcon size={iconSize} />
          </li>
        )}
        {totalPage !== renderPage &&
          totalPage - renderPage >= currentPage - 1 && (
            <li className="cursor-not-allowed hidden lg:block">
              <Button variant="secondary" size="icon" asChild>
                {renderItem({
                  page: totalPage,
                  children: `${totalPage}`,
                  searchParams: params,
                })}
              </Button>
            </li>
          )}
        <li className={cn({ "cursor-not-allowed": !hasNext })}>
          <Button
            variant="secondary"
            size="icon"
            disabled={!hasNext}
            asChild={hasNext}
          >
            {renderItem({
              page: currentPage + 1,
              children: <ChevronRightIcon size={iconSize} />,
              searchParams: params,
            })}
          </Button>
        </li>
        <li className={cn("lg:hidden", { "cursor-not-allowed": !hasNext })}>
          <Button
            variant="secondary"
            size="icon"
            disabled={!hasNext}
            asChild={hasNext}
          >
            {renderItem({
              page: totalPage,
              children: <ChevronsRightIcon size={iconSize} />,
              searchParams: params,
            })}
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export { Pagination };
