export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { serviceId } = req.body;

  // 1. SECURE PRICING MAP (Updated with your screenshot prices)
  const pricing = {
    "1": { title: "Precision Insight (Single Q)", price: "9.00" },
    "2": { title: "Prosperity & Purpose (Career)", price: "29.00" },
    "3": { title: "Heart & Harmony (Love)", price: "29.00" },
    "4": { title: "Cosmic Alignment (Compatibility)", price: "39.00" },
    "5": { title: "The North Star (Whole Life)", price: "49.00" }
  };

  const selectedService = pricing[serviceId];

  if (!selectedService) {
    return res.status(400).json({ error: "Invalid Service ID" });
  }

  try {
    // 2. Get Access Token from PayPal
    const auth = Buffer.from(
      process.env.VITE_PAYPAL_CLIENT_ID + ":" + process.env.PAYPAL_CLIENT_SECRET
    ).toString("base64");

    const tokenResponse = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: { Authorization: `Basic ${auth}` },
    });
    
    const tokenData = await tokenResponse.json();

    // 3. Create Order
    const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          description: selectedService.title,
          amount: { currency_code: "USD", value: selectedService.price }
        }],
      }),
    });

    const order = await response.json();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}