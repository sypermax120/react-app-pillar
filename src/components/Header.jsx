import{ Link } from 'react-router-dom';
import { useState } from 'react';
import Registration from './registration/Registration';


const Header = ({users, setUsers, setAuthUser, authUser}) =>{
    // console.log(props)
    const [modalShow, setModalShow] = useState(false);
    // const user = ""
    
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
                        authUser ? (<Link to='../admin'><li>{authUser}</li></Link>) : (<div><li className='header__login' onClick={() => setModalShow(true)}>Login</li>
                        <Registration users={users} setUsers={setUsers} setAuthUser={setAuthUser} show={modalShow} onHide={() => setModalShow(false)}/></div>)
                    }
                </ul>
            </nav>
      </header>
    );
};

export default Header;