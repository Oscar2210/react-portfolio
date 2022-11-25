import React from 'react';
import './testimonies.css';
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import AVATAR5 from '../../assets/avatar5.jpg'
import AVATAR6 from '../../assets/avatar6.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVATAR1,
        name: 'Dino Bevier',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet, quidem repellat eaque nemo ad, quae magni tenetur adipisci modi. Sed voluptatum, cumque adipisci nulla cum beatae quaerat iste.'
    },
    {
        avatar: AVATAR4,
        name: 'Jutta Casilla',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet, quidem repellat eaque nemo ad, quae magni tenetur adipisci modi. Sed voluptatum, cumque adipisci nulla cum beatae quaerat iste.'
    },
    {
        avatar: AVATAR3,
        name: 'Guillermo Smetters',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet, quidem repellat eaque nemo ad, quae magni tenetur adipisci modi. Sed voluptatum, cumque adipisci nulla cum beatae quaerat iste.'
    },
    {
        avatar: AVATAR2,
        name: 'Kathlyn Mausolf',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet, quidem repellat eaque nemo ad, quae magni tenetur adipisci modi. Sed voluptatum, cumque adipisci nulla cum beatae quaerat iste.'
    },
    {
        avatar: AVATAR5,
        name: 'Felton Lorang',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet, quidem repellat eaque nemo ad, quae magni tenetur adipisci modi. Sed voluptatum, cumque adipisci nulla cum beatae quaerat iste.'
    },
    {
        avatar: AVATAR6,
        name: 'Rowena Doakes',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet, quidem repellat eaque nemo ad, quae magni tenetur adipisci modi. Sed voluptatum, cumque adipisci nulla cum beatae quaerat iste.'
    }
]


const Testimonies = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client_avatar">
                                    <img src={avatar} alt='' />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonies;
