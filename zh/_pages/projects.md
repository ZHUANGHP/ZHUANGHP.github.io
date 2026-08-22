---
permalink: /zh/projects/
layout: collection
classes: wide
title: "项目"
lang: zh-CN
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
      小米公司基金<br>
      <strong>后训练阶段 MoE 架构大模型路由策略协同与训练稳定性研究</strong><br>
      <span class="tag tag-blue">大模型</span>
      <span class="tag tag-green">MoE</span><br>
      面向 MoE 大模型后训练的高效优化方法，包括专家均衡与知识保持、稳定强化学习和有效专家参数高效微调。<br>
      <span style="color: #666;">2026.07.30 至今</span>
    </div>
  </div>
  
  <div class="projects-container">
    <div class="images-container">
      <img src="/assets/images/collaboration/tencent.svg" class = "images">
    </div>
    <div style="flex: 1;margin-left: 20px;">
      CCF–腾讯犀牛鸟基金<br>
      <strong>基于推理大模型的生成式个性化搜索</strong><br>
      <span class="tag tag-blue">大模型</span><br>
      采用大模型技术的个性化搜索算法，包括推理和持续学习能力。<br>
      <span style="color: #666;">2025.08 至今</span>
    </div>
  </div>
  
  <div class="projects-container">
    <div class="images-container">
      <img src="/assets/images/collaboration/xiaomi-1.svg" class = "images">
    </div>
    <div style="flex: 1;margin-left: 20px;">
      小米公司基金<br>
      <strong>基于大模型微调技术缓解灾难性遗忘问题</strong><br>
      <span class="tag tag-blue">大模型</span>
      <span class="tag tag-green">持续学习</span><br>
      解决小米零售 LLM 聊天机器人持续更新新产品信息的持续学习问题。<br>
      <span style="color: #666;">2024.08 – 2025.07</span>
    </div>
  </div>
</div>
