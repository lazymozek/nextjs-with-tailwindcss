"use client";

import Link from "next/link";
import Logo from "@/assets/Logo";
import { motion } from "framer-motion";
import ContainerGrid from "@/components/ContainerGrid";

export default function Header() {
  return (
    <>
      <motion.header
        animate={{ opacity: 100 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="border-b border-gray-200 w-full"
      >
        <ContainerGrid className="py-0">
          <nav
            className="flex items-center justify-between py-6 md:py-8"
            aria-label="Main Menu"
          >
            <Link href="/" className="flex-shrink-0">
              <Logo className="dark:text-white text-slate-900 h-5" />
            </Link>
            <div
              className={[
                "flex items-center justify-end space-x-5 md:space-x-12 ",
                "dark:[&_a]:text-white [&_a]:text-slate-800 [&_a]:text-base [&_a]:leading-normal [&_a]:font-medium",
              ].join(" ")}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact-us">Contact</Link>
            </div>
          </nav>
        </ContainerGrid>
      </motion.header>
    </>
  );
}
