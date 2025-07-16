"use client";
import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewPageModal({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // ESC 키 처리
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden"; // 배경 스크롤 방지

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [router]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-cert-black/50  flex items-center justify-center p-4"
      onClick={() => router.back()}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content-wrapper max-h-[90vh] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
