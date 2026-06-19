import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const cinzel = Cinzel({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: {
    default: "Conflict WL — Serveur FiveM WhiteList Francophone",
    template: "%s | Conflict WL",
  },
  description:
    "Conflict WL est un serveur FiveM WhiteList francophone avec un lore original ancré en 2026. Rejoignez Los Santos, intégrez une faction et forgez l'avenir de la ville.",
  keywords: [
    "FiveM",
    "WhiteList",
    "RP",
    "RolePlay",
    "GTA RP",
    "Los Santos",
    "serveur francophone",
    "Conflict WL",
    "Cayo Perico",
    "El Rey",
    "LSPD",
    "serveur GTA 5",
  ],
  authors: [{ name: "Conflict WL" }],
  creator: "Conflict WL",
  openGraph: {
    title: "Conflict WL — Serveur FiveM WhiteList Francophone",
    description:
      "Un univers évolutif ancré en 2026. Rejoignez Los Santos, intégrez une faction et forgez l'avenir de la ville.",
    type: "website",
    locale: "fr_FR",
    siteName: "Conflict WL",
    images: [
      {
        url: "/banniere.webp",
        width: 1200,
        height: 630,
        alt: "Conflict WL — Serveur FiveM WhiteList",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conflict WL — Serveur FiveM WhiteList",
    description:
      "Un univers évolutif ancré en 2026. Rejoignez Los Santos et forgez l'avenir de la ville.",
    images: ["/banniere.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          cinzel.variable,
          "font-sans antialiased h-full",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
