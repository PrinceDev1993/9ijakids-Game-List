import React from 'react'
import './Footer.css'
import {FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiNintendogamecube} from 'react-icons/si'

const Footer = () => {
    return (
        <div className='footer'>
            <p>9ijakids Game List <SiNintendogamecube /></p>
            <p>
                <FaFacebook className='socialMedia' />
                <AiFillTwitterCircle  className='socialMedia'/>
                <FaInstagram  className='socialMedia'/>
                <FaPinterest className='socialMedia' />
            </p>
        </div>
    )
}

export default Footer
