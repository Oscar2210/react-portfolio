import React from 'react'
import { GrLinkedin, GrGithub, GrDribbble } from 'react-icons/gr'

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="https://www.linkedin.com/in/oscarzambrano1729/" target="_blank" rel="noreferrer"><GrLinkedin /></a>
            <a href="https://github.com/Oscar2210" target="_blank" rel="noreferrer"><GrGithub /></a>
            {/* <a href="https://dribble.com/" target="_blank" rel="noreferrer"><GrDribbble /></a> */}
        </div>
    )
}

export default HeaderSocial