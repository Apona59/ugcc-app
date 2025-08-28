import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <header className="Header" >
        <div>
            <img className="logo" src="/ugcc-logo.png" alt="logo"/>
        </div>
        <div className="menu">
            <nav>
                <div className="navBar">
                    <Link to="/" className="navButton">Home</Link>

                    <div className="dropdown">
                        <span className="navButton">About Us ▾</span>
                        <div className="dropMenu">
                            <Link to="/About">About</Link>
                            <Link to="/Contact">Contact</Link>
                            <Link to="/Constitution">Constitution</Link>
                        </div>
                    </div>
                    <Link to='/Execs' className='navButton'>Executives</Link>
                    
                    <Link to="/Links" className="navButton">Links</Link>

                    <Link to="/Login" className="navButton">Login</Link>
                </div>
            </nav>
            </div>

    </header>
    );
}