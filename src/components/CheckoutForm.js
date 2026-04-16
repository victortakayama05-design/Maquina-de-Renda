'use client';

import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard?success=true`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // The user will be redirected to the return_url if successful
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
      <button 
        disabled={isLoading || !stripe || !elements} 
        id="submit" 
        className="btn-primary"
        style={{ 
          width: '100%', 
          marginTop: '24px', 
          backgroundColor: '#ffffff', 
          color: '#000000', 
          fontSize: '16px', 
          fontWeight: 700 
        }}
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner">Processando...</div> : "PAGAR R$ 497,00"}
        </span>
      </button>
      {errorMessage && <div id="payment-message" style={{ color: 'var(--error)', marginTop: '16px', fontSize: '14px', textAlign: 'center' }}>{errorMessage}</div>}
    </form>
  );
}
