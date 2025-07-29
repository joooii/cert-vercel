"use client";

import { useState, useTransition, useRef, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import CCProjectSearchBar from "@/components/project/CCProjectSearchBar";
import {
  CurrentFilters,
  SEMESTER_OPTIONS,
  TECHNIQUE_OPTIONS,
  STATUS_OPTIONS,
  SEMESTER_LABELS,
  TECHNIQUE_LABELS,
  STATUS_LABELS,
} from "@/types/project";

interface ProjectCategoryProps {
  currentFilters: CurrentFilters;
}

export default function CCProjectFilter({
  currentFilters,
}: ProjectCategoryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [showSemesterDropdown, setShowSemesterDropdown] = useState(false);
  const [showTechniqueDropdown, setShowTechniqueDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const semesterRef = useRef<HTMLDivElement>(null);
  const techniqueRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "전체" || value === "all" || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      params.delete("page");

      const newUrl = `/project?${params.toString()}`;
      startTransition(() => {
        router.push(newUrl);
      });
    },
    [searchParams, router]
  );

  const closeAllDropdowns = useCallback(() => {
    setShowSemesterDropdown(false);
    setShowTechniqueDropdown(false);
    setShowStatusDropdown(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        semesterRef.current?.contains(target) ||
        techniqueRef.current?.contains(target) ||
        statusRef.current?.contains(target)
      ) {
        return;
      }
      closeAllDropdowns();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAllDropdowns]);

  return (
    <div className="mb-1 sm:mb-4">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <CCProjectSearchBar currentSearch={currentFilters.search} />

        <div className="flex flex-row flex-wrap gap-3">
          {/* 학기 필터 */}
          <div className="relative sm:min-w-36 min-w-30" ref={semesterRef}>
            <button
              type="button"
              onClick={() => {
                setShowSemesterDropdown(!showSemesterDropdown);
                setShowTechniqueDropdown(false);
                setShowStatusDropdown(false);
              }}
              className="w-full flex items-center justify-between h-10 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:ring-2 focus:ring-red-500 transition-colors text-sm"
            >
              <span className="text-gray-700 truncate pr-1">
                {SEMESTER_LABELS[currentFilters.semester]}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 text-gray-400 ${
                  showSemesterDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showSemesterDropdown && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                {SEMESTER_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-900 first:rounded-t-lg last:rounded-b-lg text-sm"
                    onClick={() => {
                      updateFilter("semester", option);
                      closeAllDropdowns();
                    }}
                  >
                    {SEMESTER_LABELS[option]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 기법 필터 */}
          <div className="relative sm:min-w-36 min-w-30" ref={techniqueRef}>
            <button
              type="button"
              onClick={() => {
                setShowTechniqueDropdown(!showTechniqueDropdown);
                setShowSemesterDropdown(false);
                setShowStatusDropdown(false);
              }}
              className="w-full flex items-center justify-between h-10 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:ring-2 focus:ring-red-500 transition-colors text-sm"
            >
              <span className="text-gray-700 truncate pr-1">
                {TECHNIQUE_LABELS[currentFilters.technique]}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 text-gray-400 ${
                  showTechniqueDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showTechniqueDropdown && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                {TECHNIQUE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-900 first:rounded-t-lg last:rounded-b-lg text-sm"
                    onClick={() => {
                      updateFilter("technique", option);
                      closeAllDropdowns();
                    }}
                  >
                    {TECHNIQUE_LABELS[option]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 상태 필터 */}
          <div className="relative sm:min-w-36 min-w-30" ref={statusRef}>
            <button
              type="button"
              onClick={() => {
                setShowStatusDropdown(!showStatusDropdown);
                setShowSemesterDropdown(false);
                setShowTechniqueDropdown(false);
              }}
              className="w-full flex items-center justify-between h-10 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:ring-2 focus:ring-red-500 transition-colors text-sm"
            >
              <span className="text-gray-700 truncate pr-1">
                {STATUS_LABELS[currentFilters.status]}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 text-gray-400 ${
                  showStatusDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showStatusDropdown && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                {STATUS_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-900 first:rounded-t-lg last:rounded-b-lg text-sm"
                    onClick={() => {
                      updateFilter("status", option);
                      closeAllDropdowns();
                    }}
                  >
                    {STATUS_LABELS[option]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 활성 필터 태그 */}
      <div className="flex flex-wrap gap-2 mt-2">
        {currentFilters.search && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3 sm:mb-0">
            검색: {currentFilters.search}
            <button
              type="button"
              onClick={() => updateFilter("search", "")}
              className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-purple-200"
            >
              <X className="w-3" />
            </button>
          </span>
        )}
        {currentFilters.semester !== "all" && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-3 sm:mb-0">
            {SEMESTER_LABELS[currentFilters.semester]}
            <button
              type="button"
              onClick={() => updateFilter("semester", "all")}
              className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-red-200"
            >
              <X className="w-3" />
            </button>
          </span>
        )}
        {currentFilters.technique !== "all" && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3 sm:mb-0">
            {TECHNIQUE_LABELS[currentFilters.technique]}
            <button
              type="button"
              onClick={() => updateFilter("technique", "all")}
              className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200"
            >
              <X className="w-3" />
            </button>
          </span>
        )}
        {currentFilters.status !== "all" && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-3 sm:mb-0">
            {STATUS_LABELS[currentFilters.status]}
            <button
              type="button"
              onClick={() => updateFilter("status", "all")}
              className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-green-200"
            >
              <X className="w-3" />
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
