import React from 'react';
import './portfolio.css';
//import IMG1 from '../../assets/portfolio1.jpg'
//import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/Pokedex.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/pokeJS.jpeg'
//import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    // {
    //     id: 1,
    //     image: IMG1,
    //     title: 'Youtube Clone Web Site Project',
    //     github: 'https://github.com/Oscar2210/youtube_clone',
    //     demo: 'https://youtube.com'
    // },
    // {
    //     id: 2,
    //     image: IMG2,
    //     title: 'Chat App project with Google login',
    //     github: 'https://github.com/Oscar2210/',
    //     demo: 'https://chat-app-8e15d.web.app/'
    // },
    {
        id: 3,
        image: IMG3,
        title: 'Pokedex => (ReactJS)',
        github: 'https://github.com/Oscar2210/pokedexRJS',
        demo: 'https://pokeapi1729.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Template Web News => (HTML,CSS).',
        github: 'https://github.com/Oscar2210/NewsWeb',
        demo: 'https://webnews1729.netlify.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Pokedex => (JS, HTML, CSS)',
        github: 'https://github.com/Oscar2210/',
        demo: 'https://pokedexjs2210.netlify.app/'
    },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'Weather app',
    //     github: 'https://github.com/Oscar2210/',
    //     demo: 'https://www.accuweather.com/es/'
    // }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mis Proyectos Personales</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio_container'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio_item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;
