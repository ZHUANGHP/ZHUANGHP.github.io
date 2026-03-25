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
  font-size: 0.85em;
}

.showcase-box {
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 22px;
  margin-bottom: 34px;
  background: linear-gradient(180deg, #fbfdff 0%, #f5f9ff 100%);
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}

.showcase-title {
  margin: 0 0 8px;
  font-size: 1.05em;
  font-weight: 700;
  color: #1f4f8f;
}

.showcase-copy {
  margin: 0 0 18px;
  font-size: 0.8em;
  line-height: 1.6;
  color: #3f4f63;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.showcase-item {
  background: #fff;
  border: 1px solid #e6edf5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(17, 45, 78, 0.08);
}

.showcase-item video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #eef3f8;
}

.showcase-caption {
  padding: 12px 14px 14px;
}

.showcase-caption strong {
  display: block;
  margin-bottom: 6px;
  font-size: 0.82em;
  color: #173b68;
}

.showcase-caption span {
  display: block;
  font-size: 0.74em;
  line-height: 1.5;
  color: #56687d;
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
  font-size: 0.9em;
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

@media screen and (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}
</style>


<div class="project-description">
  Our Embodied Intelligence research focuses on how intelligence emerges from the interaction between an agent's physical body and its control systems. We develop AI methods that leverage this physical embodiment to enhance adaptability in changing environments, creating more robust and responsive autonomous systems.
</div>

<div class="showcase-box">
  <h2 class="showcase-title">Embodied Intelligence Demos</h2>
  <p class="showcase-copy">
    To make our embodied intelligence research more visible, we highlight two recent robot demos here, covering tabletop manipulation, object interaction, and task execution on a real platform.
  </p>
  <div class="showcase-grid">
    <div class="showcase-item">
      <video autoplay muted loop playsinline controls preload="metadata">
        <source src="/assets/videos/research/EI/embodied-demo-blocks.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="showcase-caption">
        <strong>Tabletop Grasping and Block Manipulation</strong>
        <span>Demonstrates target perception, grasp execution, and basic manipulation ability in a structured tabletop setting.</span>
      </div>
    </div>
    <div class="showcase-item">
      <video autoplay muted loop playsinline controls preload="metadata">
        <source src="/assets/videos/research/EI/embodied-demo-bowls.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="showcase-caption">
        <strong>Container Perception and Interaction</strong>
        <span>Highlights visual understanding, action planning, and multi-step interaction with everyday objects.</span>
      </div>
    </div>
  </div>
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
