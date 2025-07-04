"use client";

import { useEffect, useState, useRef } from "react";

const useTyping = (content: string) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 3000; // 타이핑 후 대기 시간 (3초)

    if (!isDeleting && count === content.length) {
      // 타이핑 완료 후 pauseDuration 대기 후 삭제 시작
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeoutRef.current!);
    }

    timeoutRef.current = setTimeout(
      () => {
        if (!isDeleting) {
          setText((prev) => prev + content[count]);
          setCount((prev) => prev + 1);
        } else {
          if (count > 0) {
            setText((prev) => prev.slice(0, -1));
            setCount((prev) => prev - 1);
          } else {
            setIsDeleting(false); // 다시 타이핑 시작
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeoutRef.current!);
  }, [count, isDeleting, content]);

  return { text, isDeleting };
};

export default useTyping;
