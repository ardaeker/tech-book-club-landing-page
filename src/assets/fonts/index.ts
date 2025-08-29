import { Fira_Code, Inter, Martian_Mono } from "next/font/google";

export const martian = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-martian-mono",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

export const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fira-code",
});
