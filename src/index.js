import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './search';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/search' element={<Search />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
