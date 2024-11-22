import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Auth from './Pages/Auth/Auth'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51QN9BGA9PEMJhTAamC1DiYw2eFh5jDnRMWXAiDkFSfrdTN81ssFRXuCvgbh3L0IC2oHJhonnSNZe93D4THUR7Y1a00r5iMXhkZ');
export const Routing = () => {

  return (
    <div>
        <Router future={{ v7_relativeSplatPath: true }}>
          <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/payment" element={
            <Elements stripe={stripePromise}>
              <Payment/>
            </Elements>
            }/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="category/:categoryName" element={<Results/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products/:productId" element={<ProductDetails/>}/>
          </Routes>
        </Router>
        
    </div>
  )
}
