export default function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-medium tracking-[0.24em] text-blue-100 uppercase">
            Software a medida para empresas
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-7xl lg:leading-[0.95]">
            Transformamos problemas complejos en software a medida
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Diseñamos plataformas, sistemas internos y productos digitales con foco en claridad, escalabilidad y resultados medibles para organizaciones que quieren crecer con tecnología sólida.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
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

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/30 ring-1 ring-white/5">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Equipo de producto y desarrollo trabajando en una oficina moderna"
              className="h-[320px] w-full object-cover object-center sm:h-[420px]"
            />
            <div className="border-t border-slate-800 bg-slate-950/80 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Entregamos</p>
                  <p className="mt-2 text-lg font-semibold text-white">Software claro, usable y escalable</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  {['UI profesional', 'Arquitectura simple', 'Escalable'].map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-white/5 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}