import {
  ClerkProvider,
} from '@clerk/nextjs'

import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/contexts/ThemeProvider";

const mont = Montserrat_Alternates({ subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: {
    template: "%s | StudyPulse",
    default: "Home",
  },
  description: "StudyPulse is a platoform for students for structured learning. It provides the feature of creating lectures schedule, exams timetable, daily tasks and also to track the daily activites. Finally the student can view all the progress in a statistics form.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={mont.className}>
          <ThemeProvider>
            {children}
          </ThemeProvider>  
        </body>
      </html>
    </ClerkProvider>
  );
}
