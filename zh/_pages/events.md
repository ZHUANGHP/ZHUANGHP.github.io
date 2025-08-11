---
permalink: /zh/events/
layout: collection
classes: wide
title: "活动"
lang: zh-CN
header:
  overlay_image: /assets/images/events.jpg
  overlay_filter: 0.25 
---

<style>
:root {
  --primary-color:rgb(0, 0, 132);
  --primary-hover: #0256b9;
  --text-color: #333;
  --light-text: #666;
  --border-color: #eaeaea;
  --card-bg: #fff;
  --card-shadow: 0 2px 15px rgba(0,0,0,0.1);
  --section-bg: #f8f9fa;
}

.events-section {
  margin: 2em;
  background-color: var(--section-bg);
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.section-heading {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0em;
  margin:0.85em 0;
  font-size: 1em;
  font-weight: 600;
}

.events-timeline {
  position: relative;
  padding-left: 2rem;
}

.events-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-color), var(--primary-hover));
}

.event-item {
  position: relative;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  margin-left: 1.5rem;
}

.event-item:hover {
  transform: translateX(10px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.event-item::before {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 2rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: 3px solid var(--card-bg);
  box-shadow: 0 0 0 3px var(--primary-color);
}

.event-date {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.event-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.event-location {
  font-size: 0.85rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.event-summary {
  font-size: 0.85rem;
  color: var(--light-text);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.event-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.event-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.85rem;
  transition: background-color 0.3s ease;
}

.event-link:hover {
  background-color: var(--primary-hover);
  color: white;
  text-decoration: none;
}

.event-status {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-left: 1rem;
}

.status-upcoming {
  background-color: #e3f2fd;
  color: #1976d2;
}

.status-ongoing {
  background-color: #e8f5e8;
  color: #388e3c;
}

.status-past {
  background-color: #fafafa;
  color: #757575;
}

@media (max-width: 768px) {
  .events-timeline {
    padding-left: 1rem;
  }
  
  .event-item {
    margin-left: 1rem;
    padding: 1.5rem;
  }
  
  .events-section {
    padding: 20px;
  }
  
  .event-links {
    flex-direction: column;
  }
}
</style>

<div class="events-section">
  <h2 class="section-heading">即将举行的活动</h2>
  <div class="events-timeline">
    <div class="event-item">
      <div class="event-date">TBD</div>
      <div class="event-title">
        科研训练营（机器与智能科研小组）
        <span class="event-status status-upcoming">即将举行</span>
      </div>
      <div class="event-location">📍 华南理工大学国际校区</div>
      <div class="event-summary">
       免费招收低年级学生参与人工智能、大模型、具身智能相关主题的科研基本知识训练，出营后可随团队参与国内/国际比赛，发表文章等活动。
      </div>
    </div>
    
    
  </div>
</div>

<div class="events-section">
  <h2 class="section-heading">近期活动</h2>
  <div class="events-timeline">
   <div class="event-item">
      <div class="event-date">2025-07-20</div>
      <div class="event-title">
        MIAA实验室开放日
        <span class="event-status status-past">已结束</span>
      </div>
      <div class="event-location">📍 华南理工大学国际校区</div>
      <div class="event-summary">
        实验室开放日 – 欢迎所有对机器智能和先进自适应技术感兴趣的学生和研究人员前来参观交流。
      </div>
      <!-- <div class="event-links">
        <a href="#" class="event-link">📝 报名参加</a>
        <a href="#" class="event-link">📧 联系我们</a>
      </div> -->
    </div>
    <div class="event-item">
      <div class="event-date">2025-06-15</div>
      <div class="event-title">
        ICML 2025 持续学习研讨会
        <!-- <span class="event-status status-upcoming">即将举行</span> -->
        <span class="event-status status-past">已结束</span> 
      </div>
      <div class="event-location">📍 奥地利维也纳</div>
      <div class="event-summary">
        MIAA实验室将在ICML 2025持续学习研讨会上展示最新研究成果，包括持续学习理论分析和具身AI应用。
      </div>
      <div class="event-links">
        <a href="https://icml.cc/" class="event-link">🔗 ICML 2025</a>
        <a href="https://icml.cc/workshops/2025/continual-learning" class="event-link">📄 研讨会详情</a>
      </div>
    </div>
    <div class="event-item">
      <div class="event-date">2025-06-12 14:30</div>
      <div class="event-title">
         AI五分钟 – 第五期
        <span class="event-status status-past">已结束</span>
      </div>
      <div class="event-location">📍 D1-b536</div>
      <div class="event-summary">
        "AI五分钟"是一个简洁的"学术驿站"，旨在为学生提供前沿AI主题的快速五分钟简报——涵盖持续学习、大规模模型到具身智能等领域。本期包含三个精彩报告：<br><strong>刘杰睿</strong>：通过可供性链改进视觉-语言-动作模型；<br><strong>何润</strong>：基于双映射语义偏移预测和分类器重构的无样本类增量学习；<br><strong>李志明</strong>：基于大模型的私有文档解析智能终端。
      </div>
      <div class="event-links">
        <a href="https://mp.weixin.qq.com/s/Yz1QWreEV_UATpewBAmqTg" class="event-link">📰 详情</a>
      </div>
    </div>
    
  </div>
</div>