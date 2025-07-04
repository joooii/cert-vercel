"use client";

import useTyping from "@/hooks/useTyping";

const TypingAnimation = () => {
  const typingText = "Computer Emergency Response Team";
  const { text } = useTyping(typingText);
  return (
    <div>
      <span className="animate-pulse text-gray-600 mr-1 text-2xl">
        {text}
        <span className={"animate-typing text-red-600"}>|</span>
      </span>
    </div>
  );
};
export default TypingAnimation;
