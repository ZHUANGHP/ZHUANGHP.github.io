---
permalink: /members/
layout: collection
classes: wide
title: "Members"
header:
  overlay_image: /assets/images/members-background-2.jpg
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
  <h2 class="section-heading">Advisor</h2>
  <div class="members-grid">
    <div class="member-card advisor-card">
      <img src="/assets/images/profile/advisor/Huiping-Zhuang.jpg" alt="Professor Huiping Zhuang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Huiping Zhuang (庄辉平)</div>
        <div class="member-role">Associate Professor</div>
        <div class="member-email">hpzhuang@scut.edu.cn</div>
        <div class="member-research">Continual Learning, Embodied AI, Large Model (持续学习、具身智能、大模型)</div>
        <div class="member-links">
          <a href="https://www2.scut.edu.cn/wusie_en/2022/0712/c25923a490131/page.htm" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            Website
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="members-section">
  <h2 class="section-heading">PhD Students</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/phd/Wenbin-Zou.jpg" alt="Wenbin Zou" class="member-photo">
      <div class="member-info">
        <div class="member-name">Wenbin Zou (邹文斌)</div>
        <div class="member-role">PhD Student, 2022</div>
        <div class="member-research">Image Restoration and Generation (图像复原和生成)</div>
        <div class="member-links">
          <a href="https://alexzou14.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            Website
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/phd/Kai-Tong.jpg" alt="Kai Tong" class="member-photo">
      <div class="member-info">
        <div class="member-name">Kai Tong (童楷)</div>
        <div class="member-role">PhD Student, 2023</div>
        <div class="member-research">Continual Learning, Large Language Model, Reinforcement Learning (持续学习，大语言模型，强化学习)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/phd/Boomer.jpg" alt="Boomer" class="member-photo">
      <div class="member-info">
        <div class="member-name">Junfei Wang (王骏飞)</div>
        <div class="member-role">PhD Student, 2024</div>
        <div class="member-research">AI Hardware Accelerator (AI硬件加速器)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/phd/Yue-Yan.jpg" alt="Yue Yan" class="member-photo">
      <div class="member-info">
        <div class="member-name">Yue Yan (严越)</div>
        <div class="member-role">PhD Student, 2025</div>
        <div class="member-research">Continual Learning, MultiModal Learning (持续学习，多模态学习)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/master/Xiang-Tan.jpg" alt="Xiang Tan" class="member-photo">
      <div class="member-info">
        <div class="member-name">Xiang Tan (谭翔)</div>
        <div class="member-role">PhD Student, 2026</div>
        <div class="member-research">Continual Learning, Large Language Model (持续学习，大语言模型)</div>
      </div>
    </div>    

  </div>
</div>

<div class="members-section">
  <h2 class="section-heading">Master Students</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/master/Jianan-Ji.jpg" alt="Jianan Ji" class="member-photo">
      <div class="member-info">
        <div class="member-name">Jianan Ji (纪家楠)</div>
        <div class="member-role">Master Student, 2024</div>
        <div class="member-research">Continual Learning, RL Finetuning of LLM (持续学习，大模型强化微调)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Lipei-Xie.jpg" alt="Lipei Xie" class="member-photo">
      <div class="member-info">
        <div class="member-name">Lipei Xie (谢李培)</div>
        <div class="member-role">Master Student, 2024</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>
    

    
    <div class="member-card">
      <img src="/assets/images/profile/master/Xiang-Zhang.jpg" alt="Xiang Zhang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Xiang Zhang (张翔)</div>
        <div class="member-role">Master Student, 2024</div>
        <div class="member-research">Continual Learning, RL Finetuning of LLM (持续学习，大模型强化微调)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Jialong-Cao.jpg" alt="Jialong Cao" class="member-photo">
      <div class="member-info">
        <div class="member-name">Jialong Cao (曹加龙)</div>
        <div class="member-role">Master Student, 2025</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Suoxin-Zhang.jpg" alt="Suoxin Zhang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Suoxin Zhang (张所鑫)</div>
        <div class="member-role">Master Student, 2025</div>
        <div class="member-research">Large Models (大模型)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Ziqi-Luo.jpg" alt="Ziqi Luo" class="member-photo">
      <div class="member-info">
        <div class="member-name">Ziqi Luo (罗梓齐)</div>
        <div class="member-role">Master Student, 2025</div>
        <div class="member-research">Large Models (大模型)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Di-Fang.jpg" alt="Di Fang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Di Fang (方笛)</div>
        <div class="member-role">Master Student, 2025</div>
        <div class="member-research">Continual Learning, Long-tailed Learning (持续学习，长尾学习)</div>
        <div class="member-links">
          <a href="https://fangd.net" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            Website
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/master/Yingxin-Li.jpg" alt="Yingxin Li" class="member-photo">
      <div class="member-info">
        <div class="member-name">Yingxin Li (李颖欣)</div>
        <div class="member-role">Master Student, 2024 (Joint Training)</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>
  </div>
</div>

<!-- <div class="members-section">
  <h2 class="section-heading">Undergraduate Students</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Shilin-Zhang.jpg" alt="Shilin Zhang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Shilin Zhang (张仕麟)</div>
        <div class="member-role">Undergraduate, 2021</div>
        <div class="member-email">torbjornclancy@gmail.com</div>
        <div class="member-research">Agent (智能体)</div>
        <div class="member-links">
          <a href="https://torbjorn-zhang.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            Website
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Chengyu-Dong.jpg" alt="Chengyu Dong" class="member-photo">
      <div class="member-info">
        <div class="member-name">Chengyu Dong (董程宇)</div>
        <div class="member-role">Undergraduate, 2021</div>
        <div class="member-email">DONG0171@e.ntu.edu.sg</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Haolan-Kang.jpg" alt="Haolan Kang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Haolan Kang (康浩岚)</div>
        <div class="member-role">Undergraduate, 2021</div>
        <div class="member-email">arlenkhlann@gmail.com</div>
        <div class="member-research">Robotics, Embodied Intelligence, Agent (机器人学，具身智能，智能体)</div>
        <div class="member-links">
          <a href="https://khlann.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            Website
          </a>
        </div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Shiyi-Wang.jpg" alt="Shiyi Wang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Shiyi Wang (王实依)</div>
        <div class="member-role">Undergraduate, 2022</div>
        <div class="member-email">202230055267@mail.scut.edu.cn</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Shuquan-Man.jpg" alt="Shuquan Man" class="member-photo">
      <div class="member-info">
        <div class="member-name">Shuquan Man (满书全)</div>
        <div class="member-role">Undergraduate, 2022</div>
        <div class="member-email">wimanshuquan@mail.scut.edu.cn</div>
        <div class="member-research">Large Language Model, Embodied Intelligence (大语言模型，具身智能)</div>
      </div>
    </div>
    
    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Yuzhou-Chen.jpg" alt="Yuzhou Chen" class="member-photo">
      <div class="member-info">
        <div class="member-name">Yuzhou Chen (陈昱舟)</div>
        <div class="member-role">Undergraduate, 2022</div>
        <div class="member-email">chanjoe929@gmail.com</div>
        <div class="member-research">Dexterous Manipulation (灵巧操作)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Jierui-Liu.jpg" alt="Jierui Liu" class="member-photo">
      <div class="member-info">
        <div class="member-name">Jierui Liu (刘杰睿)</div>
        <div class="member-role">Undergraduate, 2023</div>
        <div class="member-email">jerryl01@qq.com</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Zixiao-Wang.jpg" alt="Zixiao Wang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Zixiao Wang (王子翛)</div>
        <div class="member-role">Undergraduate, 2023</div>
        <div class="member-email">270858473@qq.com</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Yidan-Lai.jpg" alt="Yidan Lai" class="member-photo">
      <div class="member-info">
        <div class="member-name">Yidan Lai (赖奕丹)</div>
        <div class="member-role">Undergraduate, 2023</div>
        <div class="member-email">2089246775@qq.com</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Jiahao-Li.jpg" alt="Jiahao Li" class="member-photo">
      <div class="member-info">
        <div class="member-name">Jiahao Li (李佳淏)</div>
        <div class="member-role">Undergraduate, 2023</div>
        <div class="member-email">2977089785@qq.com</div>
        <div class="member-research">Large Language Model, Acceleration of LLM (大语言模型以及模型加速)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Xin-Xiang.jpg" alt="Xin Xiang" class="member-photo">
      <div class="member-info">
        <div class="member-name">Xin Xiang (向欣)</div>
        <div class="member-role">Undergraduate, 2023</div>
        <div class="member-email">widebbie0923@mail.scut.edu.cn</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Jihe-Qin.jpg" alt="Jihe Qin" class="member-photo">
      <div class="member-info">
        <div class="member-name">Jihe Qin (秦基赫)</div>
        <div class="member-role">Undergraduate, 2024</div>
        <div class="member-email">WilliamHVollita@disroot.org</div>
        <div class="member-research">Embodied Intelligence, Multimodal Learning (具身智能, 多模态学习)</div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Zepeng-Lin.jpg" alt="Zepeng Lin" class="member-photo">
      <div class="member-info">
        <div class="member-name">Zepeng Lin (林泽鹏)</div>
        <div class="member-role">Undergraduate, 2024</div>
        <div class="member-email">3325973922@qq.com</div>
        <div class="member-research">Embodied Intelligence, Imitation Learning, Reinforcement Learning (具身智能，模仿学习，强化学习)</div>
        <div class="member-links">
          <a href="https://oplisty.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            Website
          </a>
        </div>
      </div>
    </div>

    <div class="member-card">
      <img src="/assets/images/profile/undergrad/Lianxin-Geng.jpg" alt="Lianxin Geng" class="member-photo">
      <div class="member-info">
        <div class="member-name">Lianxin Geng (耿连馨)</div>
        <div class="member-role">Undergraduate, 2024</div>
        <div class="member-email">wigenglianxin1104@mail.scut.edu.cn</div>
        <div class="member-research">Embodied Intelligence (具身智能)</div>
      </div>
    </div>
  </div>
</div> -->

<div class="members-section">
  <h2 class="section-heading">Alumni</h2>
  <div class="members-grid">
    <div class="member-card">
      <img src="/assets/images/profile/master/He-Han.jpg" alt="He Han" class="member-photo">
      <div class="member-info">
        <div class="member-name">He Han (韩贺)</div>
        <div class="member-role">Master Student, 2022</div>
        <div class="member-research">Continual Learning, Hardware Deployment (持续学习，硬件部署)</div>
      </div>
    </div>
    <div class="member-card">
      <img src="/assets/images/profile/master/Run-He.jpg" alt="Run He" class="member-photo">
      <div class="member-info">
        <div class="member-name">Run He (何润)</div>
        <div class="member-role">Master Student, 2023</div>
        <div class="member-research">Continual Learning, Federated Learning (持续学习，联邦学习)</div>
        <div class="member-research">Destination: The University of Hong Kong</div>
        <div class="member-links">
          <a href="https://rhe502.github.io/" class="member-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12L16 12"></path><path d="M12 8L12 16"></path></svg>
            Website
          </a>
        </div>
      </div>
    </div>
    <div class="member-card">
      <img src="/assets/images/profile/master/Liu-Shuo.jpg" alt="Liu Shuo" class="member-photo">
      <div class="member-info">
        <div class="member-name">Shuo Liu (刘硕)</div>
        <div class="member-role">Master Student, 2023</div>
        <div class="member-research">Continual Learning, Hardware Deployment (持续学习，硬件部署)</div>
        <div class="member-research">Destination: JD.com</div>
      </div>
    </div>
    <div class="member-card">
      <img src="/assets/images/profile/master/Zhiming-Li.jpg" alt="Zhiming Li" class="member-photo">
      <div class="member-info">
        <div class="member-name">Zhiming Li (李志明)</div>
        <div class="member-role">Master Student, 2023</div>
        <div class="member-research">Continual Learning, Hardware Deployment (持续学习，硬件部署)</div>
        <div class="member-research">Destination: China Southern Power Grid</div>
      </div>
    </div>
  </div>
</div>
