---
title: "Embodied Intelligence"
permalink: /research/embodied-intelligence/
layout: single
classes: wide
---

<style>
.project-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}

.project-description {
  margin-bottom: 30px;
  text-align: justify;
  line-height: 1.6;
}

.project-box {
  border: 1px solid #eaeaea;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.project-heading {
  background-color: #f8f8f8;
  padding: 15px 20px;
  font-size: 1.4em;
  font-weight: bold;
  border-bottom: 1px solid #eaeaea;
}

.project-heading a {
  text-decoration: none;
  color: #0366d6;
}

.project-heading a:hover {
  text-decoration: underline;
}

.project-content {
  padding: 20px;
  text-align: justify;
  line-height: 1.5;
}

.project-image {
  padding: 0 20px 20px;
  text-align: center;
}

.project-image img {
  max-width: 100%;
  height: auto;
  border: 1px solid #eee;
}

.project-video {
  padding: 0 20px 20px;
  text-align: center;
}

.project-video video {
  max-width: 100%;
  height: auto;
  border: 1px solid #eee;
}

.back-link {
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #0366d6;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}
</style>


<div class="project-description">
  Our Embodied Intelligence research focuses on how intelligence emerges from the interaction between an agent's physical body and its control systems. We develop AI methods that leverage this physical embodiment to enhance adaptability in changing environments, creating more robust and responsive autonomous systems.
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="#">Analytic Task Scheduler: Recursive Least Squares-Based Method for Continual Learning in Embodied Foundation Models</a>
  </div>
  <div class="project-content">
    In this work, we propose the Analytic Task Scheduler (ATS), a novel framework for continual learning in embodied foundation models. ATS consists of a task-specific model library, where each model is fine-tuned independently on a single task, and an analytic scheduler trained using recursive least squares (RLS) to learn the mapping between language instructions and task-specific models. We validate ATS on a real-world robot platform (RM65B), demonstrating superior resistance to forgetting and strong adaptability to task variations.
  </div>
  <div class="project-image">
    <img src="/assets/images/research/EI/ATS.png" alt="Analytic Task Scheduler">
  </div>
  <div class="project-video" style="padding: 0 20px 20px; text-align: center;">
    <video width="100%" autoplay muted loop>
      <source src="/assets/videos/research/EI/ATS.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="#">Robo-Peekaboo: Let robot think again based on a dual agents workflow</a>
  </div>
  <div class="project-content">
    We use multi-agent systems for environmental perception in embodied grasping systems, complex task decomposition, and whole-process rethinking, where each agent utilizes a shared memory bank for token prediction. To align with human intent, we developed a dual-agent loop that improves the grasping success rate by 25% compared to SOTA, and we embedded each agent's token output into a latent space for collaborative optimization.
  </div>
  <div class="project-video" style="padding: 0 20px 20px; text-align: center;">
    <video width="100%" autoplay muted loop>
      <source src="/assets/videos/research/EI/RP.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<a href="/research" class="back-link">← Back to Research</a>
