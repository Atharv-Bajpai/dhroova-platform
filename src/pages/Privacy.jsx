import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-vedic-bg text-slate-700 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-serif text-vedic-primary mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last Updated: December 2025</p>

        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-vedic-primary mb-2">1. Information We Collect</h2>
            <p>To provide accurate Vedic Astrology readings, we collect the following personal data via our booking forms:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Date, Time, and Place of Birth</li>
              <li>Specific questions regarding your life situation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-vedic-primary mb-2">2. How We Use Your Data</h2>
            <p>Your birth data is used <strong>solely</strong> for the purpose of calculating your astrological chart and generating your reading. We do not sell, trade, or share your personal birth details with any third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-vedic-primary mb-2">3. Payment Information</h2>
            <p>We do not store your credit card or banking details. All payments are processed securely through PayPal. Please refer to PayPal's privacy policy for details on how they handle your financial information.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-vedic-primary mb-2">4. Data Retention</h2>
            <p>Emails containing your reading are retained in our secure business email archives for follow-up purposes. You may request the deletion of your data at any time by contacting us at dhroova.work@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}