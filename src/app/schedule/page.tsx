import CCAddScheduleCard from "@/components/schedule/CCAddScheduleCard";
import SCScheduleContent from "@/components/schedule/SCScheduleContent";
import SCScheduleInfo from "@/components/schedule/SCScheduleInfo";
import SCScheduleList from "@/components/schedule/SCScheduleList";
import Calendar from "@/components/schedule/calendar";

interface Props {
  searchParams: {
    date?: string;
  };
}

export default async function SchedulePage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const selectedDate = resolvedSearchParams?.date || null;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SCScheduleContent />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Calendar />
          </div>
          <div>
            <CCAddScheduleCard />
            <SCScheduleInfo selectedDate={selectedDate} />
          </div>
        </div>
        <SCScheduleList />
      </div>
    </div>
  );
}
