import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3?" text="GPT-3 (Generative Pre-trained Transformer 3) is a cutting-edge language model developed by OpenAI. It uses deep learning to understand, generate, and respond to human-like text. With 175 billion parameters, it excels in tasks like translation, content creation, coding assistance, and more, revolutionizing AI-driven language processing." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 powers chatbots, enabling human-like interactions and versatile assistance across various tasks and domains." />
        <Feature title="Knowledgebase" text="GPT-3 integrates with knowledge bases, enhancing information retrieval and offering comprehensive, contextually relevant responses and insights." />
        <Feature title="Education" text="GPT-3 transforms education, facilitating personalized learning, tutoring, and generating diverse educational materials across subjects." />
      </div>
    </div>
  )
}

export default WhatGPT3
