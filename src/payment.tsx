import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate a payment process
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="bg-white p-6">
      <h1 className="p-2 font-medium">Payment Details</h1>
      <div className="block w-full space-x-2 flex items-center bg-white justify-center border border-gray-300">
        <FaApple />
        <p>Pay</p>
      </div>
      <div className="mt-4 block space-x-2 w-full flex items-center bg-white justify-center border border-gray-300">
        <FaGoogle className="text-green-500" />
        <p>Pay</p>
      </div>
      <div className="flex items-center mt-2 w-full max-w-md mx-auto">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-sm text-black">Or pay with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <form className="max-w-md items-center mt-4">
        <label htmlFor="Card" className="mb-2 text-sm">Card Information</label>
        <div className="relative">
          <input type="card" className="block w-full p-4 text-sm text-black border border-gray-300 rounded-md focus:outline-none" placeholder="1234 1234 1234" required />
          <div className="text-black flex space-x-1 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded text-sm py-2">
            <FaCcVisa className="w-4 h-4 text-red" />
            <FaCcMastercard className="w-4 h-4 text-red" />
          </div>
        </div>
      </form>
      <div className="mt-2 flex">
        <input type="card" className="block w-full p-4 text-sm text-black border border-gray-300 focus:outline-none" placeholder="MM/YY" required />
        <input type="card" className="block w-full p-4 text-sm text-black border border-gray-300 focus:outline-none" placeholder="CVC" required />
      </div>
      <button className="block w-full px-4 py-2 items-center bg-primary text-white mt-4" onClick={handlePayment}>
        Make payment
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Payment Successful</h2>
            <p className="mb-4">Your payment was processed successfully.</p>
            <button className="bg-primary text-white px-4 py-2 rounded" onClick={closeModal}>
              Return to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
