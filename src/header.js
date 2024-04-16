import React from 'react';
import { Link } from 'react-scroll';
import './header.css';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link activeClass="active" smooth spy to="home">Home</Link></li>
                    <li><Link activeClass="active" smooth spy to="services">Services</Link></li>
                    <li><Link activeClass="active" smooth spy to="resources">Resources</Link></li>
                    <li><Link activeClass="active" smooth spy to="contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;