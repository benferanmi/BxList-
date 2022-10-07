import Layout from './Layout';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact';
import Profile from './pages/Profile';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={ <Layout/>} />
          <Route path='contact' element={ <Contact/>} />
          <Route path='profile' element={ <Profile />} />
      </Routes>
    </>
  );
}

export default App;
