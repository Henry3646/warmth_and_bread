import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Header.css'

const Header = () => {
  return (
    <div className='app__header app__flex'>
        <div className='app__header-title app__flex'>Warmth and Bread from Jesus' Hands</div>
        <div className='app__header-container app__flex'>
            <div className='app__header-logo'>
                <a href='/'>Warmth <br /> & <br /> Bread</a>
            </div>
            <div className='app__header-nav'>
                <nav>
                    <ul>
                        <Link to="/about">
                            <div className='app__header-nav-linkitem'>
                                About Us
                            </div>
                        </Link>
                        <Link to="/works">
                            <div className='app__header-nav-linkitem'>
                                Our Work
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className='app__header-nav-linkitem'>
                                Contact Us
                            </div>                        
                        </Link>
                        <Link to="/donate">
                            <div className='app__header-nav-linkitem'>
                                Donate Now
                            </div>                        
                        </Link>    
                        <a href="https://www.facebook.com/Warmth-and-Bread-from-Jesus-Hands-100576069049774/" target={'_blank'} alt="Facebook" rel="noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href='https://www.instagram.com/warmth.and.bread/' target={'_blank'} alt="Instagram" rel='noreferrer'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>         
                    </ul>
                    
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header