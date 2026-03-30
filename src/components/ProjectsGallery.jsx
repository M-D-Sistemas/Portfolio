import { projects } from '../data/projects';

export default function ProjectsGallery() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Proyectos</span>
        <h2 className="font-display mt-2 text-2xl font-semibold text-white sm:text-4xl">Casos de éxito destacados</h2>
        <p className="mt-3 text-slate-300">
          Proyectos pensados para resolver procesos reales, mejorar márgenes y acelerar decisiones.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-glow"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-52 w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100 backdrop-blur">
                Caso real
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 pb-6">
              <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
              <p className="mt-4 text-sm text-blue-200">Soluciones enfocadas en impacto medible.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}