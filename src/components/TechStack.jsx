const technologies = [
  'React',
  'Vite',
  'Tailwind CSS',
  'Node.js',
  'APIs REST',
  'Firebase',
  'PostgreSQL',
  'Docker',
];

export default function TechStack() {
  return (
    <section id="tech" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Tecnologías que dominamos</h2>
          <p className="mt-3 text-slate-300">
            Seleccionamos el stack según la necesidad del negocio, buscando velocidad, mantenibilidad y escalabilidad.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-4 text-center text-sm font-medium text-slate-100 transition hover:border-blue-500/40 hover:bg-slate-900"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}