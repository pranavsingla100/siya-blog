import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Footer from './components/FooterCom'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
