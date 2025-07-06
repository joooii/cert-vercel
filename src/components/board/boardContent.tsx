"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import DefaultButton from "@/components/ui/defaultButton";
import DefaultSearchBar from "@/components/ui/defaultSearchBar";
import SearchSVG from "@/icons/search.svg";
import PlusSVG from "@/icons/plus.svg";
import ShieldSVG from "@/icons/shield.svg";
import { mockBoardContents } from "@/mocks/mockBoardContents";
import BoardCard from "@/components/board/boardCard";
import DefaultNoneResultUi from "@/components/ui/defaultNoneResultUi";
import { useRouter, useSearchParams } from "next/navigation";
import BoardPagination from "@/components/board/boardPagination";
const categories = [
  "전체",
  "공지사항",
  "보안분석",
  "기술자료",
  "스터디",
  "자유게시판",
];

const ITEMS_PER_PAGE = 4; // 페이지당 표시할 게시글 수

export default function BoardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL에서 현재 값들 가져오기
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentSearch = searchParams.get("title") || "";
  const currentCategory = searchParams.get("category") || "전체";

  const [searchInput, setSearchInput] = useState(currentSearch);

  const filteredContents = useMemo(() => {
    return mockBoardContents.filter((content) => {
      const matchedSearch = content.title
        .toLowerCase()
        .includes(currentSearch.toLowerCase());
      const matchedCategory =
        currentCategory === "전체" || content.category === currentCategory;
      return matchedSearch && matchedCategory;
    });
  }, [currentSearch, currentCategory]);

  const updateURL = (newParams: {
    title?: string;
    category?: string;
    page?: number;
  }) => {
    const params = new URLSearchParams(searchParams);

    const setOrDeleteParams = (
      key: string,
      value: string | number,
      condition: boolean
    ) => {
      return condition ? params.set(key, value.toString()) : params.delete(key);
    };

    if (newParams.title !== undefined) {
      setOrDeleteParams("title", newParams.title, !!newParams.title);
    }

    if (newParams.category !== undefined) {
      setOrDeleteParams(
        "category",
        newParams.category,
        newParams.category == "전체" ? false : !!newParams.category
      );
    }

    if (newParams.page !== undefined) {
      setOrDeleteParams("page", newParams.page, newParams.page > 1);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/board?${queryString}` : "/board";
    router.push(newUrl);
  };

  const prevSearchContent = useRef(searchInput);

  // 검색어 변경 핸들러 (디바운싱 적용)
  useEffect(() => {
    // 검색어가 이전과 같으면 아무 작업도 하지 않음
    if (prevSearchContent.current === searchInput) return;
    prevSearchContent.current = searchInput;

    const debounceTimer = setTimeout(() => {
      updateURL({ title: searchInput, page: 1 }); // 검색 시 첫 페이지로 이동
    }, 100);

    return () => clearTimeout(debounceTimer);
  }, [searchInput]);

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category: string) => {
    updateURL({ category, page: 1 }); // 카테고리 변경 시 첫 페이지로 이동
  };

  // 페이지네이션을 위한 콘텐츠 슬라이싱
  const paginatedContents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    // slice 메서는 마지막 인덱스는 포함하지 않습니다.
    return filteredContents.slice(startIndex, endIndex);
  }, [filteredContents, currentPage]);

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <SearchSVG className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <DefaultSearchBar
            placeholder="정보를 검색하세요... "
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-cert-red"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <DefaultButton
              key={category}
              variant={currentCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={
                currentCategory === category
                  ? "bg-cert-red   text-white hover:bg-cert-red/80"
                  : "border-gray-300 text-gray-600 hover:border-cert-red"
              }
            >
              {category}
            </DefaultButton>
          ))}
        </div>
        <DefaultButton>
          <PlusSVG className="w-4 h-4 mr-2" />새 글 작성
        </DefaultButton>
      </div>

      <div className="space-y-4">
        {paginatedContents.map((content) => (
          <BoardCard key={content.id} {...content} />
        ))}
      </div>
      <BoardPagination
        currentPage={currentPage}
        totalItems={filteredContents.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={(page) => updateURL({ page })}
      />

      {paginatedContents.length === 0 && (
        <DefaultNoneResultUi
          icon={<ShieldSVG />}
          title="검색 결과가 없습니다."
          description="검색어를 확인하거나 다른 카테고리를 선택해보세요."
        />
      )}
    </>
  );
}
