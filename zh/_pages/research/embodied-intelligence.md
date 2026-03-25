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

@media screen and (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}
</style>


<div class="project-description">
  我们的具身智能研究聚焦于智能如何由智能体的物理躯体与其控制系统之间的交互而涌现。我们开发能够利用这种物理具身性的 AI 方法，以提升在不断变化环境中的适应能力，从而构建更强健、响应更迅捷的自主系统。
</div>

<div class="showcase-box">
  <h2 class="showcase-title">具身智能演示</h2>
  <p class="showcase-copy">
    为了更直观地展示我们在真实机器人平台上的具身操作能力，这里补充了两段近期演示视频，涵盖抓取、搬运与桌面交互等任务场景。
  </p>
  <div class="showcase-grid">
    <div class="showcase-item">
      <video autoplay muted loop playsinline controls preload="metadata">
        <source src="/assets/videos/research/EI/embodied-demo-blocks.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="showcase-caption">
        <strong>桌面抓取与方块操作</strong>
        <span>展示机器人在结构化桌面环境中的目标感知、抓取执行与基础操作能力。</span>
      </div>
    </div>
    <div class="showcase-item">
      <video autoplay muted loop playsinline controls preload="metadata">
        <source src="/assets/videos/research/EI/embodied-demo-bowls.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="showcase-caption">
        <strong>容器感知与操作演示</strong>
        <span>展示机器人面向日常物体的视觉理解、动作规划与多步骤交互能力。</span>
      </div>
    </div>
  </div>
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
