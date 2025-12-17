import { ArrowRight, Sparkles, Star, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

/* NAVAGRAHA CONFIGURATION */
const navagrahas = [
  { id: 'sun', name: 'Surya', top: '20%', left: '85%', duration: '20s', size: 64 },
  { id: 'moon', name: 'Chandra', top: '22%', left: '10%', duration: '25s', size: 48 },
  { id: 'mars', name: 'Mangala', top: '45%', left: '8%', duration: '18s', size: 32 },
  { id: 'mercury', name: 'Budha', top: '30%', left: '75%', duration: '15s', size: 24 },
  { id: 'jupiter', name: 'Guru', top: '65%', left: '82%', duration: '40s', size: 80 },
  { id: 'venus', name: 'Shukra', top: '55%', left: '15%', duration: '22s', size: 40 },
  { id: 'saturn', name: 'Shani', top: '70%', left: '20%', duration: '45s', size: 56 },
  { id: 'rahu', name: 'Rahu', top: '50%', left: '90%', duration: '30s', size: 40 },
  { id: 'ketu', name: 'Ketu', top: '75%', left: '55%', duration: '32s', size: 36 },
];

/* Helper Component to Render Specific Planet Shapes */
const PlanetShape = ({ id, size }) => {
  const sizePx = `${size}px`;
  
  switch (id) {
    case 'saturn':
      return (
        <div className="relative flex items-center justify-center" style={{ width: sizePx, height: sizePx }}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-600 to-slate-900 shadow-lg relative z-10" />
          <div className="absolute w-[160%] h-[40%] rounded-[50%] border-4 border-slate-400/60 shadow-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 z-0" />
        </div>
      );
    case 'sun':
      return <div className="rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-[0_0_40px_rgba(251,191,36,0.6)]" style={{ width: sizePx, height: sizePx }} />;
    case 'moon':
      return (
        <div className="rounded-full bg-gradient-to-br from-slate-100 to-slate-300 shadow-[0_0_20px_rgba(255,255,255,0.4)] relative overflow-hidden" style={{ width: sizePx, height: sizePx }}>
          <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-slate-400/20" />
          <div className="absolute bottom-3 right-4 w-3 h-3 rounded-full bg-slate-400/30" />
        </div>
      );
    case 'rahu':
      return <div className="rounded-full bg-black shadow-[0_0_30px_rgba(88,28,135,0.6)] blur-[1px] border border-purple-900/50" style={{ width: sizePx, height: sizePx }} />;
    case 'ketu':
      return <div className="rounded-full bg-stone-700 shadow-[0_0_30px_rgba(120,113,108,0.5)] blur-[1px] border border-stone-600/50" style={{ width: sizePx, height: sizePx }} />;
    case 'mars': 
      return <div className="rounded-full bg-gradient-to-br from-red-500 to-red-900 shadow-red-900/50" style={{ width: sizePx, height: sizePx }} />;
    case 'jupiter': 
      return <div className="rounded-full bg-gradient-to-br from-yellow-200 to-yellow-600 shadow-yellow-600/40" style={{ width: sizePx, height: sizePx }} />;
    case 'venus': 
      return <div className="rounded-full bg-gradient-to-br from-white via-indigo-100 to-indigo-200 shadow-[0_0_25px_rgba(255,255,255,0.8)]" style={{ width: sizePx, height: sizePx }} />;
    case 'mercury': 
      return <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-700 shadow-emerald-700/40" style={{ width: sizePx, height: sizePx }} />;
    default:
      return <div className="rounded-full bg-gray-400" style={{ width: sizePx, height: sizePx }} />;
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-vedic-bg relative overflow-hidden">
      
      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes orbit-float {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>

      {/* BACKGROUND PLANETS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedic-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vedic-secondaryAccent/10 rounded-full blur-[100px]" />
        {navagrahas.map((planet) => (
          <div
            key={planet.id}
            className="absolute opacity-90 transition-all duration-1000"
            style={{
              top: planet.top,
              left: planet.left,
              animation: `orbit-float ${planet.duration} infinite ease-in-out`,
            }}
          >
            <PlanetShape id={planet.id} size={planet.size} />
          </div>
        ))}
      </div>


      {/* HERO CONTENT */}
      <div className="relative flex-grow flex items-center justify-center pt-24 pb-24 z-10">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <span className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-vedic-primary/10 text-vedic-primary text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 shadow-sm cursor-default">
              <Sparkles className="w-3 h-3 text-vedic-accent" /> Vedic Wisdom • Modern Precision
            </span>
          </div>
          
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-serif font-extrabold mb-8 leading-tight text-vedic-accent">
            steer through stars <br />
            <span className="text-vedic-primary">
              to your true north
            </span>
          </h1>
          
          <p className="animate-fade-in-up delay-200 text-lg text-vedic-primary/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              We combine precise planetary calculations with deep spiritual insight to guide your career, relationships, and destiny.
          </p>

          <div className="animate-fade-in-up delay-300 mb-16">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-vedic-accent text-vedic-primary font-bold rounded-full text-lg shadow-lg shadow-vedic-accent/20 hover:bg-vedic-secondaryAccent hover:scale-105 transition-all duration-300"
            >
              Explore Readings <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="animate-fade-in-up delay-300 border-t border-vedic-primary/10 pt-8 flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-vedic-primary/60 text-sm font-medium tracking-wider uppercase">
            <span className="flex items-center justify-center gap-2"><Star className="w-4 h-4 text-vedic-accent" /> 100% Private</span>
            <span className="flex items-center justify-center gap-2"><Star className="w-4 h-4 text-vedic-accent" /> Vedic Certified</span>
            <span className="flex items-center justify-center gap-2"><Star className="w-4 h-4 text-vedic-accent" /> Global Service</span>
          </div>

        </div>
      </div>

      {/* =========================================
          COMPACT FOOTER 
      ========================================== */}
      {/* - Reduced 'py-16' to 'py-8'
          - Removed large margin spacing (mb-10 -> mb-4)
          - Arranged elements horizontally on large screens using 'md:flex'
      */}
      <footer className="bg-[#0f172a] py-8 border-t border-white/10 w-full z-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Brand & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold tracking-wide text-[#d4af37]">
              DHROOVA
            </h2>
            <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mt-1">
              Steer through stars to your true north
            </p>
          </div>
          
          {/* Right Side: Contact & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a 
              href="mailto:dhroova.work@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#d4af37] transition-colors"
            >
              <Mail className="w-4 h-4" />
              dhroova.work@gmail.com
            </a>
            <div className="text-[10px] text-slate-600">
              &copy; {new Date().getFullYear()} Dhroova. All rights reserved.
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}