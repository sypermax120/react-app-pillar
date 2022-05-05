import{Link} from 'react-router-dom';

const Header = () =>{
    return(
        <header className='header'>
            <div className="header__logo"><Link to='../'>ProjName</Link></div>
            <nav className='header__menu'>
                <ul>
                    <Link to='../home'><li>Home</li></Link>
                    <Link to='../about'><li>About</li></Link>
                    <Link to='../tours'><li>Tours</li></Link>
                    <Link to='../contact'><li>Contact</li></Link>
                    <Link to='../login'><li className='header__login'>Login</li></Link>
                </ul>
            </nav>
      </header>
    );
};

export default Header;