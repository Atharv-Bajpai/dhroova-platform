import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-serif text-[#d4af37] text-lg mb-4">DHROOVA</p>
        <p className="text-xs mb-8 opacity-60">Steer through stars to your true north.</p>
        
        <div className="flex justify-center gap-6 text-xs uppercase tracking-wider">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="mailto:dhroova.work@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <p className="mt-8 text-[10px] opacity-40">© 2025 Dhroova Vedic Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
}