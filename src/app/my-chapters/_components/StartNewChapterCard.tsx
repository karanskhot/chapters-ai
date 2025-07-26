import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PenTool, Sparkles } from "lucide-react";

import Link from "next/link";

const StartNewChapterCard = ({ date }: { date: string }) => {
  return (
    <Card className="md:max-w-md w-full hover:shadow-lg transition-all duration-300 border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 bg-gradient-to-br from-background to-muted/10">
      <CardHeader className="text-center py-8">
        <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
          <PenTool className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-lg text-muted-foreground">
          Ready to start today's chapter?
        </CardTitle>
        <CardDescription className="text-sm">{date}</CardDescription>
      </CardHeader>

      <CardFooter className="pt-0">
        <Button className="w-full group" asChild>
          <Link href="/my-chapters/write" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Start New Chapter
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default StartNewChapterCard;
