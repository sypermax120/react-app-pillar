import App from './App';
import Header from './Header';
import Tours from './Tours';
import ToursDetail from './ToursDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import{data} from '../mock/tours.js'

const Provider = () =>{
    const [tours, setTours] = useState([]);
    useEffect(()=>{
        setTours(data)
    },[]);

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/home" element={<App />}/>
                <Route path="/about" element={<div>2222</div>}/>

                <Route path="/tours" element={<div className='App'><div className='App__first'><Header /><Tours tours={tours}/></div></div>}/>
                <Route path="/tours/:id" element={<div className='App'><div className='App__first'><Header /><ToursDetail tours={tours}/></div></div>}/>

                <Route path="/contact" element={<div>4444</div>}/>
                <Route path="/login" element={<div>5555</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Provider;