import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import Tours from './tours/Tours';
import ToursDetail from './tours/ToursDetail';
import Admin from './admin/Admin';
import { fetchTours } from '../reducers/tourReducer';
import { fetchUsers, setAuthUser } from '../reducers/userReducer';
import { RootState } from '../mock/store';

function Provider() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(()=>{
      dispatch(fetchTours());
    },5000);
    dispatch(fetchUsers());
    dispatch(setAuthUser(''));
  }, []);

  const authUser = useSelector((state: RootState) => state.user.authUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<div>2222</div>} />

        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<ToursDetail />} />

        <Route path="/admin" element={authUser ? <Admin />: <Navigate to="/" replace />} />

        <Route path="/contact" element={<div>4444</div>} />
        <Route path="/login" element={<div>5555</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Provider;
