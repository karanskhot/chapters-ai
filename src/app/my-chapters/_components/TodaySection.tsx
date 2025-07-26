"use client";

import { ChapterWithMoments } from "@/lib/types";
import ChapterCard from "../../../components/common/ChapterCard";
import StartNewChapterCard from "./StartNewChapterCard";
import { format } from "date-fns";

const TodaySection = ({
  chapter_today,
}: {
  chapter_today: ChapterWithMoments | null;
}) => {
  const today = format(new Date(), "EEEE, MMMM do, yyyy");
  return (
    <div className="py-4">
      {chapter_today ? (
        <ChapterCard chapter={chapter_today} date={today} />
      ) : (
        <StartNewChapterCard date={today} />
      )}
    </div>
  );
};
export default TodaySection;
