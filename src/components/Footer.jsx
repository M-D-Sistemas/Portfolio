import { FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa6';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="relative mt-4 border-t border-white/5 bg-[#050816] text-slate-100 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/5 bg-white/[0.03] px-5 py-3.5 shadow-2xl shadow-black/25 sm:px-6 sm:py-4">
          <div className="grid gap-4 md:grid-cols-3 md:items-start md:gap-4">
            <div className="space-y-2">
              <BrandLogo variant="footer" />
            </div>

            <div className="space-y-2 md:justify-self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Enlaces</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/masdalsoft/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-pink-400/50 hover:bg-slate-900"
                >
                  <FaInstagram className="h-5 w-5 text-pink-300" aria-hidden="true" />
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@masdalsoft?lang=es"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-400/50 hover:bg-slate-900"
                >
                  <FaTiktok className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                  TikTok
                </a>
              </div>
            </div>

            <div className="space-y-2 md:justify-self-end md:text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Contacto</p>
              <a
                href="mailto:mdsistemas.dev@gmail.com"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/40 hover:bg-slate-900 md:ml-auto"
              >
                <FaEnvelope className="h-4 w-4 text-sky-200" aria-hidden="true" />
                mdsistemas.dev@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2 border-t border-white/5 pt-2.5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>© {new Date().getFullYear()} MASDAL SOFT. Todos los derechos reservados.</p>
            <a href="#top" className="transition hover:text-slate-300">
              Volver arriba
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}