import App from './App';
import Tours from '../components/tours/Tours';
import ToursDetail from '../components/tours/ToursDetail';
import Admin from './admin/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

// import { userData } from '../mock/users.js'
import { useDispatch } from 'react-redux';
import { fetchTours } from '../reducers/tourReducer';
import { fetchUsers, setAuthUser } from '../reducers/userReducer';

const Provider = () =>{
    const dispatch = useDispatch();

    // const [users, setUsers] = useState([]);
    // const [authUser, setAuthUser] = useState('');

    useEffect(()=>{
        dispatch(fetchTours())
        dispatch(fetchUsers())
        dispatch(setAuthUser(''))
        // setUsers(userData)
        // setAuthUser('')
    },[]);
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/about" element={<div>2222</div>}/>

                <Route path="/tours" element={<Tours />}/>
                <Route path="/tours/:id" element={<ToursDetail />}/>

                <Route path="/admin" element={<Admin />}/>

                <Route path="/contact" element={<div>4444</div>}/>
                <Route path="/login" element={<div>5555</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Provider;