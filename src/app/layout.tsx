import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData, { structuredDataGenerators } from "@/components/StructuredData";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LA Webdesign - Professionele Websites & Web Apps",
  description: "Moderne webdesign en ontwikkeling in Amsterdam. WordPress websites, Next.js web apps en mobiele applicaties voor groeiende bedrijven.",
  keywords: ["webdesign", "website ontwikkeling", "WordPress", "Next.js", "web apps", "Amsterdam"],
  authors: [{ name: "LA Webdesign" }],
  creator: "LA Webdesign",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://lawebdesign.nl",
    siteName: "LA Webdesign",
    title: "LA Webdesign - Professionele Websites & Web Apps",
    description: "Moderne webdesign en ontwikkeling in Amsterdam. WordPress websites, Next.js web apps en mobiele applicaties voor groeiende bedrijven.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Webdesign - Professionele Websites & Web Apps",
    description: "Moderne webdesign en ontwikkeling in Amsterdam. WordPress websites, Next.js web apps en mobiele applicaties voor groeiende bedrijven.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <StructuredData data={structuredDataGenerators.organization()} />
        <StructuredData data={structuredDataGenerators.localBusiness()} />
        <StructuredData data={structuredDataGenerators.website()} />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
