"use client";
import { useState } from "react";
import DefaultButton from "@/components/ui/defaultButton";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  currentLikes: number;
}

export default function LikeButton({ currentLikes }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(currentLikes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    // API 호출: await fetch(`/api/posts/${postId}/like`...
  };

  return (
    <DefaultButton
      variant="outline"
      size="sm"
      onClick={handleLike}
      className={`${
        isLiked ? "text-cert-red " : ""
      } border-0 hover:bg-white hover:text-cert-red`}
    >
      <Heart
        className={`w-4 h-4 mr-2 ${
          isLiked ? "fill-cert-red text-cert-red" : ""
        } `}
      />
      좋아요 {likes}
    </DefaultButton>
  );
}
