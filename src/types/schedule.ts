export interface ScheduleInfo {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  type: "meeting" | "workshop" | "study" | "conference";
}
