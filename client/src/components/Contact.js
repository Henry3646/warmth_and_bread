import React, { useState } from 'react'
import axios from 'axios'
import './Styles/Contact.css'
import testimage from './assets/testimg.jpeg'

const Contact = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        content: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();

        const newContact = {
            name: input.name,
            email: input.email,
            content: input.content
        }
        axios.post('/create', newContact)
    }
  return (
    <div className='app__contact app__flex'>
        <div className='app__contact-image app__flex'>
            <img src={testimage} alt='test'/>
            
        </div>
        <div className='app__contact-container app__flex'>
        <div className='app__contact-text app__flex'>
            <h1>Call to Action</h1>
            <p>Put some text here to get people to contact you or to donate. Say some nice things about the people you help and where things go.</p>
        </div>
        <div className='app__contact-form app__flex'>
           
                <form className="app__flex">
                    <div className='app__contact-small app__flex'>                    
                        <input onChange={handleChange} name="name" className="p-text" placeholder="Your Name" value={input.name}></input>                   
                        <input onChange={handleChange} name="email" className="p-text" placeholder="Your Email" value={input.email}></input>
                    </div>
                    <div className="app__contact-textarea app__flex">
                        <textarea onChange={handleChange} name="content" className="p-text" placeholder="Your Message" value={input.content}></textarea>
                    </div>
                        <button onClick={handleClick} className="p-text">Send Message</button>
                </form>
            
        </div>
        </div>
    </div>
  )
}

export default Contact