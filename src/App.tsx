import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductPage from './productpage';
import Cart from './cart';
import Checkout from './checkout';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
  );
};

export default App;

