import Link from "next/link";
import DefaultButton from "@/components/ui/defaultButton";
import { ArrowLeft } from "lucide-react";

interface BackToListButtonProp {
  currentUrl: string;
}
export default function BackToListButton({ currentUrl }: BackToListButtonProp) {
  return (
    <Link href={`/${currentUrl}`}>
      <DefaultButton variant="outline" className="shadow-sm">
        <ArrowLeft className="w-4 h-4 mr-2" />
        목록으로 돌아가기
      </DefaultButton>
    </Link>
  );
}
