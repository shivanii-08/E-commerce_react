import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Product from './pages/Product'
import mainStore from './Store'
import {Provider} from "react-redux"
import Productdetails from './Components/Productdetails'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Provider store={mainStore}> 
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productdetails' element={<Productdetails />} />
        </Routes>
        <Footer />
       </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
