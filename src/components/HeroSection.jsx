export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="w-full max-w-none">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-medium tracking-[0.24em] text-blue-100 uppercase">
            Software a medida para empresas
          </span>

          <h1 className="font-display mx-auto mt-6 max-w-6xl text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-[4.9rem] lg:leading-[0.92] xl:text-[5.4rem]">
            <span className="block">Transformamos problemas complejos</span>
            <span className="block">en software a medida</span>
          </h1>

          <p className="mx-auto mt-5 max-w-5xl text-balance text-base leading-7 text-slate-300 sm:text-lg lg:text-xl lg:leading-8">
            Diseñamos plataformas, sistemas internos y productos digitales con foco en claridad, escalabilidad y resultados medibles para organizaciones que quieren crecer con tecnología sólida.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Ver casos de éxito
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-white/10"
            >
              Hablemos de tu proyecto
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ['UX + técnica', 'Interfaces claras y sistemas robustos'],
              ['Entrega incremental', 'Avance visible y validación continua'],
              ['Enfoque B2B', 'Soluciones pensadas para negocio'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-800/80 bg-white/5 p-4 backdrop-blur-sm transition hover:border-blue-500/30 hover:bg-white/10">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-sm leading-5 text-slate-400">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}