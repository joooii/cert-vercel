import PageLayout from "@/layouts/pageLayout";
import ShieldSVG from "/public/icons/shield.svg";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageLayout
        title={"Profile"}
        description={"개인 정보와 활동 내역을 관리하세요."}
        icon={<ShieldSVG />}
      >
        {children}
      </PageLayout>
    </div>
  );
}
