import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-vedic-bg text-slate-700 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-serif text-vedic-primary mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Last Updated: December 2025</p>

        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-vedic-primary mb-2">1. Nature of Services</h2>
            <p>Our services are based on the ancient principles of Vedic Astrology (Jyotish). While we strive for accuracy, astrology is an interpretive art. Our readings are for guidance and entertainment purposes only and should not replace professional medical, legal, or financial advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-vedic-primary mb-2">2. Refunds & Cancellations</h2>
            <p>Non refundable because of the efforts involved in preparing personalized astrological readings.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-vedic-primary mb-2">3. User Responsibility</h2>
            <p>You agree to provide accurate birth details. We are not responsible for readings generated based on incorrect birth time or date provided by the user.</p>
          </section>
        </div>
      </div>
    </div>
  );
}