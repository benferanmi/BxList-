import Layout from './Layout';
import React from 'react';
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={ <Layout/>} />
      </Routes>
    </>
  );
}

export default App;
