"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DefaultButton from "@/components/ui/defaultButton";
import { MoreVertical, Edit, Flag, Trash2 } from "lucide-react";

interface KebobMenuProps {
  currentId: number;
  currentUrl: string;
}

export default function KebobMenu({ currentId, currentUrl }: KebobMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // API 호출: await fetch(`/api/posts/${postId}`, { method: 'DELETE' })
      router.push(`/${currentUrl}`);
    }
  };

  const handleReport = () => {
    alert("신고");
  };

  const handleEdit = () => {
    router.push(`/${currentUrl}/${currentId}/edit`);
  };

  return (
    <div className="relative">
      <DefaultButton
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreVertical className="w-4 h-4" />
      </DefaultButton>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-1">
            <button
              onClick={handleEdit}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2 no-underline text-gray-700"
            >
              <Edit className="w-4 h-4" />
              수정
            </button>
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
