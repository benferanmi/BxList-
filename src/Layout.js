import React from 'react'
import Banner from './component/Banner'
import CarListSection from './component/CarListSection'
import Footer from './component/reuseable/Footer'
import NavBars from './component/reuseable/NavBars'

const Layout = () => {
  return (
    <div className='layout'>
        <NavBars />
        <Banner />
        <CarListSection />
        <Footer />
    </div>
  )
}

export default Layout