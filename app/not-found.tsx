import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page introuvable",
};

export default function NotFound() {
  return (
    <>
      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center gap-4 px-4 sm:px-6 h-15 bg-transparent">
        <div className="flex gap-3 items-center shrink-0">
          <Avatar>
            <AvatarImage src="/logo.webp" alt="Conflict WL logo" />
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
          <h2 className="font-cinzel text-amber-500 tracking-widest text-sm uppercase">
            Conflict WL
          </h2>
        </div>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase font-medium text-zinc-400">
          {[
            { label: "Accueil", href: "/" },
            { label: "Notre Serveur", href: "/#serveur" },
            { label: "Lore du serveur", href: "/#lore" },
            { label: "Règlement", href: "/#reglement" },
            { label: "Nous rejoindre", href: "/#nous-rejoindre" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="relative pb-0.5 hover:text-amber-500 transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-amber-500
                after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ── 404 HERO ── */}
      <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 text-center">
        {/* Decorative background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl">
          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-[10px] tracking-[4px] uppercase font-cinzel text-amber-500">
              Zone Interdite
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          {/* 404 number */}
          <div className="font-cinzel font-bold text-[120px] sm:text-[180px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-700 select-none">
            404
          </div>

          {/* Title */}
          <h1 className="font-cinzel text-2xl sm:text-3xl font-semibold text-white -mt-4">
            Vous avez dépassé les{" "}
            <span className="text-amber-500">limites</span>
          </h1>

          {/* Description */}
          <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
            Cette zone n&apos;existe pas sur Conflict WL. Que vous soyez du côté
            d&apos;El Rey ou du LSPD, aucune faction ne contrôle cette page.
          </p>

          {/* Border card info */}
          <div className="w-full bg-zinc-900 border border-zinc-800 border-l-2 border-l-amber-500 rounded-md p-4 text-left">
            <div className="text-xs font-semibold uppercase tracking-[2px] text-amber-600 mb-1">
              Rapport d&apos;incident
            </div>
            <div className="text-xs text-zinc-500 leading-relaxed">
              La page demandée est introuvable ou a été déplacée. Retournez à
              l&apos;accueil pour continuer votre mission.
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-sm sm:max-w-none mt-2">
            <Link
              href="/"
              className="w-full sm:w-auto text-center font-semibold uppercase text-sm tracking-[1px] px-8 py-3
              rounded-full transition text-black shadow-md shadow-amber-500/40 bg-gradient-to-b from-amber-500
              to-amber-700 border-b-[3px] border-b-[#8a4b00] hover:-translate-y-[3px] hover:shadow-xl
              hover:shadow-amber-500/60"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="https://discord.gg/yx82Ggaz8Q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 transition font-semibold uppercase px-6 py-3 text-sm tracking-[1px]
              border rounded-full border-amber-500 bg-black/60 shadow-md shadow-amber-500/40 hover:-translate-y-[3px] hover:shadow-xl
              hover:shadow-amber-500/60"
            >
              Discord
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-950 border-t border-zinc-800/50 py-10 px-4 sm:px-6 text-center">
        <div className="font-cinzel text-xl sm:text-2xl font-bold tracking-[8px] text-amber-500 mb-1">
          CONFLICT
        </div>
        <div className="text-xs tracking-[5px] uppercase text-zinc-600 mb-8">
          WL
        </div>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          {[
            { label: "Accueil", href: "/" },
            { label: "Notre Serveur", href: "/#serveur" },
            { label: "Lore", href: "/#lore" },
            { label: "Règlement", href: "/reglement" },
            { label: "Discord", href: "https://discord.gg/yx82Ggaz8Q" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("/") && !l.href.startsWith("//") ? undefined : "_blank"}
              rel={l.href.startsWith("/") && !l.href.startsWith("//") ? undefined : "noopener noreferrer"}
              className="text-xs tracking-[2px] uppercase text-zinc-500 hover:text-amber-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-xs text-zinc-600">
          <span>🎮 FiveM</span>
          <span>💬 Discord</span>
          <span>🔞 18+ Strict</span>
          <span>🌐 FR / Francophone</span>
        </div>

        <div className="text-xs text-zinc-700">
          © 2026 Conflict WL · Tous droits réservés
        </div>
      </footer>
    </>
  );
}
