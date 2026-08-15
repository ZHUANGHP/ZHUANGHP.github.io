---
permalink: /research/
layout: splash
title: "Research"

header:
  overlay_image: /assets/images/project.png
  overlay_filter: 0.25 
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
  font-size: 0.85em !important; /* Reduced from 1.5em */
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: var(--heading-color);
}

.research-area-description {
  margin-bottom: 20px;
  text-align: center;
  color: #000000; /* Changed to black */
  font-size: 0.85em; /* Added smaller font size */
  height: 6.5em;
  overflow: hidden;
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


At MIAA Lab, we explore cutting-edge technologies and methodologies to advance the state of artificial intelligence. Our research focuses on three main directions: continual learning, embodied intelligence, and large models.
<div class="research-areas">
  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/CL.png" alt="continual Learning">
    </div>
    <div class="research-area-content">
      <div class="research-area-title">Continual Learning</div>
      <div class="research-area-description">Developing systems that learn continually over time without forgetting previous knowledge</div>
      <a href="/research/continual-learning" class="research-btn">Learn More</a>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/EI.png" alt="Embodied Intelligence">
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
      <div class="research-area-title">Large Models</div>
      <div class="research-area-description">Advancing the capabilities of large models including vision and language models, and multi-modal models</div>
      <a href="/research/large-language-models" class="research-btn">Learn More</a>
    </div>
  </div>
</div>
