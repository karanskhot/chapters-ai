"use server";

import { db } from "@/lib/db";
import { ChapterWithMoments } from "@/lib/types";
import { is_user_valid } from "@/lib/validateUser";
import { startOfDay, endOfDay } from "date-fns";

export const get_chapter_for_today =
  async (): Promise<ChapterWithMoments | null> => {
    const userId = await is_user_valid();
    const today = new Date();
    try {
      const chapter_today = await db.chapter.findFirst({
        where: {
          userId,
          createdAt: {
            lte: endOfDay(today),
            gte: startOfDay(today),
          },
        },
        include: {
          moments: true,
        },
      });
      return chapter_today;
    } catch (error) {
      console.log(`error : ${error}`);
      throw Error("something went wrong...");
    }
  };
