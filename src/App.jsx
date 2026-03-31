import HeroSection from './components/HeroSection';
import SiteHeader from './components/SiteHeader';
import TechStack from './components/TechStack';
import ProjectsGallery from './components/ProjectsGallery';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-45"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')" }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.55),rgba(2,6,23,0.88))]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_25%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />

      <SiteHeader />

      <main id="top" className="relative overflow-hidden pt-24 sm:pt-28">
        <HeroSection />
        <TechStack />
        <ProjectsGallery />
        <AboutUs />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}