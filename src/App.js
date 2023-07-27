import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import "./styles/index.scss";


const App = () => {
    useEffect(() => {
        alert("Trouves ton pays sur ce site");
    })
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App