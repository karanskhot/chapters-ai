import { auth } from "@clerk/nextjs/server";

export const is_user_valid = async () => {
  const { userId } = await auth();
  if (!userId) throw Error("Unauthenticated!");
  return userId;
};
