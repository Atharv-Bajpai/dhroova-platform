import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import emailjs from '@emailjs/browser';
import { ArrowLeft, CheckCircle, AlertCircle, Loader, ShieldCheck } from "lucide-react";

// --- PRICING CONFIGURATION ---
const SERVICE_PRICES = {
  "1": { name: "Precision Insight", price: "9.00" },
  "2": { name: "Prosperity & Purpose", price: "29.00" },
  "3": { name: "Heart & Harmony", price: "29.00" },
  "4": { name: "Cosmic Alignment", price: "39.00" },
  "5": { name: "The North Star", price: "49.00" }
};

export default function Booking() {
  const { serviceType } = useParams();
  const navigate = useNavigate();
  
  // --- STATE ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    question: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("idle"); // idle, processing, success
  const [errorMessage, setErrorMessage] = useState("");

  // --- UNIVERSAL PRICE MATCHER (Fixes the $9 Bug) ---
  const getServiceId = (type) => {
    if (!type) return "1"; // Default to $9 if empty

    // 1. CHECK FOR DIRECT NUMBERS (e.g., /book/5)
    if (["1", "2", "3", "4", "5"].includes(type)) {
      return type;
    }

    // 2. CHECK FOR KEYWORDS (e.g., /book/prosperity-purpose)
    const cleanType = type.toLowerCase();

    if (cleanType.includes("precision")) return "1";   // $9
    if (cleanType.includes("insight"))   return "1";   // $9
    
    if (cleanType.includes("prosperity")) return "2";  // $29
    if (cleanType.includes("purpose"))    return "2";  // $29
    
    if (cleanType.includes("heart"))    return "3";    // $29
    if (cleanType.includes("harmony"))  return "3";    // $29
    
    if (cleanType.includes("cosmic"))    return "4";   // $39
    if (cleanType.includes("alignment")) return "4";   // $39
    
    if (cleanType.includes("north")) return "5";       // $49
    if (cleanType.includes("star"))  return "5";       // $49

    return "1"; // Fallback to $9 only if nothing matches
  };

  const serviceId = getServiceId(serviceType);
  const serviceDetails = SERVICE_PRICES[serviceId];

  // --- HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    
    // Simple validation: Ensure no field is empty
    const isValid = Object.values(updatedForm).every(field => field.trim() !== "");
    setIsFormValid(isValid);
  };

  // --- PAYPAL SUCCESS HANDLER ---
  const handleApprove = async (data, actions) => {
    try {
      setErrorMessage("");
      setPaymentStatus("processing");
      
      // 1. CAPTURE THE PAYMENT
      const orderData = await actions.order.capture();
      
      console.log("Payment Successful:", orderData.id);

      // 2. SEND THE EMAILS (To You & Client)
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.fullName,
            from_email: formData.email,
            service_name: serviceDetails.name,
            payment_id: orderData.id,
            birth_date: formData.dateOfBirth,
            birth_time: formData.timeOfBirth,
            birth_place: formData.placeOfBirth,
            user_question: formData.question,
            amount_paid: serviceDetails.price
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        // If email fails, we log it but do NOT stop the success screen 
        // because the user has already paid money.
        console.error("Email failed:", emailError);
      }

      // 3. SHOW SUCCESS SCREEN
      setPaymentStatus("success");

    } catch (paymentError) {
      console.error("Payment Failed:", paymentError);
      setErrorMessage("Payment was not completed. Please try again.");
      setPaymentStatus("idle");
    }
  };

  // --- SUCCESS VIEW ---
  if (paymentStatus === "success") {
    return (
      <div className="min-h-screen bg-vedic-bg flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-vedic-surface border border-vedic-primary/20 p-8 rounded-2xl text-center shadow-2xl">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-vedic-primary mb-2">Booking Confirmed!</h2>
          <p className="text-vedic-muted mb-6">
            Thank you, {formData.fullName}. Your payment for <strong>{serviceDetails.name}</strong> was successful.
          </p>
          <p className="text-sm text-vedic-muted mb-8">
            A confirmation email has been sent to {formData.email}.
          </p>
          <button 
            onClick={() => navigate("/")}
            className="bg-vedic-primary text-vedic-bg px-6 py-3 rounded-full hover:bg-vedic-accent transition-colors w-full font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // --- BOOKING FORM VIEW ---
  return (
    <div className="min-h-screen bg-vedic-bg pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center text-vedic-muted hover:text-vedic-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        <div className="bg-vedic-surface border border-vedic-primary/10 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-vedic-primary/5 p-8 text-center border-b border-vedic-primary/10">
            <h1 className="text-3xl font-serif text-vedic-primary mb-2">Complete Your Booking</h1>
            <div className="inline-flex items-center bg-vedic-primary/10 px-4 py-1.5 rounded-full">
              <span className="text-vedic-primary font-medium">{serviceDetails.name}</span>
              <span className="mx-2 text-vedic-primary/40">•</span>
              <span className="text-vedic-accent font-bold">${serviceDetails.price} USD</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column: Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-vedic-muted mb-2 font-medium">Full Name</label>
                  <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}
                    className="w-full bg-vedic-bg border border-vedic-primary/20 rounded-lg p-3 text-vedic-primary focus:border-vedic-accent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-vedic-muted mb-2 font-medium">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full bg-vedic-bg border border-vedic-primary/20 rounded-lg p-3 text-vedic-primary focus:border-vedic-accent outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-vedic-muted mb-2 font-medium">Date of Birth</label>
                    <input required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange}
                      className="w-full bg-vedic-bg border border-vedic-primary/20 rounded-lg p-3 text-vedic-primary focus:border-vedic-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-vedic-muted mb-2 font-medium">Time</label>
                    <input required type="time" name="timeOfBirth" value={formData.timeOfBirth} onChange={handleInputChange}
                      className="w-full bg-vedic-bg border border-vedic-primary/20 rounded-lg p-3 text-vedic-primary focus:border-vedic-accent outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-vedic-muted mb-2 font-medium">Place of Birth</label>
                  <input required type="text" name="placeOfBirth" placeholder="City, Country" value={formData.placeOfBirth} onChange={handleInputChange}
                    className="w-full bg-vedic-bg border border-vedic-primary/20 rounded-lg p-3 text-vedic-primary focus:border-vedic-accent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-vedic-muted mb-2 font-medium">Your Context / Question</label>
                  <textarea required name="question" rows="4" value={formData.question} onChange={handleInputChange}
                    className="w-full bg-vedic-bg border border-vedic-primary/20 rounded-lg p-3 text-vedic-primary focus:border-vedic-accent outline-none transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Right Column: Payment */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-vedic-bg/50 p-6 rounded-xl border border-vedic-primary/10 text-center">
                  <ShieldCheck className="w-8 h-8 text-vedic-primary mx-auto mb-3" />
                  <h3 className="text-sm font-semibold text-vedic-primary mb-1">Secure Payment</h3>
                  <p className="text-xs text-vedic-muted">Processed securely by PayPal. All major cards accepted.</p>
                </div>

                {paymentStatus === "processing" ? (
                  <div className="text-center py-8">
                    <Loader className="w-8 h-8 text-vedic-accent animate-spin mx-auto mb-2" />
                    <p className="text-vedic-primary">Processing payment...</p>
                  </div>
                ) : !isFormValid ? (
                  <div className="flex flex-col items-center justify-center gap-3 p-6 bg-amber-50/10 text-amber-600 rounded-xl border border-amber-500/20 text-center">
                    <AlertCircle className="w-6 h-6" />
                    <p className="text-sm font-medium">Please complete all details to enable payment.</p>
                  </div>
                ) : (
                  <div className="relative z-0">
                    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
                      <PayPalButtons
                        style={{ layout: "vertical", shape: "rect", label: "pay" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [{
                              description: serviceDetails.name,
                              amount: { value: serviceDetails.price }
                            }]
                          });
                        }}
                        onApprove={handleApprove}
                        onError={(err) => {
                          console.error("PayPal Error:", err);
                          setErrorMessage("Payment failed. Please try again.");
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                )}
                
                {errorMessage && (
                  <div className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded border border-red-400/20">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}