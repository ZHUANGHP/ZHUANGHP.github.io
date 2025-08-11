---
permalink: /events/
layout: collection
classes: wide
title: "Events"
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
  <h2 class="section-heading">Upcoming Events</h2>
  <div class="events-timeline">
    <div class="event-item">
      <div class="event-date">2025-08-23 13:30-16:00</div>
      <div class="event-title">
        Prof. Zhuang will share a talk in ChinaMM 2025!
        <span class="event-status status-upcoming">Upcoming</span>
      </div>
      <div class="event-location">📍 Weihai, Shandong</div>
      <div class="event-summary">
        Prof. Zhuang will share a talk on "Analytic Continual Learning: A Novel Approach for Efficient Knowledge Acquisition via Equivalent Recursive Closed-Form Solutions" in ChinaMM 2025.
      </div>
      
    </div>
    <div class="event-item">
      <div class="event-date">TBD</div>
      <div class="event-title">
        Research Training Camp (Machine and Intelligence Research Group)
        <span class="event-status status-upcoming">Upcoming</span>
      </div>
      <div class="event-location">📍 International Campus of South China University of Technology</div>
      <div class="event-summary">
       We are offering free courses for undergradute students to participate in training on basic researching techniques related to artificial intelligence, large models, and embodied intelligence. After completing the camp, participants can join the team in national/international competitions, publish papers, and other activities.
      </div>
    </div>
    <div class="event-links">
        <a href="https://mp.weixin.qq.com/s/lHD39RBwgu8ccTtao70NKw" class="event-link">📰 details</a>
      </div>
    
  </div>
</div>

<div class="events-section">
  <h2 class="section-heading">Recent Events</h2>
  <div class="events-timeline">
   <div class="event-item">
      <div class="event-date">2025-07-20</div>
      <div class="event-title">
        MIAA Lab Open Day
        <span class="event-status status-past">Ended</span>
      </div>
      <div class="event-location">📍 International Campus of South China University of Technology</div>
      <div class="event-summary">
        Lab Open Day – all students and researchers interested in machine intelligence and advanced adaptive technologies are welcome to visit and engage with us.
      </div>
      <!-- <div class="event-links">
        <a href="#" class="event-link">📝 报名参加</a>
        <a href="#" class="event-link">📧 联系我们</a>
      </div> -->
    </div>
    <div class="event-item">
      <div class="event-date">2025-06-15</div>
      <div class="event-title">
        ICML 2025 Workshop on Continual Learning
        <!-- <span class="event-status status-upcoming">即将举行</span> -->
        <span class="event-status status-past">Ended</span> 
      </div>
      <div class="event-location">📍 Vienna, Austria</div>
      <div class="event-summary">
        The MIAA lab will present the latest research results at the ICML 2025 Continual Learning Workshop, including analysis of continual learning theory and embodied AI applications.
      </div>
      <div class="event-links">
        <a href="https://icml.cc/" class="event-link">🔗 ICML 2025</a>
        <a href="https://icml.cc/workshops/2025/continual-learning" class="event-link">📄 Workshop Details</a>
      </div>
    </div>
    <div class="event-item">
      <div class="event-date">2025-06-12 2:30pm</div>
      <div class="event-title">
         AI in 5 Minutes – Episode 5
        <span class="event-status status-past">Ended</span>
      </div>
      <div class="event-location">📍 D1-b536</div>
      <div class="event-summary">
        “AI in 5 Minutes” is a concise “academic stop” designed to give students a quick, five-minute briefing on cutting-edge AI topics—ranging from continual learning and large-scale models to embodied intelligence. This installment features three dynamic talks: <br><strong>Liu Jierui</strong> : Improving Vision-Language-Action Models via Chain-of-Affordance;  <br><strong>He Run</strong> : Exemplar-Free Class-Incremental Learning via Dual-Map Semantic Shift Prediction and Classifier Reconstruction;  <br><strong>Li Zhiming</strong> : A Large-Model-Powered Intelligent Terminal for Private Document Parsing.
      </div>
      <div class="event-links">
        <a href="https://mp.weixin.qq.com/s/Yz1QWreEV_UATpewBAmqTg" class="event-link">📰 details</a>
      </div>
    </div>
    
  </div>
</div>