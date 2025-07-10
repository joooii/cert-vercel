"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { membersGradeCategories } from "@/types/members";
import MembersDropdown from "@/components/members/CCMembersDropdown";

const gradeOptions = [
  { value: "", label: "전체" },
  ...membersGradeCategories.map((grade) => ({
    value: grade.toString(),
    label: `${grade}학년`,
  })),
];

export default function MembersGradeDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentGrade = searchParams.get("grade") || "";

  const handleGradeChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("grade", value);
    } else {
      params.delete("grade");
    }

    startTransition(() => {
      router.push(`/members?${params.toString()}`);
    });
  };

  return (
    <MembersDropdown
      value={currentGrade}
      onValueChange={handleGradeChange}
      options={gradeOptions}
      placeholder="학년"
      className="w-32"
      disabled={isPending}
    />
  );
}
