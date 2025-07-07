export const getTypeLabel = (type: string) => {
  switch (type) {
    case "meeting":
      return "회의";
    case "workshop":
      return "정기 모임";
    case "study":
      return "스터디";
    case "conference":
      return "컨퍼런스";
    default:
      return "기타";
  }
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "bg-purple-50 text-purple-600 border-purple-200";
    case "workshop":
      return "bg-red-50 text-red-600 border-red-200";
    case "study":
      return "bg-blue-50 text-blue-600 border-blue-200";
    case "conference":
      return "bg-green-50 text-green-600 border-green-200";
    default:
      return "bg-gray-50 text-gray-600 border-gray-200";
  }
};

/**
 * 날짜 상수들
 */
export const MONTH_NAMES = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];

/**
 * 날짜를 YYYY-MM-DD 형태의 문자열로 변환
 */
export const formatDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * 날짜를 한국어 형태로 포맷팅
 * @param date - Date 객체 또는 날짜 문자열
 * @param includeYear - 연도 포함 여부 (기본값: false)
 * @returns 포맷팅된 한국어 날짜 문자열
 */
export const formatKoreanDate = (
  date: Date | string,
  includeYear: boolean = false
): string => {
  const d = typeof date === "string" ? new Date(date) : date;
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const dayOfWeek = DAY_NAMES[d.getDay()];

  if (includeYear) {
    return `${year}년 ${MONTH_NAMES[d.getMonth()]} ${day}일 ${dayOfWeek}요일`;
  }

  return `${month}월 ${day}일 ${dayOfWeek}요일`;
};

/**
 * 캘린더에 표시할 날짜 배열 생성
 */
export const generateCalendarDays = (currentDate: Date): Date[] => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days: Date[] = [];
  const current = new Date(startDate);

  while (current <= lastDay || days.length % 7 !== 0) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return days;
};

/**
 * 특정 날짜의 예약 정보를 찾는 함수
 */
export const getReservationByDate = (targetDate: Date, reservations: any[]) => {
  const target = formatDateString(targetDate);
  return reservations.find((r) => r.date === target);
};
