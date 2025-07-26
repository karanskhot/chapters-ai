import { Chapter, Moment } from "@prisma/client";

export type ChapterWithMoments = Chapter & {
  moments: Moment[];
};
