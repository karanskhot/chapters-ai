import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "./ui/button";
import { NotebookTabs } from "lucide-react";

const Navbar = async () => {
  const { userId } = await auth();
  return (
    <header className="h-16 z-50 backdrop-blur-2xl sticky top-0 flex items-center justify-between px-2 md:px-4 lg:px-8">
      {
        <Link
          href={userId ? "/my-chapters" : "/"}
          className="flex items-center space-x-1 text-2xl font-bold text-primary"
        >
          <NotebookTabs size={32} strokeWidth={1.5} />
          <h1>Chapters</h1>
        </Link>
      }
      {userId ? (
        <div className="flex items-center gap-4">
          <UserButton />
        </div>
      ) : (
        <div>
          <Button asChild variant={"default"} size={"sm"}>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      )}
    </header>
  );
};
export default Navbar;
