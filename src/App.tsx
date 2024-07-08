import './index.css'
import React from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
 
import Cart from './cart'
import Checkout from './checkout'
import ProductPage from './productpage'

const App:React.FC =() => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<ProductPage/>} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/checkout' element = { <Checkout />} />
      </Routes>
    </Router>
  )
}

export default App;
