import HeroSection from './components/HeroSection';
import SiteHeader from './components/SiteHeader';
import TechStack from './components/TechStack';
import ProjectsGallery from './components/ProjectsGallery';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <main id="top" className="overflow-hidden">
        <HeroSection />
        <TechStack />
        <ProjectsGallery />
        <AboutUs />
        <ContactForm />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} M&D Sistemas. Software a medida para empresas B2B.
      </footer>
    </div>
  );
}