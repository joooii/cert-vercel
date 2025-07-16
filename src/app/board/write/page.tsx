import BackToListButton from "@/components/detail/SCBackToListButton";
import WriteForm from "@/components/write/CCWriteForm";
export default function BoardWrtiePage() {
  return (
    <div className="space-y-6">
      <BackToListButton currentUrl="board" />

      <div className="bg-white border border-gray-200 rounded-lg shadow-lg mt-6">
        <div className="p-6 ">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            새 게시글 작성
          </h1>
          <p className="text-gray-600">
            보안 관련 정보나 공지사항을 공유해주세요.
          </p>
          <div className="border-t border-gray-300 mb-5 mt-5"></div>
          <WriteForm type="board" />
        </div>
      </div>
    </div>
  );
}
