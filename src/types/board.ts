export const boardCategories = [
  "전체",
  "공지사항",
  "보안이슈",
  "기술자료",
  "스터디",
  "프로젝트",
] as const;

export type BoardCategoryType = (typeof boardCategories)[number];

export const boardPriorities = ["high", "medium", "low"] as const;

export type BoardPriorityType = (typeof boardPriorities)[number];

export interface BoardDataType {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: BoardCategoryType;
  views: number;
  likes: number;
  comments: number;
  isNotice: boolean;
  priority: BoardPriorityType;
}
