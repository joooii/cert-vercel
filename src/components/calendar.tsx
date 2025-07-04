"use client";

import { useState } from "react";
import AngleSVG from "@/icons/angle.svg";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const current = new Date(startDate);

  while (current <= lastDay || days.length % 7 !== 0) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  // 동적 이벤트 생성 - 현재 달 기준
  const events = {
    [new Date(year, month, 5).toDateString()]: "보안 세미나",
    [new Date(year, month, 12).toDateString()]: "CTF 대회",
  };

  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="text-gray-600 p-2 rounded-md hover:text-gray-900 hover:bg-gray-100"
        >
          <AngleSVG className="rotate-90" width={13} />
        </button>
        <h3 className="text-lg font-semibold text-gray-900">
          {year}년 {monthNames[month]}
        </h3>
        <button
          onClick={nextMonth}
          className="text-gray-600 p-2 rounded-md hover:text-gray-900 hover:bg-gray-100"
        >
          <AngleSVG className="rotate-270" width={13} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
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
          const hasEvent = events[day.toDateString()];

          return (
            <div
              key={index}
              className={`
                relative p-2 text-center text-sm rounded cursor-pointer
                ${isCurrentMonth ? "text-gray-900" : "text-gray-400"}
                ${isToday ? "text-white font-bold bg-cert-dark-red" : ""}
                ${!isToday && !hasEvent ? "hover:bg-gray-100" : ""}
                ${
                  hasEvent
                    ? "border bg-cert-dark-red-5 border-cert-dark-red-20"
                    : ""
                }
                `}
              title={hasEvent}
            >
              {day.getDate()}
              {hasEvent && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-cert-dark-red"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Calendar;
