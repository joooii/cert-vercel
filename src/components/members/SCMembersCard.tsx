import DefaultBadge from "@/components/ui/defaultBadge";
import { MembersDataType, MembersRoleCategoryType } from "@/types/members";
import Image from "next/image";
import GithubSVG from "@/icons/github.svg";
import EmailSVG from "@/icons/email.svg";

interface MembersCardProps {
  members: MembersDataType;
}

export default function MembersCard({ members }: MembersCardProps) {
  const getRoleStyle = (role: MembersRoleCategoryType) => {
    switch (role) {
      case "회장":
        return "bg-cert-red/10 text-cert-red border-cert-red/20";
      case "부회장":
        return "bg-orange-50 text-orange-600 border-orange-200";
      case "임원진":
        return "bg-blue-50 text-blue-600 border-blue-200";
      case "스터디장":
        return "bg-purple-50 text-purple-600 border-purple-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  // 이름에서 이니셜 생성
  const getInitials = (name: string) => {
    return name.length >= 2 ? name.slice(0, 2) : name;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-cert-red/30 group">
      {/* Profile Image & Basic Info */}
      <div className="text-center mb-4">
        <div className="relative mb-4">
          {members.profileImage ? (
            <Image
              src={members.profileImage}
              alt={`${members.name} 프로필`}
              width={80}
              height={80}
              className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-gray-200 group-hover:border-cert-red/30 transition-colors"
              priority={false}
            />
          ) : (
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-lg font-medium text-gray-600 group-hover:border-cert-red/30 transition-colors">
              {getInitials(members.name)}
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {members.name}
        </h3>

        <DefaultBadge variant="outline" className={getRoleStyle(members.role)}>
          {members.role}
        </DefaultBadge>

        <div className="mt-2 text-sm text-gray-500">
          <p>
            {members.grade}학년 • {members.major}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-center text-gray-600 mb-4 text-sm leading-relaxed">
        {members.bio}
      </p>

      {/* Skills */}
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

      {/* Contact */}
      <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
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
