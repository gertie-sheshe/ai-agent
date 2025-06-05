"use client";
import Header from "@/components/Header";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Authenticated>
        <h1>Dashboard</h1>
      </Authenticated>
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
}
