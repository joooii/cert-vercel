"server-only";

import ScheduleSVG from "@/icons/schedule.svg";

export default function SCScheduleContent() {
  return (
    <div className="mb-12">
      <div className="flex gap-3 mb-4 flex-col">
        <div className="flex flex-row">
          <ScheduleSVG width={32} className="stroke-cert-dark-red" />
          <p className="text-3xl font-bold text-gray-900 ml-3">Schedule</p>
        </div>
        <p className="text-gray-500">동아리 일정을 관리하는 공간입니다.</p>
      </div>
    </div>
  );
}
