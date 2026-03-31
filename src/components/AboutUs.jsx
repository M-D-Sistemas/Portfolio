export default function AboutUs() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Sobre MASDAL SOFT</span>
          <p className="mt-4 max-w-3xl text-slate-300">
            Somos dos estudiantes de Ingeniería en Sistemas, actualmente cursando cuarto año, y trabajamos con una mirada práctica sobre cómo la tecnología puede resolver problemas reales de negocio.
          </p>
          <p className="mt-4 max-w-3xl text-slate-300">
            En MASDAL SOFT nos enfocamos en el desarrollo de soluciones tecnológicas como una herramienta para ordenar procesos, mejorar la eficiencia y construir productos digitales que acompañen el crecimiento del negocio. Priorizamos soluciones claras, escalables y bien pensadas desde la experiencia de usuario hasta la implementación técnica.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/70 shadow-lg shadow-black/20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Equipo de desarrollo revisando ideas alrededor de una mesa de trabajo"
            className="h-full min-h-[260px] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}