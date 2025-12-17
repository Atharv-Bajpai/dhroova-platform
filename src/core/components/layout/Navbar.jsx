import { Link } from 'react-router-dom';
import { Sun, Menu } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Royal Blue Background, Shadow, Golden Divider
    <nav className="fixed top-0 w-full z-50 bg-vedic-primary shadow-lg border-b border-vedic-accent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo and Tagline (wrapped in flex-col for stacking) */}
        <Link to="/" className="flex flex-col items-start gap-0.5 group"> 
          {/* Logo Icon (Golden Ochre) - NO CHANGE */}
          <div className="flex items-center gap-2">
             <Sun className="text-vedic-accent w-8 h-8 group-hover:rotate-180 transition-transform duration-[1.5s]" />
             {/* Site Name (Golden Ochre on Royal Blue) */}
             <span className="text-2xl font-serif font-bold tracking-widest text-vedic-accent">DHROOVA</span>
          </div>
          
          {/* ⭐ TAGLINE: Steer Through Stars ⭐ */}
          <p className="text-sm italic tracking-widest font-light text-vedic-bg"> 
            steer through stars to your true north
          </p>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'Services', 'Articles'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              // Off-White links on Royal Blue, Golden Ochre on hover
              className="text-sm font-semibold text-vedic-bg hover:text-vedic-accent transition-colors tracking-wide uppercase"
            >
              {item}
            </Link>
          ))}
          {/* CTA Button: Golden Ochre BG, Royal Blue Text, Greenish-Gold Hover */}
          <Link to="/services" className="px-6 py-2 bg-vedic-accent text-vedic-primary font-bold rounded-full hover:bg-vedic-secondaryAccent transition-all shadow-lg shadow-blue-900/20 hover:scale-105">
            Book Reading
          </Link>
        </div>

        {/* Mobile Menu Button (Off-White icon) */}
        <button className="md:hidden text-vedic-bg" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile Menu (You may need to update these classes as well) */}
      {/* ... */}
    </nav>
  );
}

export default Navbar;