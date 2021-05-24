import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    }

    useEffect(() => { showButton();}, []);

    window.addEventListener('resize', showButton);

    return (
          <nav className= "navbar">
              <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    Grenville<i className='fas fa-leaf' />
                </Link>
                <div className= 'menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/Calculator' className='nav-links' onClick={closeMenu}>
                      Calculator
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Comparison' className='nav-links' onClick={closeMenu}>
                      Comparison 
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Pro-Tips' className='nav-links' onClick={closeMenu}>
                      Pro Tips
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Feature-TBD' className='nav-links' onClick={closeMenu}>
                      Feature TBD
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                      Sign In
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN IN </Button>}
              </div>
          </nav>
    )
}

export default Navbar;
