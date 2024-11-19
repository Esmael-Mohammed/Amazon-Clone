import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Signup from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetails from './Pages/ProductDetails/ProductDetails'

export const Routing = () => {
  return (
    <div>
        <Router future={{ v7_relativeSplatPath: true }}>
          <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/auth" element={<Signup/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="category/:categoryName" element={<Results/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products/:productId" element={<ProductDetails/>}/>
          </Routes>
        </Router>
        
    </div>
  )
}
