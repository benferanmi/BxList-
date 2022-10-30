import React from "react";
import { useEffect } from "react";
import Banner from "./component/Banner";
import CarListSection from "./component/CarListSection";
import Signup from "./component/registration/Signup";
import Footer from "./component/reuseable/Footer";
import NavBars from "./component/reuseable/NavBars";

const Layout = () => {

    let Results = JSON.parse(localStorage.getItem('signup'))

    console.log(Results)

    if(Results) {
      return <div className="layout">
        <NavBars />
        <Banner />
        <CarListSection />
        <Footer />                                                                                                                                                                                                                                                                                                                                                                                                        
      </div>
    } else {
      return <Signup />
    }
  
}
export default Layout