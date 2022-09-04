import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Styles/About.css'
import testimage from './assets/testimg.jpeg'

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
      <div className='app__about-image app__flex'>
            <img src={testimage} alt='test'/>
        </div>
        <div className='app__about-container app__flex'>
          <div className='app__about-text app__flex'>
            <p><h3>Warmth and Bread from Jesus’ Hands is a project started in May 2020 in Minneapolis, MN.</h3> This project uses donations from people around the world to help the ones in need in countries like Moldova, Ukraine, and Armenia. Through this project, we help people with their physical needs, help people mentally, and hope to bring them to Jesus along the way. We strive to help the elderly, disabled people, large families with kids, and anyone in need.</p>
            <p>All of the donated money that we receive is being used in the countries listed above to purchase food, firewood, coal, and other necessities to help people. The majority of our work consists of buying food, packaging it up, and giving it away to people and families that are struggling with getting access to essential items. All of the work is done by volunteer church members and ministers of the local Seventh Day Adventist Churches.</p>
          </div>
        </div> 
    </div>
  )
}

export default About