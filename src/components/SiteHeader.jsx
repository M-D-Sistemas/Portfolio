import { useState } from 'react';

const navigation = [
  { label: 'Servicios', href: '#tech' },
  { label: 'Casos', href: '#projects' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 font-display text-sm font-bold text-slate-950 shadow-glow">
            M&D
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">M&D Sistemas</span>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Software para escalar</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          {navigation.map((item) => (
            <a key={item.label} className="transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-white/5 p-3 text-slate-200 transition hover:border-slate-700 hover:bg-white/10 md:hidden"
          aria-expanded={isOpen}
          aria-label="Abrir navegación"
        >
          <span className="flex h-4 w-4 flex-col justify-between">
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/5 bg-slate-950/95 px-4 py-4 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-sm font-medium text-slate-300">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-slate-800 bg-white/5 px-4 py-3 transition hover:border-slate-700 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}