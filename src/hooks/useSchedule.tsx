"use client";

import { ScheduleInfo } from "@/types/schedule";
import { useState } from "react";

export const useSchedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleInfo | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  // 30분 간격으로 시간 배열 생성 (09:00 ~ 22:00)
  const timeOptions = [];
  for (let hour = 9; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      timeOptions.push(timeString);
    }
  }
  return {
    selectedSchedule,
    setSelectedSchedule,
    selectedDate,
    setSelectedDate,
    timeOptions,
  };
};
