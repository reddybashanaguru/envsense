// src/app/dashboard/layout.tsx
"use client"; // Mark this as a client component

import { ReactNode } from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "../components/LoadingSpinner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT: Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/avatar.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">EnvSense</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT: Main Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children} {/* Render children (dashboard content) */}
      </div>
    </div>
  );
}
