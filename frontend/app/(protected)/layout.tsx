import { getUser } from "@/lib/getUser";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import UserProvider from "@/components/UserProvider";
import { Button } from "@/components/ui/button";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <UserProvider user={user}>
      <header className="w-full bg-background shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold text-foreground">
            eTena
          </h1>
          <form action="/auth/logout" method="POST">
            <Button
              type="submit"
              className="cursor-pointer text-base px-6 py-2 bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              Log Out
            </Button>
          </form>
        </div>
      </header>
      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        {children}
      </main>
    </UserProvider>
  );
}
