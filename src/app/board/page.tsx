import { Metadata } from "next";
import { mockBoardContents } from "@/mocks/mockBoardContents";
import BoardSearchBar from "@/components/board/CCBoardSearchBar";
import BoardCategory from "@/components/board/CCBoardCategory";
import BoardCardList from "@/components/board/SCBoardCardList";
import BoardPagination from "@/components/board/SCBoardPagination";
import PlusSVG from "@/icons/plus.svg";

const ITEMS_PER_PAGE = 4;

interface BoardPageProps {
  searchParams: {
    page?: string;
    title?: string;
    category?: string;
  };
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: { title?: string; category?: string };
}): Metadata {
  const { title, category } = searchParams;

  return {
    title: `${title ? `${title} - ` : ""}Security Board`,
    description: `보안 게시판${category ? ` - ${category}` : ""}`,
  };
}

export default function BoardPage({ searchParams }: BoardPageProps) {
  const { page, title, category } = searchParams;

  const currentPage = parseInt(page || "1", 10);
  const currentSearch = title || "";
  const currentCategory = category || "전체";

  const filteredContents = mockBoardContents.filter((content) => {
    const matchedSearch = content.title
      .toLowerCase()
      .includes(currentSearch.toLowerCase());
    const matchedCategory =
      currentCategory === "전체" || content.category === currentCategory;
    return matchedSearch && matchedCategory;
  });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedContents = filteredContents.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <BoardSearchBar initialValue={currentSearch} />
        <BoardCategory selectedCategory={currentCategory} />
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-cert-red text-white rounded-md hover:bg-cert-red/80">
          <PlusSVG className="w-4 h-4" />새 글 작성
        </button>
      </div>

      <BoardCardList contents={paginatedContents} />

      <BoardPagination
        currentPage={currentPage}
        totalItems={filteredContents.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentSearch={currentSearch}
        currentCategory={currentCategory}
      />
    </div>
  );
}
