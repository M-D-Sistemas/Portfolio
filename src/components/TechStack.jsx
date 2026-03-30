import { FaNodeJs, FaReact } from 'react-icons/fa';
import { MdApi } from 'react-icons/md';
import { SiDocker, SiFirebase, SiPostgresql, SiTailwindcss, SiVite } from 'react-icons/si';

const technologies = [
  {
    name: 'React',
    icon: FaReact,
    accent: 'text-cyan-300',
  },
  {
    name: 'Vite',
    icon: SiVite,
    accent: 'text-violet-300',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    accent: 'text-sky-300',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    accent: 'text-emerald-300',
  },
  {
    name: 'APIs REST',
    icon: MdApi,
    accent: 'text-blue-300',
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    accent: 'text-amber-300',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    accent: 'text-sky-200',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    accent: 'text-cyan-200',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Tecnologías</span>
          <h2 className="font-display mt-2 text-2xl font-semibold text-white sm:text-4xl">Stack que usamos para construir software real</h2>
          <p className="mt-3 text-slate-300">
            Elegimos herramientas maduras para entregar velocidad, mantenibilidad y una base técnica sólida desde el inicio.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
              >
                <div className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 ${technology.accent} transition duration-300 group-hover:scale-105`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-slate-100">{technology.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}