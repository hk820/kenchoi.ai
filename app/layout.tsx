import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ken Tsai",
    template: "%s · Ken Tsai",
  },
  description:
    "Ken Tsai builds forecasting, risk and AI agent tools for finance teams in Hong Kong, and teaches Agentic AI for FinTech at HKU SPACE.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        {/* Applies a saved light/dark choice before the page is painted. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {/* Clips decorations that reach past the page edge, without a sideways scroll. */}
        <div className="flex-1 overflow-x-clip">
          <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
            {children}
          </main>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
