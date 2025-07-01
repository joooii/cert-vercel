"use client";

import { useEffect, useState } from "react";

const useTyping = (content: string) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // 타이핑 중
          if (count < content.length) {
            setText((prev) => prev + content[count]);
            setCount((prev) => prev + 1);
          } else {
            setIsDeleting(true); // 타이핑 끝 → 삭제 시작
          }
        } else {
          // 삭제 중
          if (count > 0) {
            setText((prev) => prev.slice(0, -1));
            setCount((prev) => prev - 1);
          } else {
            setIsDeleting(false); // 삭제 끝 → 다시 타이핑 시작
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, count, content]);

  return { text, isDeleting };
};

export default useTyping;
