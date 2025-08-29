import type { Metadata } from "next";

import { fira, inter, martian } from "@/assets/fonts";

import "@/assets/styles/tailwind.css";

import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "Tech Book Club Landing Page - Frontend Mentor",
  description:
    "This project is a solution to the Tech Book Club Landing Page challenge on Frontend Mentor, developed by Arda Eker.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx("antialiased", martian.variable, inter.variable, fira.variable)}>
        {children}
      </body>
    </html>
  );
}
