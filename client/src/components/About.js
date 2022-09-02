import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Styles/About.css'

const About = () => {

  const [texts, setTexts] = useState([
    {
      name: "",
      content: "",
      subcontent: ""
    }
  ])

  useEffect(() => {
    axios
    .get("/text")
    .then((res) => {
        console.log(res);
        setTexts(res.data)
    })
    .catch((err) => console.log(err));
  }, [])


  return (
    <div className='app__about app__flex'>
        <div className='app__about-container app__flex'>
          {texts.map((text) => {
            return (
              <div className='app__about-text app__flex'>
                <p>{text.content}</p>
                <p>{text.subcontent}</p>
              </div>
            )
          })}
        </div> 
    </div>
  )
}

export default About