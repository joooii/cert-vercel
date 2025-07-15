import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToListButton from "@/components/board/detail/SCBackToListButton";
import { mockBoardData } from "@/mocks/mockBoardData";
import { mockBoardDetailData } from "@/mocks/mockBoardDetailData";
import { getCategoryColor } from "@/utils/boardUtils";
import DownloadButton from "@/components/board/detail/SCDownloadButton";
import {
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  Pin,
  Tag,
  Download,
} from "lucide-react";
import DefaultBadge from "@/components/ui/defaultBadge";

import KebabMenuButton from "@/components/board/detail/CCKebabMenu";
import LikeButton from "@/components/board/detail/CCLikeButton";
import BookmarkButton from "@/components/board/detail/CCBookmarkButton";
import PostShareButton from "@/components/board/detail/CCShareButton";

async function getDataById(id: string) {
  const postId = parseInt(id, 10);
  const basePost = mockBoardData.find((item) => item.id === postId);
  const detailPost = mockBoardDetailData.find((item) => item.id === postId);

  if (!basePost || !detailPost) {
    return null;
  }

  return {
    ...basePost,
    ...detailPost,
  };
}

// 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getDataById(params.id);

  if (!post) {
    return {
      title: "게시글을 찾을 수 없습니다",
      description: "요청하신 게시글을 찾을 수 없습니다.",
    };
  }

  return {
    title: `${post.title} - Security Board`,
    description: post.content.substring(0, 160) + "...",
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160) + "...",
      type: "article",
      authors: [post.author],
      tags: post.tags,
    },
  };
}

// 마크다운 렌더링 함수 (서버에서 처리)
function renderMarkdown(markdown: string) {
  return markdown
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-3">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-2">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /```([\s\S]*?)```/g,
      '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>'
    )
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-100 px-2 py-1 rounded">$1</code>'
    )
    .replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/\n/g, "<br>");
}

// 파일 아이콘 함수
function getFileIcon(type: string) {
  if (type.includes("pdf")) return "📄";
  if (type.includes("excel") || type.includes("spreadsheet")) return "📊";
  if (type.includes("word") || type.includes("document")) return "📝";
  if (type.includes("image")) return "🖼️";
  return "📎";
}

function PostContentRenderer({ content }: { content: string }) {
  return (
    <div
      className="leading-relaxed text-gray-900 prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getDataById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <BackToListButton currentUrl={"board"} />
      {/* 게시글 카드 */}
      <div className=" bg-white border border-gray-200 rounded-lg shadow-lg mt-6 ">
        {/* 게시글 헤더 */}
        <div className="p-6 pb-0">
          <div className="flex  items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {post.isNotice && <Pin className="w-4 h-4 text-cert-red" />}
              <DefaultBadge
                variant="outline"
                className={getCategoryColor(post.category)}
              >
                {post.category}
              </DefaultBadge>
            </div>
            <KebabMenuButton currentUrl={"board"} currentId={post.id} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-medium">
                  {post.authorInfo.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">
                      {post.author}
                    </span>
                    <DefaultBadge variant="outline" className="text-xs">
                      {post.authorInfo.role}
                    </DefaultBadge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 ">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views}
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {post.likes}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {post.comments}
              </div>
            </div>
          </div>
        </div>

        {/* 게시글 본문 */}
        <div className="p-6 ">
          {/* 태그 */}
          <div className="flex gap-2 mb-8 pt-6 border-t border-gray-300">
            {post.tags.map((tag) => (
              <DefaultBadge
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </DefaultBadge>
            ))}
          </div>

          {/* 마크다운 콘텐츠 (서버 컴포넌트) */}
          <div className="max-w-none mb-8">
            <PostContentRenderer content={post.detailContent} />
          </div>

          {/* 첨부파일 */}
          {post.attachments && post.attachments.length > 0 && (
            <div className="border-t border-gray-300 pt-6 mb-6">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-4 h-4" />
                첨부파일 ({post.attachments.length})
              </h4>
              <div className="space-y-3">
                {post.attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-2xl">{getFileIcon(file.type)}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                    {/* 파일 다운로드 버튼 (서버 컴포넌트) */}
                    <DownloadButton fileName={file.name} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-gray-300">
            <div className="flex gap-4">
              <LikeButton currentLikes={post.likes} />
              <BookmarkButton />
            </div>
            <PostShareButton />
          </div>
        </div>
      </div>
    </div>
  );
}
