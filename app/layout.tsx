import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads is a modern social media  platform.",
};

const localization = {
  signUp: {
    start: {
      subtitle: "to access Threads",
    },
  },
  signIn: {
    start: {
      title: "Sign in to access Threads",
      subtitle: "Welcome back! Sign in to Threads account",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body>
          <SpeedInsights />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
