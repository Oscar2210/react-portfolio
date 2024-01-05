import React, { useRef } from 'react';
import './contact.css';
import { TfiEmail } from 'react-icons/tfi'
import { SiMessenger, SiWhatsapp } from 'react-icons/si'
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xg0yjus', 'template_c8qdc4w', form.current, 'TLU4GVXmJeAyNEMcS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Ponte en Contacto</h5>
            <h2>Escribeme</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <TfiEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>dhalis1729@gmail.com</h5>
                        <a href="mailto:dhalis1729@gmail.com" target='_blank' rel="noreferrer">Envia un mensaje</a>
                    </article>
                    <article className='contact_option'>
                        <SiMessenger className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>DhalisDev</h5>
                        <a href="https://m.me/oscarZ1729" target='_blank' rel="noreferrer">Envia un mensaje</a>
                    </article>
                    <article className='contact_option'>
                        <SiWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>

                        <a href="https://api.whatsapp.com/send?phone=34642094460" target='_blank' rel="noreferrer">Envia un mensaje</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Tu Nombre' required />
                    <input type="email" name='email' placeholder='Tu email' required />
                    <textarea name="message" rows="7" placeholder='Deja tu mensaje' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
