import MembersCardList from "@/components/members/SCMembersCardList";
import MembersSearchBar from "@/components/members/CCMembersSearchBar";
import MembersGradeDropdown from "@/components/members/CCMembersGradeDown";
import MembersRoleDropdown from "@/components/members/CCMembersRoleDropDown";
import { mockMembersData } from "@/mocks/mockMembersData";

interface MembersPageProps {
  searchParams: Promise<{
    role?: string;
    search?: string;
    grade?: string;
  }>;
}

export default async function MembersPage({ searchParams }: MembersPageProps) {
  const { role, search, grade } = await searchParams;

  const currentRole = role || "";
  const currentSearch = search || "";
  const currentGrade = grade || "";

  const filteredMembers = mockMembersData.filter((member) => {
    const matchedSearch =
      currentSearch === "" ||
      member.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      member.major.toLowerCase().includes(currentSearch.toLowerCase()) ||
      member.skills?.some((skill) =>
        skill.toLowerCase().includes(currentSearch.toLowerCase())
      );

    const matchedRole = (() => {
      if (!currentRole || currentRole === "") return true;

      switch (currentRole) {
        case "회장":
          return member.role === "회장";
        case "부회장":
          return member.role === "부회장";
        case "임원진":
          return ["회장", "부회장", "임원진"].includes(member.role);
        case "스터디장":
          return member.role === "스터디장";
        case "회원":
          return member.role === "회원";
        default:
          return true;
      }
    })();

    const matchedGrade =
      currentGrade === "" || member.grade.toString() === currentGrade;

    return matchedSearch && matchedRole && matchedGrade;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <MembersSearchBar currentSearch={currentSearch} />
        <div className="flex gap-2 flex-wrap">
          <MembersGradeDropdown />
          <MembersRoleDropdown />
        </div>
      </div>

      {/* Members List */}
      <MembersCardList members={filteredMembers} />
    </div>
  );
}
