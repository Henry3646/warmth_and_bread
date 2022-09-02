import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Footer.css'

const Footer = () => {
  return (
    <div className='app__footer app__flex'>
        <div className='app__footer-container app__flex'>
            <div className='app__footer-info app__flex'>
                <a className='app__footer-info-links' href='/'>Address</a>
                <a className='app__footer-info-links' href='/'>Phone</a>
                <a className='app__footer-info-links' href='/'>Email</a>
            </div>
            <div className='app__footer-links app__flex'>
                <p>Links</p>
                <ul>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/works'>Our Work</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/donate'>Donate Now</Link></li>
                </ul>
            </div>
            <div className='app__footer-cta app__flex'>
                <h2>Call to Action</h2>
                <button>Donate Now</button>
            </div>
        </div>
        <div className='app__footer-copyright app__flex'>
            <p>Website designed with <i className="fa-regular fa-heart"></i> by Henry Arlt &nbsp; 
                <a href='https://github.com/Henry3646' target={'_blank'} alt='GitHub' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </p>
        </div>
    </div>
  )
}

export default Footer
