import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp forceRedirectUrl="/my-chapters" signInUrl="/sign-in" />
    </div>
  );
}
