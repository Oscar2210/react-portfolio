import React from 'react';
import './about.css'
import ME from '../../assets/me.jpg'
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>
            <h5>Conoceme</h5>
            <h2>Acerca de Mi</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className="about_me-image">
                        <img src={ME} alt="AboutImage" />
                    </div>
                </div>

                <div className='about_content'>
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experiencia</h5>
                            <small>15 Años como Tecnólogo en sistemas, soporte de aplicaciones web, escritorio, redes e informática en general</small>
                        </article>

                        <article className='about_card'>
                            <FaUsers className='about_icon' />
                            <h5>Habilidades</h5>
                            <small><ul>
                                <li>• Capacidad de liderazgo</li>
                                <li>• Trabajo en equipo</li>
                                <li>• Comunicación efectiva</li>
                                <li>• Resolución de problemas</li>
                            </ul>
                            </small>
                        </article>

                        <article className='about_card'>
                            <FaFolderOpen className='about_icon' />
                            <h5>Certificados</h5>
                            <small>
                                <ul>
                                    <li>• Tecnólogo en Análisis y Desarrollo de Aplicaciones Web</li>
                                    <li>• Diplomado en Desarrollo de Aplicaciones WEB 800 Hrs. (Ministerio TIC)</li>
                                    <li>• Introduction to Front-End Development (Meta)</li>
                                    <li>• GitHub para programadores (Linkedin Learning)</li>
                                    <li>• Azure: Fundamentos de la nube de Microsoft (Linkedin Learning)</li>
                                </ul>
                            </small>
                        </article>
                    </div>

                    <p>
                        Soy un programador junior apasionado y altamente motivado sin
                        experiencia laboral previa en el campo de la programación. Busco
                        oportunidades para aprender y destacar en el desarrollo de software, con
                        un enfoque en la programación web y el desarrollo movil.
                    </p>

                    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
                </div>
            </div>
        </section>
    );
}

export default About;
