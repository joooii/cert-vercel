"use client";
import { useState } from "react";
import DefaultButton from "@/components/ui/defaultButton";
import { Bookmark } from "lucide-react";

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = async () => {
    setIsBookmarked(!isBookmarked);
    // API 호출: await fetch(`/api/bookmarks`, { method: 'POST', body: JSON.stringify({postId}) })
  };

  return (
    <DefaultButton
      variant="outline"
      size="sm"
      onClick={handleBookmark}
      className={
        isBookmarked ? "bg-yellow-50 text-yellow-600 border-yellow-200" : ""
      }
    >
      <Bookmark className="w-4 h-4 mr-2" />
      북마크
    </DefaultButton>
  );
}
