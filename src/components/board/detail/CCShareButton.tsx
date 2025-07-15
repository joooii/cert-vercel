"use client";
import DefaultButton from "@/components/ui/defaultButton";
import { Share2 } from "lucide-react";

export default function PostShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (error) {
        console.log("공유 취소됨");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 클립보드에 복사되었습니다!");
    }
  };

  return (
    <DefaultButton variant="outline" size="sm" onClick={handleShare}>
      <Share2 className="w-4 h-4 mr-2" />
      공유하기
    </DefaultButton>
  );
}
