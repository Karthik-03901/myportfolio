import type { Metadata } from "next";
import { JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Google Fonts
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

// Temporary fallback variables for fonts (until real fonts are added)
const fontVariables = `${instrumentSerif.variable} ${jetbrainsMono.variable}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://karthik.dev"),
  title: {
    default: "Karthik — Full-Stack Developer & DevOps Engineer",
    template: "%s | Karthik",
  },
  description:
    "Full-stack developer focused on DevOps, cloud infrastructure and backend. Building systems that scale with Next.js, Supabase, Docker, AWS, and CI/CD.",
  keywords: [
    "Full-Stack Developer",
    "DevOps Engineer",
    "Cloud Infrastructure",
    "Next.js",
    "React",
    "TypeScript",
    "AWS",
    "Docker",
    "CI/CD",
    "Supabase",
    "Backend Development",
  ],
  authors: [{ name: "Karthik" }],
  creator: "Karthik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karthik.dev",
    title: "Karthik — Full-Stack Developer & DevOps Engineer",
    description:
      "Full-stack developer focused on DevOps, cloud infrastructure and backend. Building systems that scale.",
    siteName: "Karthik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik — Full-Stack Developer & DevOps Engineer",
    description:
      "Full-stack developer focused on DevOps, cloud infrastructure and backend. Building systems that scale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={fontVariables}
    >
      <body className="dark">
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
