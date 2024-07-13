import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}


const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, shipping, total }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg w-full md:w-1/3">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <p>Subtotal</p>
        <p>#{subtotal}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Shipping</p>
        <p>#{shipping}</p>
      </div>
      <hr className="border-t-2 border-black mb-2" />
      <div className="flex justify-between font-bold">
        <p>Total</p>
        <p>#{total}</p>
      </div>
      <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded" onClick={handleClick}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;

