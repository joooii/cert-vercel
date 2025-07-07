"use client";

import { ScheduleInfo } from "@/types/schedule";
import { useState } from "react";

export default function useSchedule() {
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleInfo | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  return {
    selectedSchedule,
    setSelectedSchedule,
    selectedDate,
    setSelectedDate,
  };
}
