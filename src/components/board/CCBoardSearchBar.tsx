"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DefaultSearchBar from "@/components/ui/defaultSearchBar";
import SearchSVG from "@/icons/search.svg";

interface BoardSearchBarProps {
  initialValue: string;
}

export default function BoardSearchBar({ initialValue }: BoardSearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>(initialValue);
  const prevSearchInput = useRef<string>(searchInput);

  useEffect(() => {
    setSearchInput(initialValue);
  }, [initialValue]);

  // 디바운싱 처리
  useEffect(() => {
    if (prevSearchInput.current === searchInput) return;
    prevSearchInput.current = searchInput;

    const debounceTimer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (searchInput) {
        params.set("title", searchInput);
      } else {
        params.delete("title");
      }
      params.delete("page"); // 검색 시 첫 페이지로

      const queryString = params.toString();
      const newUrl = queryString ? `/board?${queryString}` : "/board";
      router.push(newUrl);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchInput, router, searchParams]);

  return (
    <div className="relative flex-1">
      <SearchSVG className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <DefaultSearchBar
        placeholder="정보를 검색하세요..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-cert-red"
      />
    </div>
  );
}
