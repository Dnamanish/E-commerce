import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'

const Layout = () => {

  const location = useLocation();

  const isHomePage = location.pathname === '/'
  return (
    <>
      <Navbar></Navbar>
      {isHomePage && <Hero />}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Layout