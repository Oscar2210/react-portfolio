import React from 'react';
import './about.css'
import ME from '../../assets/me.jpg'
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

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
                            <h5>Experience</h5>
                            <small>1 Year Working</small>
                        </article>

                        <article className='about_card'>
                            <FaUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>50+ Worldwide</small>
                        </article>

                        <article className='about_card'>
                            <FaFolderOpen className='about_icon' />
                            <h5>Projects</h5>
                            <small>25 Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad et culpa dolor ipsum, impedit iusto expedita similique deserunt iste, magni earum obcaecati, officiis aperiam in?
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;
