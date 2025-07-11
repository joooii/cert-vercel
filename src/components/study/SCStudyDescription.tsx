"server-only";
import TerminalSVG from "/public/icons/terminal.svg";

export default function SCStudyDescription() {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-4">
        <TerminalSVG className="w-8 h-8 mr-4 text-red-500" />
        <h1 className="text-3xl font-bold text-gray-900">Study</h1>
      </div>
      <p className="text-gray-600 text-lg">
        보안 연구 자료와 학습 리소스를 공유하는 공간입니다.
      </p>
    </div>
  );
}
