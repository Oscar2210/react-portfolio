import React from 'react';
import './footer.css';
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer_logo'>DHALIS</a>
            <ul className='permalinks'>
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonies'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer_socials'>
                <a href="https://facebook.com"><GrFacebook /></a>
                <a href="https://instagram.com"><GrInstagram /></a>
                <a href="https://twitter.com"><GrTwitter /></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; DHALIS Design. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
