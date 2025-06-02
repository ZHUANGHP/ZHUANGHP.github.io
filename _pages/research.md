---
title: "Research"
permalink: /research/
layout: splash
classes: wide

header:
  image: /assets/images/project.png
---

<style>
:root {
  --primary-color: #1a76d2;
  --primary-hover: #0d5caf;
  --heading-color: #333333;
  --text-color: #444444;
  --light-text: #666666;
  --border-color: #e5e5e5;
  --background-light: #f8f9fa;
  --card-background: #ffffff;
  --shadow-color: rgba(0,0,0,0.1);
  --shadow-hover: rgba(0,0,0,0.15);
}

.research-header {
  text-align: center;
  margin-bottom: 50px;
}

.research-header h1 {
  font-size: 2.2em; /* Reduced from 2.5em */
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--heading-color);
}

.research-header p {
  font-size: 1.1em; /* Reduced from 1.2em */
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: var(--text-color);
  text-align: justify; /* Added to justify text */
}

.research-areas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
}

.research-area {
  width: 300px;
  background-color: var(--card-background);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.research-area:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px var(--shadow-hover);
}

.research-area-image {
  height: 200px;
  overflow: hidden;
}

.research-area-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.research-area:hover .research-area-image img {
  transform: scale(1.05);
}

.research-area-content {
  padding: 20px;
}

.research-area-title {
  font-size: 1.3em; /* Reduced from 1.5em */
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: var(--heading-color);
}

.research-area-description {
  margin-bottom: 20px;
  text-align: center;
  color: #000000; /* Changed to black */
  font-size: 0.95em; /* Added smaller font size */
}

.research-btn {
  display: block;
  text-align: center;
  background-color: #e0e0e0; /* Changed to light grey */
  color: #000000; /* Changed to black */
  text-decoration: none;
  padding: 10px 0;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.research-btn:hover {
  background-color: #c0c0c0; /* Darker grey for hover */
  color: #000000; /* Keep text black on hover */
}

@media (max-width: 768px) {
  .research-areas {
    flex-direction: column;
    align-items: center;
  }
  
  .research-area {
    width: 90%;
  }
}
</style>

<div class="research-header">
  <h1>Our Research</h1>
  <p>At MIAA Lab, we explore cutting-edge technologies and methodologies to advance the state of artificial intelligence. Our research focuses on three main directions that represent our commitment to pushing the boundaries of machine intelligence and adaptation capabilities.</p>
</div>

<div class="research-areas">
  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/CL.png" alt="continual Learning">
    </div>
    <div class="research-area-content">
      <div class="research-area-title">continual Learning</div>
      <div class="research-area-description">Developing systems that learn continuously over time without forgetting previous knowledge</div>
      <a href="/research/continual-learning" class="research-btn">Learn More</a>
    </div>
  </div>
  
  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/EI.jpg" alt="Embodied Intelligence">
    </div>
    <div class="research-area-content">
      <div class="research-area-title">Embodied Intelligence</div>
      <div class="research-area-description">Exploring how intelligence emerges from the interaction between an agent's physical form and its control systems</div>
      <a href="/research/embodied-intelligence" class="research-btn">Learn More</a>
    </div>
  </div>
  
  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/LLM.png" alt="Large Language Models">
    </div>
    <div class="research-area-content">
      <div class="research-area-title">Large Language Models</div>
      <div class="research-area-description">Advancing the capabilities of large language models and integrating them with embodied systems</div>
      <a href="/research/large-language-models" class="research-btn">Learn More</a>
    </div>
  </div>
</div>

