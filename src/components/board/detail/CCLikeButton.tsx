"use client";
import { useState } from "react";
import DefaultButton from "@/components/ui/defaultButton";
import { Heart } from "lucide-react";

interface PostLikeButtonProps {
  postId: number;
  initialLikes: number;
}

export default function PostLikeButton({
  postId,
  initialLikes,
}: PostLikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = async () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    // API 호출: await fetch(`/api/posts/${postId}/like`, { method: 'POST' })
  };

  return (
    <DefaultButton
      variant="outline"
      size="sm"
      onClick={handleLike}
      className={isLiked ? "bg-cert-red text-white border-cert-red" : ""}
    >
      <Heart className="w-4 h-4 mr-2" />
      좋아요 {likes}
    </DefaultButton>
  );
}
