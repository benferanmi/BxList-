import Layout from './Layout';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import CartPage from './pages/CartPage';
// import User from './component/registration/User';
import Signup from './component/registration/Signup';
import Login from './component/registration/Login';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={ <Layout/>} />
          <Route path='contact' element={ <Contact/>} />
          <Route path='profile' element={ <Profile />} />
          <Route path='cart' element={ <CartPage />} />
          {/* <Route path='user' element={ <User />} /> */}
          <Route path='signup' element={ <Signup />} />
          <Route path='login' element={ <Login />} /> 
      </Routes>
    </>
  );
}

export default App;
