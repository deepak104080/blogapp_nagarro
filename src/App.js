import './App.css';
import Home from './Home';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './shared/Header';
import Menubar from './shared/Menubar';
import Footer from './shared/Footer';

import APICall from './APICall';

import Services from './Services';
import React from 'react';

export const ContextData = React.createContext();

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <ContextData.Provider value={{ name: 'loggedinname' }}>

            <Header />
            <Menubar />


            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/apicall' element={<APICall />} />
              <Route path='/' element={<Home />} />
            </Routes>

            <Footer />
          </ContextData.Provider>
        </BrowserRouter>
      </div>

    </>
  )

}

export default App;

