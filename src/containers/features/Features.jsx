import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Medical Diagnosis Aid',
    text: 'GPT-3 assists doctors by analyzing symptoms, aiding in diagnosing illnesses, and suggesting treatment options accurately.'
  },
  {
    title: 'Personalized Learning',
    text: 'GPT-3 powers adaptive education, customizing lessons to individual learning styles and needs for efficient learning.'
  },
  {
    title: 'Creative Content Generation',
    text: 'Enables automated creation of diverse content—articles, stories, music—tailored to specific preferences, industries, or audiences.'
  },
  {
    title: 'Virtual Customer Support',
    text: 'dEnhances customer service by providing nuanced and human-like responses, improving user experience and problem-solving capabilities.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize it. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to  Get Started</p>
      </div> 
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title+index} />
        ))}
      </div>   
    </div>
  )
}

export default Features
