"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { membersRoleCategories } from "@/types/members";
import MembersDropdown from "@/components/members/CCMembersDropdown";

const roleOptions = [
  { value: "", label: "전체" },
  ...membersRoleCategories.map((role) => ({
    value: role,
    label: role,
  })),
];

export default function MembersRoleDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentRole = searchParams.get("role") || "";

  const handleRoleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("role", value);
    } else {
      params.delete("role");
    }

    startTransition(() => {
      router.push(`/members?${params.toString()}`);
    });
  };

  return (
    <MembersDropdown
      value={currentRole}
      onValueChange={handleRoleChange}
      options={roleOptions}
      placeholder="직책"
      className="w-32"
      disabled={isPending}
    />
  );
}
