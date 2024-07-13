import React, { useState, useEffect } from 'react';

interface QuantityComponentProps {
  initialQuantity?: number;
  onQuantityChange?: (newQuantity: number) => void;
}

const QuantityComponent: React.FC<QuantityComponentProps> = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    onQuantityChange?.(quantity);
  }, [quantity, onQuantityChange]);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className=" flex items-center  border">
      <button 
        className="px-2 py-1 border bg-secondary" 
        onClick={handleIncrement}
      >+</button>
      <span className="px-3">{quantity}</span>
      <button 
        className="px-2 py-1 border bg-secondary" 
        onClick={handleDecrement}
      >-</button>
    </div>
  );
};

export default QuantityComponent;
