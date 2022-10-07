import Layout from './Layout';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact';
import Map from './component/reuseable/Map';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={ <Layout/>} />
          <Route path='contact' element={ <Contact/>} />
          <Route path='map' element={ <Map/>} />

      </Routes>
    </>
  );
}

export default App;
