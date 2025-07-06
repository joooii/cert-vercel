import Link from "next/link";
import { getPageNumbers } from "@/utils/paginationUtils";
interface BoardPaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  currentSearch: string;
  currentCategory: string;
}

export default function BoardPagination({
  currentPage,
  totalItems,
  itemsPerPage,
  currentSearch,
  currentCategory,
}: BoardPaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    const params = {
      ...(currentSearch && { title: currentSearch }),
      ...(currentCategory !== "전체" && { category: currentCategory }),
      ...(page > 1 && { page: page.toString() }),
    };

    const query = new URLSearchParams(params).toString();
    return `/board${query ? `?${query}` : ""}`;
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {currentPage > 1 ? (
        <Link href={createPageUrl(currentPage - 1)}>
          <div className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 text-gray-600 hover:bg-cert-red hover:border-cert-red hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </Link>
      ) : (
        <div className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 text-gray-400 opacity-50 cursor-not-allowed">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}

      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
              ...
            </span>
          );
        }

        const pageNumber = page as number;

        return pageNumber === currentPage ? (
          <div
            key={pageNumber}
            className="inline-flex items-center justify-center h-9 px-3 rounded-md bg-cert-red text-white min-w-[40px]"
          >
            {pageNumber}
          </div>
        ) : (
          <Link key={pageNumber} href={createPageUrl(pageNumber)}>
            <div className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 text-gray-600 hover:bg-cert-red hover:border-cert-red hover:text-white transition-colors min-w-[40px]">
              {pageNumber}
            </div>
          </Link>
        );
      })}

      {currentPage < totalPages ? (
        <Link href={createPageUrl(currentPage + 1)}>
          <div className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 text-gray-600 hover:bg-cert-red hover:border-cert-red hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </Link>
      ) : (
        <div className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 text-gray-400 opacity-50 cursor-not-allowed">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
}
