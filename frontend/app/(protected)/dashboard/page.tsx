"use client";

import { useUser } from "@/contexts/UserContext";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  const user = useUser();

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 bg-gradient-to-b from-background to-muted">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground tracking-tight">
        Welcome, {user["name#am"] || user["name#en"] || "User"}!
      </h1>

      <Card className="max-w-lg w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-center">
            <img
              src={user.picture || "https://avatar.iran.liara.run/public"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div className="space-y-2 text-base md:text-lg text-muted-foreground">
            <p>
              <strong>Name:</strong>{" "}
              {user["name#am"] || user["name#en"] || "Not provided"}
            </p>
            <p>
              <strong>Email:</strong> {user.email || "Not provided"}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone_number || "Not provided"}
            </p>
            <p>
              <strong>Birthdate:</strong> {user.birthdate || "Not provided"}
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
