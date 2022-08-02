import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Registration from '../registration/Registration';
import { exitUser } from '../../reducers/userReducer';
import { RootState } from '../../mock/store';

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const authUser = useSelector((state: RootState) => state.user.authUser);
  const dispatch = useDispatch();

  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);     
   };

  return (
    <header className="header">
      <div className="header__logo"><Link to="../">ProjName</Link></div>
      <nav className="header__menu">
        <ul className={ isActive ? `nav-links active`: `nav-links` }>
          <Link to="../"><li>Home</li></Link>
          <Link to="../about"><li>About</li></Link>
          <Link to="../tours"><li>Tours</li></Link>
          <Link to="../history"><li>History</li></Link>
          {
            authUser ? (
              <Link to="../admin">
                <div>
                  <li>{authUser}</li>
                  <li className="header__login" onClick={() => { dispatch(exitUser()); setModalShow(false); }} aria-hidden="true">Exit</li>
                </div>
              </Link>
            ): 
            (
              <div>
                <li className="header__login" onClick={() => setModalShow(true)} aria-hidden="true">Login</li>
                <Registration show={modalShow} onHide={() => setModalShow(false)} />
              </div>
            )
          }
        </ul>
        <div className='burger' id='burger' onClick={ToggleClass}>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
