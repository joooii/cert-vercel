export const mockScheduleData = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return [
    {
      id: 1,
      title: "보안 세미나",
      date: new Date(currentYear, currentMonth, 5).toISOString().split("T")[0],
      startTime: "14:00",
      endTime: "16:00",
      location: "동아리방",
      type: "workshop" as const,
    },
    {
      id: 7,
      title: "보안 세미나2",
      date: new Date(currentYear, currentMonth, 5).toISOString().split("T")[0],
      startTime: "14:00",
      endTime: "16:00",
      location: "동아리방",
      type: "workshop" as const,
    },
    {
      id: 2,
      title: "CTF 대회",
      date: new Date(currentYear, currentMonth, 12).toISOString().split("T")[0],
      startTime: "10:00",
      endTime: "18:00",
      location: "컨퍼런스룸",

      type: "conference" as const,
    },
    {
      id: 3,
      title: "정기 모임",
      date: new Date(currentYear, currentMonth, 18).toISOString().split("T")[0],
      startTime: "19:00",
      endTime: "21:00",
      location: "보안랩 B",
      type: "meeting" as const,
    },
    {
      id: 4,
      title: "해킹 실습",
      date: new Date(currentYear, currentMonth, 25).toISOString().split("T")[0],
      startTime: "15:00",
      endTime: "18:00",
      location: "보안랩 A",
      type: "study" as const,
    },
    {
      id: 5,
      title: "암호학 스터디",
      date: new Date(currentYear, currentMonth, today.getDate() + 3)
        .toISOString()
        .split("T")[0],
      startTime: "18:00",
      endTime: "20:00",
      location: "동아리방",
      type: "study" as const,
    },
    {
      id: 6,
      title: "포렌식 워크샵",
      date: new Date(currentYear, currentMonth, today.getDate() + 7)
        .toISOString()
        .split("T")[0],
      startTime: "13:00",
      endTime: "17:00",
      location: "보안랩 A",
      type: "workshop" as const,
    },
  ];
};
