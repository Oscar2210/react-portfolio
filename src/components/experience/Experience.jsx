import React from 'react';
import './experience.css';
import { BsCheckCircleFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Mis Habilidades</h5>
            <h2>Tecnologías</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Fronted Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Basico</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>Botstrap</h4>
                                <small className='text-light'>Basico</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/*  END OF FRONTEND */}

                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Basico</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Basico</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>MySQL / SQL</h4>
                                <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        {/* <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>Express</h4>
                                <small className='text-light'>Basico</small>
                            </div>
                        </article> */}
                        <article className='experience_details'>
                            <BsCheckCircleFill className='experience_details-icon' />
                            <div>
                                <h4>Express</h4>
                                <small className='text-light'>Basico</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Experience;
