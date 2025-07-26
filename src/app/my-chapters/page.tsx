import { get_chapter_for_today } from "@/actions/chapters";
import Welcome from "./_components/Welcome";
import TodaySection from "./_components/TodaySection";

const MyChapters = async () => {
  const chapter_today = await get_chapter_for_today();
  console.log(chapter_today);

  return (
    <div className="flex flex-col gap-4">
      <Welcome />
      <TodaySection chapter_today={chapter_today} />
    </div>
  );
};
export default MyChapters;
