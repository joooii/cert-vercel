"use server";

export async function downloadFile(formData: FormData) {
  const fileName = formData.get("fileName") as string;
  const studyId = formData.get("studyId") as string;

  if (!fileName || !studyId) {
    throw new Error("File name and study ID are required");
  }

  try {
    // 실제 파일 다운로드 로직 구현
    // 예: 파일 경로 생성, 권한 확인, 다운로드 처리
    console.log(`Downloading file: ${fileName} from study: ${studyId}`);

    // 파일 다운로드 처리
    // return fileStream 또는 redirect to file URL
  } catch (error) {
    console.error("Failed to download file:", error);
    throw new Error("파일 다운로드에 실패했습니다.");
  }
}
