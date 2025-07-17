"use client";
import { useState } from "react";
import DefaultButton from "@/components/ui/defaultButton";
import { Bookmark } from "lucide-react";

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // API 호출: await fetch(`/api/bookmarks`.....
  };

  return (
    <DefaultButton
      variant="outline"
      size="sm"
      onClick={handleBookmark}
      className={`${
        isBookmarked ? "text-cert-red " : ""
      } border-0 hover:bg-white hover:text-cert-red`}
    >
      <Bookmark className="h-4 w-4 mr-2" />
      북마크
    </DefaultButton>
  );
}
