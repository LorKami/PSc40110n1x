import React from 'react'
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../Socialbar/Socialbar.css'

const Socialbar = () => {
    return (
        <div>
            <div className='SocialBar'>
                <div className='Socials'>
                    <a href='https://twitter.com/scrollonyx' target='_blank'><FaXTwitter style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                    <a href='https://t.me/ScrollOnyx' target='_blank'><FaTelegramPlane style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                    <a href='https://scrollonyx.gitbook.io/scrollonyx/' target='_bank'><FaGithub style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                </div>
            </div>
        </div>
    )
}

export default Socialbar