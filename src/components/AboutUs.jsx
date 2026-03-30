export default function AboutUs() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Sobre M&D Sistemas</span>
          <h2 className="font-display mt-2 text-2xl font-semibold text-white sm:text-4xl">Ingeniería de software con foco comercial</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            En M&D Sistemas nos enfocamos en la ingeniería de software como una herramienta para ordenar procesos, mejorar la eficiencia y construir productos digitales que acompañen el crecimiento del negocio.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Arquitectura simple', 'Entrega incremental', 'Diseño limpio', 'Acompañamiento cercano'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/70">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
            alt="Equipo trabajando en estrategia digital"
            className="h-full min-h-[260px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}