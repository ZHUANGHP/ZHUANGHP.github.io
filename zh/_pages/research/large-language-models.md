---
title: "大模型"
permalink: /zh/research/large-language-models/
layout: single
classes: wide
lang: zh-CN
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
  font-size: 0.85em;
  margin-bottom: 30px;
  text-align: justify;
  line-height: 1.6;
  color: var(--text-color);
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
  font-size: 0.85em;
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
本实验室致力于推动大模型在动态真实场景中的发展，研究重点涵盖持续学习（CL）、参数高效微调（PEFT）与强化微调（RFT）。我们聚焦以下核心方向：制定策略以缓解灾难性遗忘——即大语言模型在学习新任务时丢失既有知识的倾向；提升模型在自然语言理解、代码生成与数学推理等多领域的适应能力；并同时应对高算力成本、参数干扰及数据隐私风险等挑战。
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="https://arxiv.org/abs/2503.13575">Analytic Subspace Routing: How Recursive Least Squares Works in Continual Learning of Large Language Model</a>
  </div>
  <div class="project-content">
    本文针对大语言模型持续学习中的灾难性遗忘问题，以及现有方法的局限——如回放机制带来的高成本、单一参数模块导致的任务干扰或容量不足——提出解析子空间路由（Analytical Subspace Routing, ASR）。ASR 在每个新任务到来时，于深层特征空间内为其构造独立的低秩适配器（LoRA），并通过基于递归最小二乘（RLS）训练的动态路由器，依据输入特征自动选择最适合的 LoRA 模块进行推理。该路由器可利用自相关与互相关矩阵在不依赖历史数据的情况下进行增量更新，从而在理论上实现零遗忘。
  </div>
  <div class="project-image">
    <img src="/assets/images/research/LLM/ASR.png" alt="Analytic Subspace Routing">
  </div>
</div>

<a href="/research" class="back-link">← 返回</a>
