---
permalink: /zh/members/
layout: collection
classes: wide
title: "团队成员"
lang: zh-CN
header:
  overlay_image: /assets/images/group.jpg
---

<style>
:root {
  --primary-color: #0366d6;
  --primary-hover: #0256b9;
  --text-color: #333;
  --light-text: #666;
  --border-color: #eaeaea;
  --card-bg: #fff;
  --card-shadow: 0 2px 15px rgba(0,0,0,0.1);
  --section-bg: #f8f9fa;
}

.members-section {
  margin-bottom: 30px;
  margin-top: 10px;
  /* background-color: var(--section-bg); */
  border-radius: 10px;
  padding: 0px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.section-heading {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 1.6em;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.member-card {
  display: grid;
  grid-template-columns: 118px minmax(0, 1fr);
  min-height: 156px;
  background-color: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dfe7f1;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advisor-card {
  grid-column: span 2;
}

.member-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 18px rgba(0,0,0,0.12);
}

.member-photo {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 156px;
  padding: 10px;
  object-fit: contain;
  object-position: center;
  background: linear-gradient(180deg, #f7f9fc 0%, #eef4fb 100%);
  border-right: 1px solid #dfe7f1;
}

.member-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  min-width: 0;
  padding: 14px 16px;
}

.member-name {
  font-size: 1.02em;
  font-weight: bold;
  margin-bottom: 0;
  color: var(--primary-color);
  line-height: 1.25;
}

.member-role {
  font-size: 0.74em;
  color: var(--light-text);
  margin-bottom: 0;
}

.member-email {
  font-size: 0.7em;
  color: var(--light-text);
  margin-bottom: 0;
  word-break: break-all;
}

.member-research {
  font-size: 0.74em;
  color: var(--text-color);
  margin-bottom: 0;
  line-height: 1.45;
}

.member-links {
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
  padding-top: 3px;
}

.member-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.76em;
  display: inline-flex;
  align-items: center;
}

.member-link:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

.member-link svg {
  margin-right: 5px;
  width: 14px;
  height: 14px;
}

@media (max-width: 1400px) {
  .members-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: 1fr;
  }

  .advisor-card {
    grid-column: span 1;
  }

  .member-card {
    grid-template-columns: 112px minmax(0, 1fr);
    min-height: 148px;
  }

  .member-photo {
    min-height: 148px;
    padding: 10px;
  }

  .member-info {
    padding: 12px 14px;
  }
}

@media (max-width: 480px) {
  .member-card {
    grid-template-columns: 1fr;
  }

  .member-photo {
    min-height: 180px;
    max-height: 210px;
    border-right: none;
    border-bottom: 1px solid #dfe7f1;
  }

  .member-info {
    padding: 14px;
  }
}
</style>

<div class="members-section">
  <h2 class="section-heading">导师</h2>
  <div class="members-grid">
    <div class="member-card advisor-card">
      <img src="/assets/images/profile/advisor/Huiping-Zhuang.jpg" alt="庄辉平教授" class="member-photo">
      <div class="member-info">
        <div class="member-name">庄辉平 (Huiping Zhuang)</div>
        <div class="member-role">副教授</div>
        <div class="member-email">hpzhuang@scut.edu.cn</div>
        <div class="member-research">人工智能、具身智能、大模型 (Artificial Intelligence, Embodied AI, Large Model)</div>
        <div class="member-links">
          <a href="https://www2.scut.edu.cn/wusie/2022/0712/c25374a476654/page.htm" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            个人主页
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="members-section">
  <h2 class="section-heading">博士研究生</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/phd/Wenbin-Zou.jpg" alt="邹文斌" class="member-photo">
      <div class="member-info">
        <div class="member-name">邹文斌 (Wenbin Zou)</div>
        <div class="member-role">博士研究生, 2022级</div>
        <div class="member-research">图像复原和生成 (Image Restoration and Generation)</div>
        <div class="member-links">
          <a href="https://alexzou14.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            个人主页
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/phd/Kai-Tong.jpg" alt="童楷" class="member-photo">
      <div class="member-info">
        <div class="member-name">童楷 (Kai Tong)</div>
        <div class="member-role">博士研究生, 2023级</div>
        <div class="member-research">持续学习，大语言模型，强化学习 (Continual Learning, Large Language Model, Reinforcement Learning)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/phd/Boomer.jpg" alt="王骏飞" class="member-photo">
      <div class="member-info">
        <div class="member-name">王骏飞 (Junfei Wang)</div>
        <div class="member-role">博士研究生, 2024级</div>
        <div class="member-research">AI硬件加速器 (AI Hardware Accelerator)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/phd/Yue-Yan.jpg" alt="严越" class="member-photo">
      <div class="member-info">
        <div class="member-name">严越 (Yue Yan)</div>
        <div class="member-role">博士研究生, 2025级</div>
        <div class="member-research">持续学习，多模态学习 (Continual Learning, MultiModal Learning)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/master/Xiang-Tan.jpg" alt="谭翔" class="member-photo">
      <div class="member-info">
        <div class="member-name">谭翔 (Xiang Tan)</div>
        <div class="member-role">博士研究生, 2026级</div>
        <div class="member-research">持续学习，大语言模型 (Continual Learning, Large Language Model)</div>
      </div>
    </div>    
  </div>
</div>

<div class="members-section">
  <h2 class="section-heading">硕士研究生</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/master/Jianan-Ji.jpg" alt="纪家楠" class="member-photo">
      <div class="member-info">
        <div class="member-name">纪家楠 (Jianan Ji)</div>
        <div class="member-role">硕士研究生, 2024级</div>
        <div class="member-research">持续学习，大模型强化微调 (Continual Learning, RL Finetuning of LLM)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Lipei-Xie.jpg" alt="谢李培" class="member-photo">
      <div class="member-info">
        <div class="member-name">谢李培 (Lipei Xie)</div>
        <div class="member-role">硕士研究生, 2024级</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>
    

    
    <div class="member-card">
      <img src="/assets/images/profile/master/Xiang-Zhang.jpg" alt="张翔" class="member-photo">
      <div class="member-info">
        <div class="member-name">张翔 (Xiang Zhang)</div>
        <div class="member-role">硕士研究生, 2024级</div>
        <div class="member-research">持续学习，大模型强化微调 (Continual Learning, RL Finetuning of LLM)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Jialong-Cao.jpg" alt="曹加龙" class="member-photo">
      <div class="member-info">
        <div class="member-name">曹加龙 (Jialong Cao)</div>
        <div class="member-role">硕士研究生, 2025级</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Suoxin-Zhang.jpg" alt="张所鑫" class="member-photo">
      <div class="member-info">
        <div class="member-name">张所鑫 (Suoxin Zhang)</div>
        <div class="member-role">硕士研究生, 2025级</div>
        <div class="member-research">大模型 (Large Models)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Ziqi-Luo.jpg" alt="罗梓齐" class="member-photo">
      <div class="member-info">
        <div class="member-name">罗梓齐 (Ziqi Luo)</div>
        <div class="member-role">硕士研究生, 2025级</div>
        <div class="member-research">大模型 (Large Models)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Di-Fang.jpg" alt="方笛" class="member-photo">
      <div class="member-info">
        <div class="member-name">方笛 (Di Fang)</div>
        <div class="member-role">硕士研究生, 2025级</div>
        <div class="member-research">持续学习，长尾学习 (Continual Learning, Long-tailed Learning)</div>
        <div class="member-links">
          <a href="https://fangd.net" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            个人主页
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Yingxin-Li.jpg" alt="李颖欣" class="member-photo">
      <div class="member-info">
        <div class="member-name">李颖欣 (Yingxin Li)</div>
        <div class="member-role">硕士研究生, 2024级 (联合培养)</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>
  </div>
</div>

<!-- <div class="members-section">
  <h2 class="section-heading">本科生</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Shilin-Zhang.jpg" alt="张仕麟" class="member-photo">
      <div class="member-info">
        <div class="member-name">张仕麟 (Shilin Zhang)</div>
        <div class="member-role">本科生, 2021级</div>
        <div class="member-email">torbjornclancy@gmail.com</div>
        <div class="member-research">智能体 (Agent)</div>
        <div class="member-links">
          <a href="https://torbjorn-zhang.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            个人主页
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Chengyu-Dong.jpg" alt="董程宇" class="member-photo">
      <div class="member-info">
        <div class="member-name">董程宇 (Chengyu Dong)</div>
        <div class="member-role">本科生, 2021级</div>
        <div class="member-email">DONG0171@e.ntu.edu.sg</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Haolan-Kang.jpg" alt="康浩岚" class="member-photo">
      <div class="member-info">
        <div class="member-name">康浩岚 (Haolan Kang)</div>
        <div class="member-role">本科生, 2021级</div>
        <div class="member-email">arlenkhlann@gmail.com</div>
        <div class="member-research">机器人学，具身智能，智能体 (Robotics, Embodied Intelligence, Agent)</div>
        <div class="member-links">
          <a href="https://khlann.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            个人主页
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Shiyi-Wang.jpg" alt="王实依" class="member-photo">
      <div class="member-info">
        <div class="member-name">王实依 (Shiyi Wang)</div>
        <div class="member-role">本科生, 2022级</div>
        <div class="member-email">202230055267@mail.scut.edu.cn</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Shuquan-Man.jpg" alt="满书全" class="member-photo">
      <div class="member-info">
        <div class="member-name">满书全 (Shuquan Man)</div>
        <div class="member-role">本科生, 2022级</div>
        <div class="member-email">wimanshuquan@mail.scut.edu.cn</div>
        <div class="member-research">大语言模型，具身智能 (Large Language Model, Embodied Intelligence)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Yuzhou-Chen.jpg" alt="陈昱舟" class="member-photo">
      <div class="member-info">
        <div class="member-name">陈昱舟 (Yuzhou Chen)</div>
        <div class="member-role">本科生, 2022级</div>
        <div class="member-email">chanjoe929@gmail.com</div>
        <div class="member-research">灵巧操作 (Dexterous Manipulation)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Jierui-Liu.jpg" alt="刘杰睿" class="member-photo">
      <div class="member-info">
        <div class="member-name">刘杰睿 (Jierui Liu)</div>
        <div class="member-role">本科生, 2023级</div>
        <div class="member-email">jerryl01@qq.com</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Zixiao-Wang.jpg" alt="王子翛" class="member-photo">
      <div class="member-info">
        <div class="member-name">王子翛 (Zixiao Wang)</div>
        <div class="member-role">本科生, 2023级</div>
        <div class="member-email">270858473@qq.com</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Yidan-Lai.jpg" alt="赖奕丹" class="member-photo">
      <div class="member-info">
        <div class="member-name">赖奕丹 (Yidan Lai)</div>
        <div class="member-role">本科生, 2023级</div>
        <div class="member-email">2089246775@qq.com</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Jiahao-Li.jpg" alt="李佳淏" class="member-photo">
      <div class="member-info">
        <div class="member-name">李佳淏 (Jiahao Li)</div>
        <div class="member-role">本科生, 2023级</div>
        <div class="member-email">2977089785@qq.com</div>
        <div class="member-research">大语言模型以及模型加速 (Large Language Model, Acceleration of LLM)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Xin-Xiang.jpg" alt="向欣" class="member-photo">
      <div class="member-info">
        <div class="member-name">向欣 (Xin Xiang)</div>
        <div class="member-role">本科生, 2023级</div>
        <div class="member-email">widebbie0923@mail.scut.edu.cn</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Jihe-Qin.jpg" alt="秦基赫" class="member-photo">
      <div class="member-info">
        <div class="member-name">秦基赫 (Jihe Qin)</div>
        <div class="member-role">本科生, 2024级</div>
        <div class="member-email">WilliamHVollita@disroot.org</div>
        <div class="member-research">具身智能, 多模态学习 (Embodied Intelligence, Multimodal Learning)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Zepeng-Lin.jpg" alt="林泽鹏" class="member-photo">
      <div class="member-info">
        <div class="member-name">林泽鹏 (Zepeng Lin)</div>
        <div class="member-role">本科生, 2024级</div>
        <div class="member-email">3325973922@qq.com</div>
        <div class="member-research">具身智能，模仿学习，强化学习 (Embodied Intelligence, Imitation Learning, Reinforcement Learning)</div>
        <div class="member-links">
          <a href="https://oplisty.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            个人主页
          </a>
        </div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Lianxin-Geng.jpg" alt="耿连馨" class="member-photo">
      <div class="member-info">
        <div class="member-name">耿连馨 (Lianxin Geng)</div>
        <div class="member-role">本科生, 2024级</div>
        <div class="member-email">wigenglianxin1104@mail.scut.edu.cn</div>
        <div class="member-research">具身智能 (Embodied Intelligence)</div>
      </div>
    </div>
  </div>
</div> -->
<div class="members-section">
  <h2 class="section-heading">Alumni</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/master/He-Han.jpg" alt="韩贺" class="member-photo">
      <div class="member-info">
        <div class="member-name">韩贺 (He Han)</div>
        <div class="member-role">硕士研究生, 2022级</div>
        <div class="member-research">持续学习，硬件部署 (Continual Learning, Hardware Deployment)</div>
      </div>
    </div>
    <div class="member-card">
      <img src="/assets/images/profile/master/Run-He.jpg" alt="何润" class="member-photo">
      <div class="member-info">
        <div class="member-name">何润 (Run He)</div>
        <div class="member-role">硕士研究生, 2023级</div>
        <div class="member-research">持续学习，联邦学习 (Continual Learning, Federated Learning)</div>
        <div class="member-research">毕业去向：香港大学</div>
        <div class="member-links">
          <a href="https://rhe502.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            个人主页
          </a>
        </div>
      </div>
    </div>
    <div class="member-card">
      <img src="/assets/images/profile/master/Liu-Shuo.jpg" alt="刘硕" class="member-photo">
      <div class="member-info">
        <div class="member-name">刘硕 (Shuo Liu)</div>
        <div class="member-role">硕士研究生, 2023级</div>
        <div class="member-research">持续学习，硬件部署 (Continual Learning, Hardware Deployment)</div>
        <div class="member-research">毕业去向：京东</div>
      </div>
    </div>
    <div class="member-card">
      <img src="/assets/images/profile/master/Zhiming-Li.jpg" alt="李志明" class="member-photo">
      <div class="member-info">
        <div class="member-name">李志明 (Zhiming Li)</div>
        <div class="member-role">硕士研究生, 2023级</div>
        <div class="member-research">持续学习，硬件部署 (Continual Learning, Hardware Deployment)</div>
        <div class="member-research">毕业去向：南方电网</div>
      </div>
    </div>
  </div>
</div>
