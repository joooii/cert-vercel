"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DefaultButton from "@/components/ui/defaultButton";
import { MoreVertical, Edit, Flag, Trash2 } from "lucide-react";

interface PostActionMenuProps {
  postId: number;
}

export default function PostActionMenu({ postId }: PostActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // API 호출: await fetch(`/api/posts/${postId}`, { method: 'DELETE' })
      console.log(`게시글 ${postId} 삭제`);
      router.push("/board");
    }
  };

  const handleReport = () => {
    // 신고 모달 열기
    alert("신고 기능이 실행됩니다.");
  };

  return (
    <div className="relative">
      <DefaultButton
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreVertical className="w-4 h-4" />
      </DefaultButton>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-1">
            <a
              href={`/board/${postId}/edit`}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2 no-underline text-gray-700"
            >
              <Edit className="w-4 h-4" />
              수정
            </a>
            <button
              onClick={handleReport}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2"
            >
              <Flag className="w-4 h-4" />
              신고
            </button>
            <hr className="my-1" />
            <button
              onClick={handleDelete}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2 text-red-600"
            >
              <Trash2 className="w-4 h-4" />
              삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
