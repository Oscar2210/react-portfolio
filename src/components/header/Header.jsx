import React from 'react';
import './header.css';
import CTA from './CTA';
import PROFILE from '../../assets/cv.jpg'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hola, Soy</h5>
                <h1>Oscar Zambrano</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className='me'>
                    <img src={PROFILE} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;
