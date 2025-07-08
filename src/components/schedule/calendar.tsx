// "use client";

// import { useCallback, useMemo, useState } from "react";
// import AngleSVG from "@/icons/angle.svg";
// import { mockScheduleData } from "@/mocks/mockScheduleData";
// import {
//   DAY_NAMES,
//   formatDateString,
//   formatKoreanDate,
//   generateCalendarDays,
//   getScheduleByDate,
//   getTypeColor,
// } from "@/utils/scheduleUtils";
// import { useSearchParams, useRouter } from "next/navigation";

// export default function Calendar() {
//   const router = useRouter();
//   const currentParams = useSearchParams();

//   const handleDateClick = useCallback(
//     (date: Date) => {
//       const selected = formatDateString(date);
//       const params = new URLSearchParams(currentParams);
//       if (params.get("date") !== selected) {
//         params.set("date", selected);
//         router.replace(`?${params.toString()}`);
//       }
//     },
//     [currentParams, router]
//   );

//   const [currentDate, setCurrentDate] = useState(new Date());
//   const today = useMemo(() => new Date(), []);
//   const schedules = useMemo(() => mockScheduleData(), []);
//   const days = useMemo(() => generateCalendarDays(currentDate), [currentDate]);

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const date = currentDate.getDate();

//   const prevMonth = useCallback(() => {
//     setCurrentDate(new Date(year, month - 1, date));
//   }, [year, month, date]);

//   const nextMonth = useCallback(() => {
//     setCurrentDate(new Date(year, month + 1, date));
//   }, [year, month, date]);

//   return (
//     <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
//       <div className="flex items-center justify-between mb-4 p-2">
//         <h3 className="text-xl font-semibold text-gray-900">
//           {formatKoreanDate(currentDate, true)}
//         </h3>
//         <div>
//           <button
//             onClick={prevMonth}
//             className="text-gray-600 p-3 rounded-md hover:text-gray-900 hover:bg-gray-100 mr-3"
//           >
//             <AngleSVG className="rotate-90" width={13} />
//           </button>
//           <button
//             onClick={nextMonth}
//             className="text-gray-600 p-3 rounded-md hover:text-gray-900 hover:bg-gray-100"
//           >
//             <AngleSVG className="rotate-270" width={13} />
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 gap-1 mb-2">
//         {DAY_NAMES.map((day) => (
//           <div
//             key={day}
//             className="text-center text-xs font-medium text-gray-600 p-2"
//           >
//             {day}
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 gap-1">
//         {days.map((day, index) => {
//           const isToday = day.toDateString() === today.toDateString();
//           const isCurrentMonth = day.getMonth() === month;
//           const schedule = getScheduleByDate(day, schedules);

//           return (
//             <div
//               key={index}
//               onClick={() => handleDateClick(day)}
//               className={`relative min-h-[5.5rem] p-2 border border-gray-100 cursor-pointer transition-all duration-200 hover:bg-gray-100
//                 ${
//                   isCurrentMonth
//                     ? "text-gray-900 bg-white"
//                     : "text-gray-400 text-xs"
//                 }
//                 ${isToday ? "text-red-700 border" : ""}
//                 ${
//                   schedule
//                     ? "border bg-gray-300/10 border-cert-dark-red-20"
//                     : "hover:bg-gray-100"
//                 }
//               `}
//               title={schedule[0]?.title}
//             >
//               <div>{day.getDate()}</div>
//               {schedule.length > 0 && (
//                 <div
//                   className={`text-xs mt-1 text-center rounded-sm p-1 ${getTypeColor(
//                     schedule[0].type
//                   )}`}
//                 >
//                   <span className="whitespace-pre-line">
//                     {schedule.length === 1
//                       ? schedule[0].title
//                       : `${schedule[0].title}\n외 ${schedule.length - 1}개`}
//                   </span>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import { useCallback, useMemo, useState } from "react";
import AngleSVG from "@/icons/angle.svg";
import { mockScheduleData } from "@/mocks/mockScheduleData";
import {
  DAY_NAMES,
  formatDateString,
  formatKoreanDate,
  generateCalendarDays,
  getScheduleByDate,
  getTypeColor,
} from "@/utils/scheduleUtils";
import { useSearchParams, useRouter } from "next/navigation";

export default function Calendar() {
  const router = useRouter();
  const currentParams = useSearchParams();

  const handleDateClick = useCallback(
    (date: Date) => {
      const selected = formatDateString(date);
      const params = new URLSearchParams(currentParams);
      if (params.get("date") !== selected) {
        params.set("date", selected);
        router.replace(`?${params.toString()}`);
      }
    },
    [currentParams, router]
  );

  const [currentDate, setCurrentDate] = useState(new Date());
  const today = useMemo(() => new Date(), []);
  const schedules = useMemo(() => mockScheduleData(), []);
  const days = useMemo(() => generateCalendarDays(currentDate), [currentDate]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, date));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, date));
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4 p-2">
        <h3 className="text-xl font-semibold text-gray-900">
          {formatKoreanDate(currentDate, true)}
        </h3>
        <div>
          <button
            onClick={prevMonth}
            className="text-gray-600 p-3 rounded-md hover:text-gray-900 hover:bg-gray-100 mr-3"
          >
            <AngleSVG className="rotate-90" width={13} />
          </button>
          <button
            onClick={nextMonth}
            className="text-gray-600 p-3 rounded-md hover:text-gray-900 hover:bg-gray-100"
          >
            <AngleSVG className="rotate-270" width={13} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_NAMES.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-600 p-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isToday = day.toDateString() === today.toDateString();
          const isCurrentMonth = day.getMonth() === month;
          const schedule = getScheduleByDate(day, schedules);

          return (
            <div
              key={index}
              onClick={() => handleDateClick(day)}
              className={`relative min-h-[5.5rem] p-2 border border-gray-100 cursor-pointer transition-all duration-200 hover:bg-gray-100
                ${
                  isCurrentMonth
                    ? "text-gray-900 bg-white"
                    : "text-gray-400 text-xs"
                }
                ${isToday ? "text-red-700 border" : ""}
                ${
                  schedule
                    ? "border bg-gray-300/10 border-cert-dark-red-20"
                    : "hover:bg-gray-100"
                }
              `}
              title={schedule[0]?.title}
            >
              <div>{day.getDate()}</div>
              {schedule.length > 0 && (
                <div
                  className={`text-xs mt-1 text-center rounded-sm p-1 ${getTypeColor(
                    schedule[0].type
                  )}`}
                >
                  <span className="whitespace-pre-line">
                    {schedule.length === 1
                      ? schedule[0].title
                      : `${schedule[0].title}\n외 ${schedule.length - 1}개`}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
