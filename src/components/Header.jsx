import{ Link } from 'react-router-dom';
import { useState } from 'react';
import Registration from './registration/Registration';
import { useSelector, useDispatch } from 'react-redux';
import { exitUser } from '../reducers/userReducer';


const Header = () =>{
    const [modalShow, setModalShow] = useState(false);
    // const user = ""
    const authUser = useSelector((state) => state.user.authUser);
    const dispatch = useDispatch();

    return(
        <header className='header'>
            <div className="header__logo"><Link to='../'>ProjName</Link></div>
            <nav className='header__menu'>
                <ul>
                    <Link to='../'><li>Home</li></Link>
                    <Link to='../about'><li>About</li></Link>
                    <Link to='../tours'><li>Tours</li></Link>
                    <Link to='../contact'><li>Contact</li></Link>
                    {
                        authUser ? (<Link to='../admin'><div><li>{authUser}</li><li className='header__login' onClick={() => {dispatch(exitUser())}}>Exit</li></div></Link>) 
                        : (<div><li className='header__login' onClick={() => setModalShow(true)}>Login</li>
                        <Registration show={modalShow} onHide={() => setModalShow(false)}/></div>)
                    }
                </ul>
            </nav>
      </header>
    );
};

export default Header;