import { SignOutButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = async () => {
  const { userId } = await auth();
  return (
    <header className="h-16 bg-background sticky top-0 flex items-center justify-between px-2 md:px-4 lg:px-8 shadow-md">
      {
        <Link
          href={userId ? "/my-chapters" : "/"}
          className="text-2xl font-bold text-primary"
        >
          <h1>Chapters</h1>
        </Link>
      }
      {userId ? (
        <div className="flex items-center gap-4">
          <UserButton />
          <Button asChild variant={"outline"} size={"sm"}>
            <SignOutButton />
          </Button>
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
