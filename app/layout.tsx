import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'



export const metadata: Metadata = {
  title: "Threads",
  description: "Threads is a modern social media  platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
