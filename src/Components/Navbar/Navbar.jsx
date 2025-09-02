import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = ({ user, setShowNotes }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <RouterLink to="/">
        <img src={logo} alt="" height={100} width={100} />
      </RouterLink>
      <ul>
        <li>
          <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <button className="btn" onClick={() => setShowNotes(true)}>upload notes</button>
        </li>
        <li className="btn">
          <ScrollLink to="title" smooth={true} offset={0} duration={500}>
            catagory
          </ScrollLink>
        </li>
        {user ? (
          <li>
            <div className="user-icon">{user.username.charAt(0)}</div>
          </li>
        ) : (
          <>
            <li>
              <RouterLink to="/login">
                <button className="btn">login</button>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/login">
                <button className="btn">signup</button>
              </RouterLink>
            </li>
          </>
        )}
        <li>
          <ScrollLink to="contact" smooth={true} offset={0} duration={500}>
            <button className="btn">Contact us</button>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
