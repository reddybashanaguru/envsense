// src/app/dashboard/layout.tsx
"use client"; // Mark this as a client component

import { ReactNode } from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT: Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-0.5 h-full overflow-y-auto">
        <Menu />
      </div>

      {/* RIGHT: Main Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto flex flex-col">
        <Navbar />
        {children} {/* Render children (dashboard content) */}
      </div>
    </div>
  );
}
