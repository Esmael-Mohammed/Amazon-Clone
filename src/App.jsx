import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Component/Header/Header'
import CarouselComponent from './Component/Carousel/CarouselComponent'
import Category from './Component/Category/Category'
import Product from './Component/Product/Product'
import { Routing } from './Routing'
import Loader from './Component/Loader/Loader'

function App() {

  return (
    <>
    <Routing/>
    
     {/* <Loader/> */}
    </>
  )
}

export default App
