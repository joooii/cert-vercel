"use server";

import { revalidatePath } from "next/cache";

/**
 * 스터디 참가 서버 액션
 */
export async function joinStudy(formData: FormData) {
  const studyId = formData.get("studyId") as string;

  if (!studyId) {
    throw new Error("Study ID is required");
  }

  try {
    // 실제 참가 로직 구현
    // 예: await db.studyParticipant.create({ data: { studyId, userId } });
    console.log(`Joining study with id: ${studyId}`);

    // 성공 후 페이지 재검증
    revalidatePath("/study");
  } catch (error) {
    console.error("Failed to join study:", error);
    // 에러 처리 로직
    throw new Error("스터디 참가에 실패했습니다.");
  }
}
