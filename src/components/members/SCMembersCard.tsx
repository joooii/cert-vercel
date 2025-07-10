import DefaultBadge from "@/components/ui/defaultBadge";
import { MembersDataType, MembersRoleCategoryType } from "@/types/members";
import Image from "next/image";
import GithubSVG from "@/icons/github.svg";
import EmailSVG from "@/icons/email.svg";
import LogoSVG from "@/icons/logo-white.svg";
interface MembersCardProps {
  members: MembersDataType;
}

export default function MembersCard({ members }: MembersCardProps) {
  const getRoleBadgeStyle = (role: MembersRoleCategoryType) => {
    switch (role) {
      case "회장":
        return "bg-cert-red/20 text-cert-dark-red border-cert-red";
      case "부회장":
        return "bg-orange-100 text-orange-800 border-orange-600";
      case "임원진":
        return "bg-blue-100 text-blue-800 border-blue-600";
      case "스터디장":
        return "bg-purple-100 text-purple-800 border-purple-600";
      default:
        return "bg-gray-100 text-gray-800 border-gray-600";
    }
  };

  const getRoleBorderstyle = (role: MembersRoleCategoryType) => {
    switch (role) {
      case "회장":
        return "hover:border-cert-red group-hover:border-cert-red";
      case "부회장":
        return "hover:border-orange-600 group-hover:border-orange-600";
      case "임원진":
        return "hover:border-blue-600 group-hover:border-blue-600";
      case "스터디장":
        return "hover:border-purple-600 group-hover:border-purple-600";
      default:
        return "hover:border-gray-600 group-hover:border-gray-600";
    }
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 group ${getRoleBorderstyle(
        members.role
      )} flex flex-col h-full `}
    >
      <div className="flex-1">
        <div className="text-center mb-4">
          <div
            className={`relative mb-4 w-25 h-25 mx-auto rounded-full border-2 border-gray-200 flex items-center justify-center text-lg font-medium text-gray-600 transition-colors ${getRoleBorderstyle(
              members.role
            )}`}
          >
            {members.profileImage ? (
              <Image
                src={members.profileImage}
                alt={`${members.name} 프로필`}
                width={80}
                height={80}
                priority={false}
              />
            ) : (
              <div>{members.name}</div>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {members.name}
          </h3>

          <DefaultBadge
            variant="outline"
            className={getRoleBadgeStyle(members.role)}
          >
            {members.role}
          </DefaultBadge>

          <div className="mt-2 text-sm text-gray-500">
            <p>
              {members.grade}학년 • {members.major}
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 mb-4 text-sm leading-relaxed">
          {members.bio}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-1">
            {members.skills?.map((skill) => (
              <DefaultBadge
                key={skill}
                variant="outline"
                className="text-xs bg-gray-100 text-gray-600 border-gray-200"
              >
                {skill}
              </DefaultBadge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 pt-4 border-t border-gray-100 mt-auto">
        <button className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-cert-red transition-colors">
          <EmailSVG className="w-4 h-4" />
        </button>
        {members.github && (
          <button className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-cert-red transition-colors">
            <GithubSVG className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
