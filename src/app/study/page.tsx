import { Suspense } from "react";
import SCStudyDescription from "@/components/study/SCStudyDescription";
import CCStudyFilter from "@/components/study/CCStudyFilter";
import SCStudyContent from "@/components/study/SCStudyContent";
import SCStudySkeleton from "@/components/study/SCStudySkeleton";
import type {
  StudyPageProps,
  CurrentFilters,
  SemesterType,
  TechniqueType,
  StatusType,
} from "@/types/study";

export default async function StudyPage({ searchParams }: StudyPageProps) {
  // 🚀 Next.js 15: searchParams를 await 해서 사용
  const resolvedSearchParams = await searchParams;

  // URL에서 필터 파라미터 추출 (타입 안전성 확보)
  const filters: CurrentFilters = {
    search: resolvedSearchParams.search || "",
    semester: (resolvedSearchParams.semester as SemesterType) || "all",
    technique: (resolvedSearchParams.technique as TechniqueType) || "all",
    status: (resolvedSearchParams.status as StatusType) || "all",
    page: parseInt(resolvedSearchParams.page || "1", 10),
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 - Server Component */}
        <SCStudyDescription />

        {/* 검색 및 필터 - Client Component */}
        <CCStudyFilter currentFilters={filters} />

        {/* 콘텐츠 - Suspense로 감싼 카드 그리드 */}
        <Suspense fallback={<SCStudySkeleton />}>
          <SCStudyContent currentFilters={filters} />
        </Suspense>
      </div>
    </div>
  );
}
