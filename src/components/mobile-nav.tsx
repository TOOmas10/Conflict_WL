'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Notre Serveur', href: '#serveur' },
  { label: 'Lore du serveur', href: '#lore' },
  { label: 'Règlement', href: '#reglement' },
  { label: 'Nous rejoindre', href: '#nous-rejoindre' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        className="md:hidden flex flex-col justify-center gap-[5px] p-2 z-50"
      >
        <span
          className={`block w-5 h-px bg-zinc-300 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`}
        />
        <span
          className={`block w-5 h-px bg-zinc-300 transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`}
        />
        <span
          className={`block w-5 h-px bg-zinc-300 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`}
        />
      </button>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 overflow-hidden transition-all duration-300 ${open ? 'max-h-96 py-5' : 'max-h-0'}`}
      >
        <nav className="flex flex-col gap-4 px-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="relative inline-block text-xs tracking-widest uppercase font-medium text-zinc-400 hover:text-amber-500 transition-colors duration-200 py-1 border-b border-zinc-800/60 last:border-0
                after:absolute after:bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-500
                after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
