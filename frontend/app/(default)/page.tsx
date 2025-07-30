"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-background to-muted">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
        Welcome to eTena
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-muted-foreground mb-10 leading-relaxed">
        eTena makes clinic visits easy. Join the queue, check your health
        records, and get test results — all in one secure place with Fayda.
      </p>

      <Button
        className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 cursor-pointer"
        onClick={() => (window.location.href = "/auth/login")}
      >
        Get Started
      </Button>

      <Card className="mt-12 max-w-2xl w-full text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="space-y-6 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Why eTena?
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground text-base md:text-lg space-y-3">
            <li>
              <strong>Check Your Queue:</strong> See your place in line from
              your phone.
            </li>
            <li>
              <strong>Your Health Records:</strong> Access past visits,
              prescriptions, and more.
            </li>
            <li>
              <strong>Quick Results:</strong> Get lab results sent to your eTena
              account.
            </li>
            <li>
              <strong>Safe & Fair:</strong> Fayda keeps your data secure and the
              queue fair.
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
