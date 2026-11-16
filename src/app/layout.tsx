import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: `${profile.name} — Dublin`,
  description: profile.tagline,
  metadataBase: new URL(profile.siteUrl),
  openGraph: {
    title: profile.name,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
