---
title: "具身智能"
permalink: /zh/research/embodied-intelligence/
layout: single
classes: wide
lang: zh-CN
---

<style>
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
  font-size: 0.85em;
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
  我们的具身智能研究聚焦于智能如何由智能体的物理躯体与其控制系统之间的交互而涌现。我们开发能够利用这种物理具身性的 AI 方法，以提升在不断变化环境中的适应能力，从而构建更强健、响应更迅捷的自主系统。
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="#">Analytic Task Scheduler: Recursive Least Squares-Based Method for Continual Learning in Embodied Foundation Models</a>
  </div>
  <div class="project-content">
    本工作提出解析任务调度器（ATS），一种面向具身基础模型的持续学习新框架。ATS 包含一个任务专用模型库，其中每个模型均独立地在单一任务上微调；并配备一个以递归最小二乘（RLS）训练的解析调度器，用于学习语言指令与任务专用模型之间的映射。我们在真实机器人平台 RM65B 上验证了 ATS，实验表明其具有卓越的抗遗忘能力与对任务变化的强大适应性。
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
    我们在具身抓取系统中采用多智能体架构完成环境感知、复杂任务分解以及全过程反思；各智能体通过共享记忆库进行 token 预测。为了贴合人类意图，我们设计了一种双智能体闭环，将抓取成功率相比当前最优方法提升 25%，并把每个智能体的 token 输出嵌入潜在空间，以实现协同优化。
  </div>
  <div class="project-video" style="padding: 0 20px 20px; text-align: center;">
    <video width="100%" autoplay muted loop>
      <source src="/assets/videos/research/EI/RP.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<a href="/research" class="back-link">← 返回</a>
