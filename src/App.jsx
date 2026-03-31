import HeroSection from './components/HeroSection';
import SiteHeader from './components/SiteHeader';
import TechStack from './components/TechStack';
import ProjectsGallery from './components/ProjectsGallery';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_25%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,1))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />

      <SiteHeader />

      <main id="top" className="relative overflow-hidden pt-24 sm:pt-28">
        <HeroSection />
        <TechStack />
        <ProjectsGallery />
        <AboutUs />
        <ContactForm />
      </main>

      <footer className="relative border-t border-white/5 bg-slate-950/70 py-8 text-center text-sm text-slate-500 backdrop-blur">
        © {new Date().getFullYear()} MASDAL SOFT. Software a medida para empresas que necesitan escalar.
      </footer>
    </div>
  );
}