// components/ui/ConfirmModal.tsx
"use client";
import { useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";
import DefaultButton from "@/components/ui/defaultButton";

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText: string;
  cancelText: string;
}

export default function ConfirmModal({
  isOpen,
  title = "확인",
  message,
  onConfirm,
  onCancel,
  confirmText = "예",
  cancelText = "아니오",
}: ConfirmModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // 모달 열릴 때 스크롤 방지
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 bg-opacity-50 transition-opacity"
        onClick={onCancel}
      />

      <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-cert-dark-red/20 rounded-full">
          <AlertTriangle className="w-6 h-6 text-cert-red" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 text-center mb-6">{message}</p>
        <div className="flex items-center justify-center gap-3">
          <DefaultButton
            variant="outline"
            onClick={onCancel}
            className="px-4 py-2 min-w-[80px]"
          >
            {cancelText}
          </DefaultButton>
          <DefaultButton
            variant={"default"}
            onClick={onConfirm}
            className="px-4 py-2 min-w-[80px]"
          >
            {confirmText}
          </DefaultButton>
        </div>
      </div>
    </div>
  );
}
