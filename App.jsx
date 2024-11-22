import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Component/Header/Header'
import CarouselComponent from './Component/Carousel/CarouselComponent'
import Category from './Component/Category/Category'
import Product from './Component/Product/Product'
import { Routing } from './Routing'
import Loader from './Component/Loader/Loader'
import { DataContext } from './Component/DataProvider/DataProvider'
import { auth } from './utils/firebase'
import { Type } from './utils/action.type'

function App() {
  const[{user},dispatch]=useContext(DataContext)
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    dispatch({
      type:Type.SET_USER,
      user:authUser
    })

    }else{
      dispatch({
        type:Type.SET_USER,
        user:null
      })
  }
})
},[])
  return (
    <>
    <Routing/>
    
     {/* <Loader/> */}
    </>
  )
}

export default App
