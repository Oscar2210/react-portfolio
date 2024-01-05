import React from 'react';
import './footer.css';
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer_logo'>DHALIS</a>
            <ul className='permalinks'>
                <li><a href='/'>Inicio</a></li>
                <li><a href='#about'>Acerca</a></li>
                <li><a href='#experience'>Experiencia</a></li>
                {/* <li><a href='#services'>Services</a></li> */}
                <li><a href='#portfolio'>Portfolio</a></li>
                {/* <li><a href='#testimonies'>Testimonials</a></li> */}
                <li><a href='#contact'>Contacto</a></li>
            </ul>

            <div className='footer_socials'>
                <a href="https://www.facebook.com/oscarZ1729" target='_blank' rel="noreferrer"><GrFacebook /></a>
                <a href="https://www.instagram.com/lacroix1022/" target='_blank' rel="noreferrer"><GrInstagram /></a>
                <a href="https://twitter.com/Oscarhzb" target='_blank' rel="noreferrer"><GrTwitter /></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; DhalisDev Design.</small>
            </div>
        </footer>
    );
}

export default Footer;
