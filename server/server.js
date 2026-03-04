const express = require("express");
const app = express();
const cors = require("cors");
// This is a test secret key. Replace with your actual Stripe Secret Key in production!
// In Amplify, you will access this via process.env.STRIPE_SECRET_KEY
const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const calculateOrderAmount = (items) => {
  // Logic to calculate price based on items
  // For this example, we just pass the amount from the frontend (Not recommended for production security)
  // In production, look up the price of 'items' in your database.
  return items.amount; 
};

app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body;

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency || "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
