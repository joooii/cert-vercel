"server-only";

import DefaultBadge from "@/components/ui/defaultBadge";
import { getStudyCategoryColor } from "@/utils/profileUtils";
import { ProfileStudyDataType, StudyCategoryType } from "@/types/profile";
import Link from "next/link";
import { Tag } from "lucide-react";
import CCProfileStudyStatusFilter from "@/components/profile/CCProfileStudyStatusFilter";
import CCCreateDropdown from "@/components/profile/CCCreateDropdown";
import { StudyStatusType, studyStatus } from "@/types/profile";

interface SCStudyListProps {
  searchParams: Promise<{
    tab?: string;
    status?: string;
  }>;
  studies: ProfileStudyDataType[];
}

export default async function SCStudyList({
  searchParams,
  studies,
}: SCStudyListProps) {
  const { tab, status } = await searchParams;
  const currentTab = tab || "study";

  if (currentTab !== "study") return null;

  const isValidStatus = (status: string): status is StudyStatusType =>
    studyStatus.includes(status as StudyStatusType);

  const selectedStatus: StudyStatusType =
    status && isValidStatus(status) ? status : "전체";

  const filteredStudies =
    selectedStatus === "전체"
      ? studies
      : studies.filter((study) => study.status === selectedStatus);

  return (
    <>
      <div className="space-y-4 mt-8 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <div className="flex items-center justify-between flex-wrap gap-2 sm:flex-row">
          <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300">
            내 스터디/프로젝트 목록
          </h3>

          <div className="flex flex-row items-center gap-4 sm:justify-between justify-center">
            <CCProfileStudyStatusFilter selectedStatus={selectedStatus} />
            {/* 새 자료 생성 버튼 -> 드롭다운 통해서 스터디/프로젝트 선택 */}
            <CCCreateDropdown />
          </div>
        </div>

        {/* ✅ 필터링된 목록 출력 */}
        {filteredStudies.length > 0 ? (
          filteredStudies.map((study) => (
            <div
              key={study.id}
              className="card-list text-card-foreground group"
            >
              <Link href={`/${study.category.toLocaleLowerCase()}/${study.id}`}>
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold leading-none tracking-tight text-lg text-gray-900 group-hover:text-red-600 transition-colors cursor-pointer">
                        {study.title}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 transition-colors duration-300">
                        <span>{study.date}</span>
                        <DefaultBadge
                          className={`border-gray-200 text-gray-600 hover:text-gray-900 cursor-auto
                          ${getStudyCategoryColor(
                            study.category as StudyCategoryType
                          )}`}
                        >
                          {study.category}
                        </DefaultBadge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <DefaultBadge
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 "
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </DefaultBadge>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center text-sm text-gray-500 py-8">
            해당 상태의 스터디/프로젝트가 없습니다.
          </div>
        )}
      </div>
    </>
  );
}
