---
permalink: /projects/
layout: collection
classes: wide
title: "Projects"
header:
  overlay_image: /assets/images/projects.png
  overlay_filter: 0.25 
---

<style>
.projects-section {
  margin-bottom: 40px;
}

.section-heading {
  color: #0366d6;
  border-bottom: 2px solid #0366d6;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
  font-weight: 600;
}

.tag {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  margin-right: 5px;
  display: inline-block;
}

.tag-blue {
  background-color: #e3f2fd;
  color: #1976d2;
}

.tag-green {
  background-color: #e8f5e8;
  color: #2e7d32;
}
.projects-container {
  font-size: 0.85em;
  display: flex;
  margin-bottom: 20px;
  padding: 20px; 
  line-height: 2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.images-container{
  flex: 0 0 220px;
  margin-right: 15px;
  display: flex; 
  align-items: center;
}
.images {
  width: 10em;
  height: auto; 
  max-height: 100%; 
  object-fit: contain;
}

</style>

<div class="projects-section">

  <div class="projects-container">
    <div class="images-container">
      <img src="/assets/images/collaboration/xiaomi-1.svg" class = "images">
    </div>
    <div style="flex: 1;margin-left: 20px;">
      Xiaomi Corporation Fund<br>
      <strong>Collaborative Routing Strategies and Training Stability for Post-Training MoE Large Models</strong><br>
      <span class="tag tag-blue">large model</span>
      <span class="tag tag-green">MoE</span><br>
      Efficient optimization methods for post-training MoE large models, including expert balancing and knowledge retention, stable reinforcement learning, and parameter-efficient fine-tuning of effective experts.<br>
      <span style="color: #666;">2026.07.30 to present</span>
    </div>
  </div>
  
  <div class="projects-container">
    <div class="images-container">
      <img src="/assets/images/collaboration/tencent.svg" class = "images">
    </div>
    <div style="flex: 1;margin-left: 20px;">
      CCF–Tencent Rhino-Bird Fund<br>
      <strong>Generative Personalized Search with Reasoning Large Models</strong><br>
      <span class="tag tag-blue">large model</span><br>
      Personalized Search algorithms adopting large model techniques, including reasoning and continual abilities.<br>
      <span style="color: #666;">2025.08 to present</span>
    </div>
  </div>
  
  <div class="projects-container">
    <div class="images-container">
      <img src="/assets/images/collaboration/xiaomi-1.svg" class = "images">
    </div>
    <div style="flex: 1;margin-left: 20px;">
      Xiaomi Corporation Fund<br>
      <strong>Mitigating Catastrophic Forgetting through Large Model Fine-Tuning</strong><br>
      <span class="tag tag-blue">large model</span>
      <span class="tag tag-green">Continual learning</span><br>
      Continual learning that addresses Xiaomi retail LLM chatbot with constant new product information update.<br>
      <span style="color: #666;">2024.08 – 2025.07</span>
    </div>
  </div>
</div>
