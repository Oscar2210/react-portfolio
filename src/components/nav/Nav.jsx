import React from 'react';
import './nav.css';
import { FaHome, FaRegAddressBook } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { TiMessages } from 'react-icons/ti'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegAddressBook /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiNotebook /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerService2Fill /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages /></a>
        </nav>
    );
}

export default Nav;
