import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './core/components/layout/Navbar';
import Footer from './core/components/layout/Footer'; // Import the new Footer

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking'; // Import the Booking Page
import Privacy from './pages/Privacy'; // Import Privacy Policy
import Terms from './pages/Terms';     // Import Terms of Service

// Placeholder for future development
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-vedic-bg">
    <div className="text-center p-12 border border-vedic-primary/10 rounded-2xl bg-vedic-surface shadow-sm">
      <h1 className="text-4xl font-serif text-vedic-primary mb-4">{title}</h1>
      <p className="text-vedic-primary/60">Module coming soon...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-vedic-bg text-vedic-primary font-sans flex flex-col justify-between">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* 1. Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            
            {/* 2. The Booking System (Needs :serviceType to capture the URL) */}
            <Route path="/book/:serviceType" element={<Booking />} />
            
            {/* 3. Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* 4. Placeholders */}
            <Route path="/articles" element={<Placeholder title="Vedic Knowledge Base" />} />
            <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          </Routes>
        </main>

        {/* Global Footer (Privacy, Terms, Contact) */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;