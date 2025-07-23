"use server";

import { redirect } from "next/navigation";

export async function signupAction(formData: FormData) {
  const name = formData.get("name") as string;
  const id = formData.get("id") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const studentId = formData.get("studentId") as string;

  // 유효성 검사 예시
  if (!name || !id || !password || !confirmPassword || !studentId) {
    throw new Error("모든 항목을 입력해주세요.");
  }
  if (studentId.length !== 9) {
    throw new Error("전체 학번을 입력해주세요.");
  }

  if (password !== confirmPassword) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  if (password.length < 8) {
    throw new Error("비밀번호는 최소 8자 이상이어야 합니다.");
  }

  // 실제 가입 로직: DB 저장, 중복 체크 등
  redirect("/login");
}
