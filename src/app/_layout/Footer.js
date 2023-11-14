"use client";

import ContainerGrid from "@/components/ContainerGrid";
import Link from "next/link";

export default function Footer() {
  return (
    <ContainerGrid as="footer" className="py-8 border-t border-gray-200">
      <div className="flex items-center justify-between gap-8 text-sm text-slate-800 font-medium">
        <p>©{new Date().getFullYear()} Company Name</p>
        <Link href="/" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </ContainerGrid>
  );
}
