---
permalink: /zh/research/
layout: splash
title: "研究方向"
lang: zh-CN

header:
  overlay_image: /assets/images/project.png
  overlay_filter: 0.25 
---

<style>
:root {
  --primary-color: #204B7Cff;
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
  font-size: 0.85em;
  padding: 20px;
}

.research-area-title {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
  text-align: center;
}

.research-area-description {
  margin-bottom: 20px;
  text-align: center;
  color: #000000; /* Changed to black */
  height: 5em;
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

<div class="research-area-content"><p>在MIAA实验室，我们探索前沿技术和方法论，以推进人工智能的发展。</p><p>我们实验室主要聚焦持续学习、具身智能和大模型，并推动这些方向的交叉融合。</p></div>

<div class="research-areas">
  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/CL.png" alt="持续学习">
    </div>
    <div class="research-area-content">
      <div class="research-area-title">持续学习</div>
      <div class="research-area-description">开发能够随时间持续学习而不遗忘先前知识的系统</div>
      <a href="/zh/research/continual-learning" class="research-btn">了解更多</a>
    </div>
  </div>

  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/EI.png" alt="具身智能">
    </div>
    <div class="research-area-content">
      <div class="research-area-title">具身智能</div>
      <div class="research-area-description">探索智能如何从智能体的物理形态与其控制系统的交互中涌现</div>
      <a href="/zh/research/embodied-intelligence" class="research-btn">了解更多</a>
    </div>
  </div>
  
  <div class="research-area">
    <div class="research-area-image">
      <img src="/assets/images/research/LLM.png" alt="大语言模型">
    </div>
    <div class="research-area-content">
      <div class="research-area-title">大模型</div>
      <div class="research-area-description">推进大模型相关研究，包括大视觉、大语言模型以及多模态大模型</div>
      <a href="/zh/research/large-language-models" class="research-btn">了解更多</a>
    </div>
  </div>
</div>
