import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChapterWithMoments } from "@/lib/types";
import { Clock, FileText, PenTool, Sparkles } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

const ChapterCard = ({
  chapter,
  date,
}: {
  chapter: ChapterWithMoments | null;
  date: string;
}) => {
  return (
    <Card className="w-full md:max-w-md hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-br from-background to-muted/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={`w-2 h-2 rounded-full ${
                chapter?.status === "published"
                  ? "bg-green-500"
                  : chapter?.status === "draft"
                    ? "bg-yellow-500"
                    : "bg-gray-400"
              }`}
            />
            <span className="text-xs font-medium capitalize px-2 py-1 rounded-full bg-muted">
              {chapter?.status || "draft"}
            </span>
          </div>
        </div>

        <CardTitle className="text-lg leading-relaxed">
          {chapter?.title || "Untitled Chapter"}
        </CardTitle>

        <CardDescription className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            <span className="text-xs">
              {chapter?.moments?.length || 0} moments
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span className="text-xs">
              {chapter?.createdAt
                ? format(new Date(chapter.createdAt), "h:mm a")
                : "Not started"}
            </span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-0">
        <Button className="w-full group" asChild>
          <Link
            href={`${chapter?.id ? `/my-chapters/write?id=${chapter?.id}` : `/my-chapters/write`}`}
            className="flex items-center gap-2"
          >
            <PenTool className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Continue Writing
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ChapterCard;
