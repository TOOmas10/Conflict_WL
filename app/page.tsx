import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
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
            { label: "Notre Serveur", href: "#serveur" },
            { label: "Lore du serveur", href: "#lore" },
            { label: "Règlement", href: "#reglement" },
            { label: "Nous rejoindre", href: "#nous-rejoindre" },
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
        <MobileNav />
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative h-screen bg-[url('/banniere.webp')] bg-cover bg-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center px-4">
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-col font-cinzel leading-tight">
            Bienvenue sur <span className="text-amber-500">Conflict WL</span>
          </h1>
          <p className="hero-sub text-base sm:text-xl md:text-2xl text-zinc-300 max-w-xl">
            Une expérience unique et un Lore original
          </p>
          <div className="hero-btns flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-sm sm:max-w-none">
            <Link
              href="https://top-serveurs.net/gta/conflict-wl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-60 text-center font-semibold uppercase text-sm sm:text-base tracking-[1px] px-6 py-3
              rounded-full transition text-black shadow-md shadow-amber-500/40 bg-gradient-to-b from-amber-500
              to-amber-700 border-b-[3px] border-b-[#8a4b00] hover:-translate-y-[3px] hover:shadow-xl
              hover:shadow-amber-500/60"
            >
              Top Serveurs
            </Link>
            <Link
              href="https://discord.gg/yx82Ggaz8Q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 transition font-semibold uppercase px-6 py-3 text-sm sm:text-base tracking-[1px]
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
        {/* Scroll indicator */}
        <div className="hero-scroll z-10">
          <div className="w-6 h-10 rounded-full border-2 border-zinc-400/50 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-amber-500/80" />
          </div>
        </div>
      </section>

      {/* ── NOTRE SERVEUR ── */}
      <section
        id="serveur"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-950 border-b border-zinc-800/50"
      >
        <FadeIn>
          <SectionDivider label="Notre Serveur" />
          <p className="text-center text-xs tracking-[4px] uppercase text-amber-500 font-cinzel mb-3">
            Conflict WL
          </p>
          <h2 className="text-center font-cinzel text-2xl sm:text-3xl font-semibold text-white mb-3">
            Une expérience <span className="text-amber-500">unique</span> en son
            genre
          </h2>
          <p className="text-center text-sm text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Un serveur FiveM WhiteList francophone ancré dans un univers
            original. Chaque décision forge l&apos;avenir de Los Santos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {SERVER_FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 100} direction="up">
              <div className="h-full bg-zinc-900 border border-zinc-800 border-l-2 border-l-amber-500 rounded-md p-5 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-3">{f.icon}</div>
                <div className="text-xs font-semibold uppercase tracking-[2px] text-amber-600 mb-2">
                  {f.title}
                </div>
                <div className="text-xs text-zinc-500 leading-relaxed">
                  {f.text}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── LORE DU SERVEUR ── */}
      <section
        id="lore"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-900 border-b border-zinc-800/50"
      >
        <FadeIn>
          <SectionDivider label="Lore du serveur" />
          <p className="text-center text-xs tracking-[4px] uppercase text-amber-500 font-cinzel mb-3">
            Histoire &amp; Univers
          </p>
          <h2 className="text-center font-cinzel text-2xl sm:text-3xl font-semibold text-white mb-3">
            Los Santos n&apos;est plus la ville
            <br className="hidden sm:block" />
            que vous <span className="text-amber-500">connaissez</span>
          </h2>
          <p className="text-center text-sm text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Deux hommes. Deux destins. Une guerre froide qui façonne chaque rue
            de la ville.
          </p>
        </FadeIn>

        {/* Factions VS */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-3xl mx-auto mb-14">
          <FadeIn direction="left" className="flex-1">
            <div className="h-full bg-zinc-950 border border-zinc-800 rounded-md p-6 text-center">
              <div className="text-4xl mb-3">👑</div>
              <div className="text-xs tracking-[3px] uppercase text-zinc-500 mb-2">
                L&apos;Empire de Cayo Perico
              </div>
              <div className="font-cinzel text-xl font-bold text-red-400 mb-3">
                El Rey
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                Depuis son île imprenable, il contrôle les trafics de drogue,
                d&apos;armes et de contrebande à travers le monde. Son empire
                s&apos;étend jusqu&apos;aux rues de Los Santos.
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {["Cartel", "Mafia", "MC", "Gangs"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[1px] px-2 py-1 rounded bg-red-950/60 text-red-400 border border-red-900/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="none"
            className="flex items-center justify-center py-2 md:py-0 shrink-0"
          >
            <div className="pulse-amber w-12 h-12 rounded-full border-2 border-amber-500/30 bg-zinc-950 flex items-center justify-center font-cinzel text-sm font-bold text-amber-500">
              VS
            </div>
          </FadeIn>

          <FadeIn direction="right" className="flex-1">
            <div className="h-full bg-zinc-950 border border-zinc-800 rounded-md p-6 text-center">
              <div className="text-4xl mb-3">🚔</div>
              <div className="text-xs tracking-[3px] uppercase text-zinc-500 mb-2">
                LSPD — Commandant
              </div>
              <div className="font-cinzel text-xl font-bold text-blue-400 mb-3">
                James Hart
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                Ancien militaire implacable, il lutte depuis 2021 pour éradiquer
                la corruption et démanteler l&apos;empire d&apos;El Rey, malgré
                chaque revers subi.
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {["LSPD", "Gouvernement", "Justice"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[1px] px-2 py-1 rounded bg-blue-950/60 text-blue-400 border border-blue-900/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="max-w-lg mx-auto">
          {TIMELINE.map((item, i) => (
            <FadeIn key={item.year} delay={i * 120} direction="left">
              <div className="flex gap-5 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 mt-1" />
                  {i < TIMELINE.length - 1 && (
                    <div className="flex-1 w-px bg-zinc-800 mt-1" />
                  )}
                </div>
                <div>
                  <div className="font-cinzel text-xs font-semibold text-amber-500 mb-1">
                    {item.year}
                  </div>
                  <div className="text-sm font-medium text-zinc-300 mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-zinc-500 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── RÈGLEMENT ── */}
      <section
        id="reglement"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-950 border-b border-zinc-800/50"
      >
        <FadeIn>
          <SectionDivider label="Règlement" />
          <p className="text-center text-xs tracking-[4px] uppercase text-amber-500 font-cinzel mb-3">
            Les règles du serveur
          </p>
          <h2 className="text-center font-cinzel text-2xl sm:text-3xl font-semibold text-white mb-3">
            Un RP <span className="text-amber-500">sérieux</span> exige des
            règles claires
          </h2>
          <p className="text-center text-sm text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Trois piliers fondamentaux encadrent la vie sur Conflict WL. Le
            non-respect entraîne des sanctions allant jusqu&apos;au ban
            définitif.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {RULES.map((r, i) => (
            <FadeIn key={r.num} delay={i * 120}>
              <div className="h-full bg-zinc-900 border border-zinc-800 rounded-md p-6 flex flex-col hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300">
                <div className="font-cinzel text-5xl font-bold text-amber-500 mb-3 leading-none">
                  {r.num}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[2px] text-amber-600 mb-3">
                  {r.title}
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {r.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={360}>
          <div className="flex justify-center mt-10">
            <a
              href="/reglement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center text-xs font-semibold uppercase tracking-[1.5px] px-8 py-3 rounded-full border border-amber-500/30 text-amber-500 hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              Lire le règlement →
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── NOUS REJOINDRE ── */}
      <section
        id="nous-rejoindre"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-900 border-b border-zinc-800/50"
      >
        <FadeIn>
          <SectionDivider label="Nous rejoindre" />
          <p className="text-center text-xs tracking-[4px] uppercase text-amber-500 font-cinzel mb-3">
            Candidature Whitelist
          </p>
          <h2 className="text-center font-cinzel text-2xl sm:text-3xl font-semibold text-white mb-3">
            Prêt à intégrer <span className="text-amber-500">Los Santos</span> ?
          </h2>
          <p className="text-center text-sm text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Le processus de candidature garantit la qualité du RP. Quatre étapes
            simples pour rejoindre la communauté.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {JOIN_STEPS.map((s, i) => (
            <FadeIn key={s.step} delay={i * 100}>
              <div className="h-full bg-zinc-950 border border-zinc-800 rounded-md p-6 text-center flex flex-col hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="font-cinzel text-4xl font-bold text-amber-500 mb-2 leading-none">
                  {s.step}
                </div>
                <div className="text-2xl mb-3">{s.icon}</div>
                <div className="text-xs font-semibold uppercase tracking-[1.5px] text-amber-600 mb-2">
                  {s.title}
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                  {s.text}
                </p>
                {s.href && (
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-block text-xs font-semibold uppercase tracking-[1.5px] px-5 py-2.5 rounded-full border border-amber-500/30 text-amber-500 hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {s.label}
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

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
            { label: "Notre Serveur", href: "#serveur" },
            { label: "Lore", href: "#lore" },
            { label: "Règlement", href: "/reglement" },
            { label: "Discord", href: "https://discord.gg/yx82Ggaz8Q" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("#") ? undefined : "_blank"}
              rel={l.href.startsWith("#") ? undefined : "noopener noreferrer"}
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

/* ── Sub-components ── */

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-500" />
      <span className="text-[10px] tracking-[4px] uppercase font-cinzel text-amber-500">
        {label}
      </span>
      <div className="h-px w-10 bg-gradient-to-l from-transparent to-amber-500" />
    </div>
  );
}

/* ── Data ── */

const SERVER_FEATURES = [
  {
    icon: "🏛️",
    title: "Lore original",
    text: "Un univers évolutif ancré en 2026, façonné par les choix des joueurs eux-mêmes.",
  },
  {
    icon: "🌴",
    title: "Cayo Perico",
    text: "L'île au cœur du gameplay — forteresse, base d'opérations et enjeu stratégique majeur.",
  },
  {
    icon: "🎭",
    title: "RP sérieux",
    text: "Policier, criminel ou civil : chaque rôle forge l'avenir de la ville. Whitelist obligatoire.",
  },
  {
    icon: "⚔️",
    title: "Factions actives",
    text: "Cartels, MC, gangs, LSPD — des factions vivantes avec des objectifs propres.",
  },
];

const TIMELINE = [
  {
    year: "2018",
    title: "La prise de Cayo Perico",
    content:
      "El Rey arrive sur l'île et en prend immédiatement le contrôle. Il la transforme en forteresse imprenable et zone franche du crime.",
  },
  {
    year: "2021",
    title: "James Hart nommé Commandant",
    content:
      "Face à la montée du crime, James Hart prend la tête du LSPD avec un objectif clair : démanteler l'empire d'El Rey. La guerre froide commence.",
  },
  {
    year: "2022",
    title: "Premier affrontement",
    content:
      "L'opération de James sur l'île échoue. Vingt agents du LSPD perdent la vie. El Rey reste intouchable, ses preuves systématiquement effacées.",
  },
  {
    year: "2026",
    title: "La Guerre Froide",
    content:
      "Los Santos est submergée. El Rey étend son empire dans chaque rue pendant que James lutte pour maintenir l'ordre. L'équilibre est précaire — et vous entrez en scène.",
  },
];

const RULES = [
  {
    num: "01",
    title: "Règlement Général",
    text: "En plus du Lexique, ces règles doivent être lues et connues par tous les joueurs.",
  },
  {
    num: "02",
    title: "Règlement Légal",
    text: "Vous souhaitez jouer un personnage légal ? Lisez attentivement ces règles.",
  },
  {
    num: "03",
    title: "Règlement Illégal",
    text: "Vous souhaitez jouer un personnage illégal ? Lisez attentivement ces règles.",
  },
];

const JOIN_STEPS: {
  step: string;
  icon: string;
  title: string;
  text: string;
  href?: string;
  label?: string;
  external?: boolean;
}[] = [
  {
    step: "01",
    icon: "💬",
    title: "Rejoindre le Discord",
    text: "Accédez au Discord officiel et lisez les annonces. Vérifiez les prérequis avant de candidater.",
    href: "https://discord.gg/yx82Ggaz8Q",
    label: "Rejoindre le Discord",
    external: true,
  },
  {
    step: "02",
    icon: "📋",
    title: "Lire le règlement",
    text: "Prenez connaissance du règlement complet. La maîtrise des règles est évaluée lors du test.",
    href: "/reglement",
    label: "Voir le règlement",
    external: true,
  },
  {
    step: "03",
    icon: "✍️",
    title: "Déposer un dossier",
    text: "Rédigez votre background de personnage et soumettez votre candidature dans le canal dédié.",
  },
  {
    step: "04",
    icon: "🎮",
    title: "Test whitelist",
    text: "Passez un entretien avec un membre du staff. En cas de succès, accès au serveur accordé.",
  },
];
