"use client";

import { useState } from "react";
import DefaultButton from "@/components/ui/defaultButton";
import DefaultSearchBar from "@/components/ui/defaultSearchBar";
import SearchSVG from "@/icons/search.svg";
import PlusSVG from "@/icons/plus.svg";
import ShieldSVG from "@/icons/shield.svg";
import { mockBoardContents } from "@/mocks/mockBoardContents";
import BoardCard from "@/components/board/boardCard";
import DefaultNoneResultUi from "@/components/ui/defaultNoneResultUi";

const categories = [
  "전체",
  "공지사항",
  "보안분석",
  "기술자료",
  "스터디",
  "자유게시판",
];

export default function BoardContent() {
  const [searchContent, setSearchContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredContents = mockBoardContents.filter((content) => {
    const matchedSearch =
      content.title.toLowerCase().includes(searchContent.toLowerCase()) ||
      content.content.toLowerCase().includes(searchContent.toLowerCase()) ||
      content.author.toLowerCase().includes(searchContent.toLowerCase());
    const matchedCategory =
      selectedCategory === "전체" || content.category === selectedCategory;
    return matchedSearch && matchedCategory;
  });

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <SearchSVG className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <DefaultSearchBar
            placeholder="정보를 검색하세요... (제목, 내용, 작성자)"
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
            className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-cert-red"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <DefaultButton
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
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
        {filteredContents.map((content) => (
          <BoardCard key={content.id} {...content} />
        ))}
      </div>

      {filteredContents.length === 0 && (
        <DefaultNoneResultUi
          icon={<ShieldSVG />}
          title="검색 결과가 없습니다."
          description="검색어를 확인하거나 다른 카테고리를 선택해보세요."
        />
      )}
    </>
  );
}
