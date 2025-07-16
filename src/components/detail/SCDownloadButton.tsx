import DefaultButton from "@/components/ui/defaultButton";
import { Download } from "lucide-react";
export default function DownloadButton({
  fileName,
  fileId,
}: {
  fileName: string;
  fileId?: string;
}) {
  return (
    <a href={`/api/download/${fileId || fileName}`} download>
      <DefaultButton variant="outline" size="sm">
        <Download className="w-4 h-4 mr-2" />
        다운로드
      </DefaultButton>
    </a>
  );
}
