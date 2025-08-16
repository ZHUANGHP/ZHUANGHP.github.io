---
title: "Large Models"
permalink: /research/large-language-models/
layout: single
classes: wide
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
  --shadow-color: rgba(0,0,0,0.08);
}

.project-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}

.project-description {
  margin-bottom: 30px;
  text-align: justify;
  line-height: 1.6;
  color: var(--text-color);
  font-size: 0.85em;
}

.project-box {
  border: 1px solid var(--border-color);
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--card-background);
  box-shadow: 0 2px 5px var(--shadow-color);
}

.project-heading {
  background-color: var(--background-light);
  padding: 15px 20px;
  font-size: 0.9em;
  font-weight: bold;
  border-bottom: 1px solid var(--border-color);
  color: var(--heading-color);
}

.project-heading a {
  text-decoration: none;
  color: var(--primary-color);
}

.project-heading a:hover {
  text-decoration: underline;
  color: var(--primary-hover);
}

.project-content {
  padding: 20px;
  text-align: justify;
  line-height: 1.5;
  color: var(--text-color);
}

.project-image {
  padding: 0 20px 20px;
  text-align: center;
}

.project-image img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.back-link {
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
  color: var(--primary-hover);
}

h1 {
  color: var(--heading-color);
  margin-bottom: 25px;
}
</style>

<div class="project-description">
Our laboratory's research is dedicated to advancing the development of large models in dynamic real-world scenarios, with a particular emphasis on continual learning (CL) , parameter-efficient fine-tuning (PEFT) and reinforced fine-tuning (RFT). The core areas of our work include formulating strategies to mitigate the catastrophic forgetting problem, which is the tendency of LLMs to lose previously acquired knowledge when learning new tasks. We also aim to enhance the adaptability of models across various domains such as natural language understanding, code generation, and mathematical reasoning. Additionally, we address challenges related to high computational costs, parameter interference, and data privacy risks.
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="https://arxiv.org/abs/2503.13575">Analytic Subspace Routing: How Recursive Least Squares Works in Continual Learning of Large Language Model</a>
  </div>
  <div class="project-content">
    This paper addresses the catastrophic forgetting problem in the continual learning of large language models (LLMs) and the limitations of existing methods, such as those involving replay (leading to high costs) or single parameter modules (resulting in task interference or insufficient capacity). We propose the Analytical Subspace Routing (ASR) method, which creates independent low-rank adapters (LoRA) for each new task within the deep feature space. A dynamic router, trained based on Recursive Least Squares (RLS), is employed. This router analyzes input features to automatically select the most appropriate task-specific LoRA module for inference. Furthermore, it can incrementally update via auto-correlation and cross-correlation matrices without requiring historical data, theoretically guaranteeing zero forgetting.
  </div>
  <div class="project-image">
    <img src="/assets/images/research/LLM/ASR.png" alt="Analytic Subspace Routing">
  </div>
</div>

<a href="/research" class="back-link">← Back to Research</a>
