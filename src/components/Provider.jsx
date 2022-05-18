import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import App from './App';
import Tours from './tours/Tours';
import ToursDetail from './tours/ToursDetail';
import Admin from './admin/Admin';
import { fetchTours } from '../reducers/tourReducer';
import { fetchUsers, setAuthUser } from '../reducers/userReducer';

function Provider() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(fetchUsers());
    dispatch(setAuthUser(''));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<div>2222</div>} />

        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<ToursDetail />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/contact" element={<div>4444</div>} />
        <Route path="/login" element={<div>5555</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Provider;
