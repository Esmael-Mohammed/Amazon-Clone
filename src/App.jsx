import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Component/Header/Header'
import CarouselComponent from './Component/Carousel/CarouselComponent'
import Category from './Component/Category/Category'

function App() {

  return (
    <>
    <Header/>
    <CarouselComponent/>
    <Category/>
    </>
  )
}

export default App
