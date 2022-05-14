import App from './App';
import Tours from '../components/tours/Tours';
import ToursDetail from '../components/tours/ToursDetail';
import Admin from './admin/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

// import{tourData} from '../mock/tours.js'
import{userData} from '../mock/users.js'
import { useDispatch } from 'react-redux';
import { fetchTours } from '../reducers/tourReducer';

const Provider = () =>{
    // const tours = useSelector((state) => state.tour.tours);
    const dispatch = useDispatch();

    // const [tours, setTours] = useState([]);
    const [users, setUsers] = useState([]);
    const [authUser, setAuthUser] = useState('');

    useEffect(()=>{
        dispatch(fetchTours())
        // setTours(tourData)
        setUsers(userData)
        setAuthUser('')
    },[]);
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App users={users} setUsers={setUsers} setAuthUser={setAuthUser} authUser={authUser}/>}/>
                <Route path="/about" element={<div>2222</div>}/>

                <Route path="/tours" element={<Tours authUser={authUser}/>}/>
                <Route path="/tours/:id" element={<ToursDetail authUser={authUser}/>}/>

                <Route path="/admin" element={<Admin authUser={authUser} />}/>

                <Route path="/contact" element={<div>4444</div>}/>
                <Route path="/login" element={<div>5555</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Provider;