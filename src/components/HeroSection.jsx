export default function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl animate-float" />
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-float" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-slate-800 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.2em] text-blue-200 uppercase">
            Consultoría y desarrollo a medida
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-7xl">
            Transformamos problemas complejos en software a medida
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Diseñamos soluciones digitales claras, escalables y orientadas a resultados para empresas B2B que necesitan avanzar con tecnología sólida.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 bg-[length:200%_200%] px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
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

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['+12', 'años resolviendo procesos'],
              ['100%', 'enfoque B2B'],
              ['1 equipo', 'cerca del negocio'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-800 bg-white/5 p-4 backdrop-blur-sm">
                <div className="font-display text-2xl font-bold text-white">{value}</div>
                <div className="mt-1 text-sm leading-5 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur animate-float" />

          <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Equipo analizando estrategia de software"
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />

            <div className="grid gap-4 border-t border-slate-800 p-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Entrega</p>
                <p className="mt-2 font-display text-lg font-semibold text-white">Diseño + desarrollo + acompañamiento</p>
              </div>
              <div className="rounded-2xl bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Foco</p>
                <p className="mt-2 font-display text-lg font-semibold text-white">Procesos críticos y crecimiento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}