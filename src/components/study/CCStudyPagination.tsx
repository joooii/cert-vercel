"use client";

import { useRouter, useSearchParams } from "next/navigation";
import AngleSVG from "/public/icons/angle.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function CCStudyPagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL 파라미터 업데이트 함수
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    // 페이지 번호 설정
    if (page === 1) {
      params.delete("page"); // 첫 페이지는 URL에서 제거
    } else {
      params.set("page", page.toString());
    }

    // URL 업데이트
    router.push(`/study?${params.toString()}`);
  };

  // 페이지 번호 배열 생성 (최대 5개 표시)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // 총 페이지가 5개 이하면 모두 표시
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 총 페이지가 5개 초과일 때
      if (currentPage <= 3) {
        // 현재 페이지가 앞쪽에 있을 때: 1, 2, 3, 4, 5
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // 현재 페이지가 뒤쪽에 있을 때: (총-4), (총-3), (총-2), (총-1), 총
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // 현재 페이지가 중간에 있을 때: (현재-2), (현재-1), 현재, (현재+1), (현재+2)
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* 이전 페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <AngleSVG className="w-3 h-3 rotate-90"></AngleSVG>
      </button>

      {/* 페이지 번호들 */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page as number)}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <AngleSVG className="w-3 h-3 rotate-270"></AngleSVG>
      </button>
    </div>
  );
}
