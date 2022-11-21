import React  from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    
  return (
    <form className='flex flex-col justify-center'>
      <PaymentElement />
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5'>PAY</button>
    </form>
  );
};

export default CheckoutForm;