import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useEffect, useState } from 'react';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function App() {

  const [clientSecret, setClientSecret] = useState('');

  const price = 54000;
  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });

  }, [price]);

  if (clientSecret) {
    const options = {
      // passing the client secret obtained in step 3
      clientSecret: clientSecret,
      // Fully customizable with appearance API.
      appearance: {
        theme: 'stripe'
      },
    };

    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>

    );

  }


};


export default App;
