import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUser();

  if (session) {
    redirect("/dashboard");
  }

  return <>{!session && children}</>;
}
