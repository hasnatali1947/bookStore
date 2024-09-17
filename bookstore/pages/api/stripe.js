import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51O6bQ9GaFip5Wq2GUXzRfLsrWso8G4waFNlhdG6177HzuGU2B4NnLMK6gIThD1pMjEf2ArcCPvwMvJFKhimMcDdz00UP42h0Yn');

export default async (req, res) => {
  console.log(req.body); 
  const { itemPrice, itemName } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: itemName,
            },
            unit_amount: Math.round(itemPrice * 100), 
          },
          quantity: 1,
        },
      ],
      // success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}&package=${itemName}`,
      success_url: `http://localhost:3000`,
      cancel_url: `http://localhost:3000`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
