import React from 'react';
import { ArrowRight, Star, Heart, Briefcase, Users, Map, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: "Precision Insight",
    subtitle: "Single Question Guidance",
    description: "Clarity when you need it most. A direct, calculated answer to your most pressing concern—be it a specific dilemma or a timing query.",
    price: 9,
    originalPrice: 19,
    tags: ["Love", "Career", "Education", "Muhurta"],
    icon: <Sparkles className="w-8 h-8" />,
    link: "/book/1" // CHANGED: Uses ID 1 (Matches $9)
  },
  
  {
    id: 2,
    title: "Prosperity & Purpose",
    subtitle: "Career & Finance Deep Dive",
    description: "Unlock your professional potential. We analyze your wealth yogas and career houses to determine your best path, industry, and timing for success.",
    price: 29,
    originalPrice: 49,
    tags: ["Success", "Wealth", "Job Timing", "Business"],
    icon: <Briefcase className="w-8 h-8" />,
    link: "/book/2" // CHANGED: Uses ID 2 (Matches $29)
  },
  {
    id: 3,
    title: "Heart & Harmony",
    subtitle: "Personal Relationship Insight",
    description: "Understand your own heart. A deep dive into your 7th House to reveal relationship patterns, emotional needs, and the timing of significant unions.",
    price: 29,
    originalPrice: 49,
    tags: ["Marriage Timing", "Patterns", "Soulmates"],
    icon: <Heart className="w-8 h-8" />,
    link: "/book/3" // CHANGED: Uses ID 3 (Matches $29)
  },
  {
    id: 4,
    title: "Cosmic Alignment",
    subtitle: "Compatibility Analysis (Synastry)",
    description: "Two charts, one story. We overlay your chart with a partner’s to assess synergy, conflict points, and long-term potential.",
    price: 39,
    originalPrice: 59,
    tags: ["Synergy", "Conflict", "Longevity"],
    icon: <Users className="w-8 h-8" />,
    link: "/book/4" // CHANGED: Uses ID 4 (Matches $39)
  },
  {
    id: 5,
    title: "The North Star",
    subtitle: "Whole Life Chart Reading",
    description: "The ultimate map of your destiny. A comprehensive analysis of every major area of your life—covering past, present, and future timelines.",
    price: 49,
    originalPrice: 79,
    tags: ["Life Purpose", "Transits", "Remedies", "Health"],
    icon: <Map className="w-8 h-8" />,
    link: "/book/5", // CHANGED: Uses ID 5 (Matches $49)
    highlight: true 
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-vedic-bg pt-28 pb-20 px-4">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-accent mb-6">
          Sacred Offerings
        </h1>
        <p className="text-lg text-vedic-primary/80 leading-relaxed">
          Select the guidance that resonates with your current journey. <br className="hidden md:block"/>
          All readings are personally analyzed using traditional Vedic calculations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className={`
              relative flex flex-col p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2
              ${service.highlight 
                ? 'bg-vedic-primary/5 border-vedic-accent shadow-2xl shadow-vedic-accent/10 lg:col-span-1 lg:row-span-2' 
                : 'bg-vedic-surface border-vedic-primary/10 hover:border-vedic-accent/50 hover:shadow-xl'
              }
            `}
          >
            {/* Optional 'Most Popular' Badge for the Highlighted item */}
            {service.highlight && (
              <div className="absolute top-0 right-0 bg-vedic-accent text-vedic-bg text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                Premium Choice
              </div>
            )}

            {/* Icon & Title */}
            <div className={`mb-6 p-3 rounded-full w-fit ${service.highlight ? 'bg-vedic-accent text-vedic-bg' : 'bg-vedic-bg text-vedic-accent border border-vedic-primary/20'}`}>
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-vedic-primary mb-1">
              {service.title}
            </h3>
            <p className="text-sm font-medium text-vedic-accent uppercase tracking-wider mb-4">
              {service.subtitle}
            </p>
            
            <p className="text-vedic-primary/70 mb-6 flex-grow leading-relaxed">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium px-2 py-1 bg-vedic-bg border border-vedic-primary/10 rounded text-vedic-primary/60">
                  {tag}
                </span>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="mt-auto border-t border-vedic-primary/10 pt-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-vedic-primary">${service.price}</span>
                <span className="text-lg text-vedic-primary/40 line-through decoration-1">${service.originalPrice}</span>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  Save ${service.originalPrice - service.price}
                </span>
              </div>
              
              <Link 
                to={service.link}
                className={`
                  w-full inline-flex justify-center items-center gap-2 py-3 rounded-lg font-bold transition-all
                  ${service.highlight 
                    ? 'bg-vedic-accent text-vedic-primary hover:bg-vedic-secondaryAccent' 
                    : 'border-2 border-vedic-primary text-vedic-primary hover:bg-vedic-primary hover:text-vedic-bg'
                  }
                `}
              >
                Book Reading <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}

      </div>

      {/* Trust Footer */}
      <div className="mt-20 text-center border-t border-vedic-primary/10 pt-8">
         <p className="text-sm text-vedic-primary/50 uppercase tracking-widest flex items-center justify-center gap-2">
            <Star className="w-4 h-4" /> 100% Confidential & Private Readings
         </p>
      </div>

    </div>
  );
}