---
title: "解析持续学习"
permalink: /zh/research/analytic-continual-learning/
layout: single
lang: zh-CN
classes: wide
---

<style>
.acl-page {
  max-width: 1080px;
  margin: 0 auto;
  color: #26384d;
}

.acl-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  gap: 32px;
  align-items: center;
  padding: 34px 0 26px;
  border-bottom: 1px solid #e6edf5;
}

.acl-eyebrow {
  color: #1f6f8b;
  font-size: 0.78em;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 10px;
}

.acl-hero h1 {
  margin: 0 0 14px;
  color: #163b63;
  font-size: 2.1em;
  line-height: 1.15;
}

.acl-lead {
  font-size: 0.98em;
  line-height: 1.75;
  color: #334a63;
  margin: 0;
  text-align: justify;
}

.acl-hero-image img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dfe8f2;
  box-shadow: 0 8px 24px rgba(22, 59, 99, 0.12);
}

.acl-kpis {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin: 24px 0 34px;
}

.acl-kpi {
  border: 1px solid #e2eaf3;
  border-radius: 8px;
  padding: 18px;
  background: #f8fbfe;
}

.acl-kpi strong {
  display: block;
  color: #163b63;
  font-size: 1.45em;
  line-height: 1.1;
  margin-bottom: 6px;
}

.acl-section {
  margin: 36px 0;
}

.acl-section h2 {
  color: #163b63;
  font-size: 1.35em;
  margin: 0 0 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid #dbe7f3;
}

.acl-section p {
  font-size: 0.9em;
  line-height: 1.75;
  text-align: justify;
}

.acl-timeline {
  display: grid;
  gap: 12px;
}

.acl-step {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 18px;
  padding: 16px 0;
  border-bottom: 1px solid #e7edf4;
}

.acl-step-year {
  color: #1f6f8b;
  font-weight: 700;
}

.acl-step-title {
  font-weight: 700;
  color: #203f61;
  margin-bottom: 5px;
}

.acl-step-body {
  font-size: 0.88em;
  line-height: 1.65;
  color: #3c5068;
}

.acl-paper-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.acl-paper-card {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 16px;
  border: 1px solid #e2eaf3;
  border-radius: 8px;
  padding: 14px;
  background: #ffffff;
}

.acl-paper-card img {
  width: 140px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border: 1px solid #edf1f5;
}

.acl-paper-card h3 {
  font-size: 0.93em;
  line-height: 1.35;
  margin: 0 0 8px;
  color: #163b63;
}

.acl-paper-card p {
  font-size: 0.78em;
  line-height: 1.55;
  margin: 0 0 10px;
  text-align: left;
}

.acl-paper-card a,
.acl-publication-list a,
.acl-actions a {
  color: #1f6f8b;
  font-weight: 700;
  text-decoration: none;
}

.acl-paper-card a:hover,
.acl-publication-list a:hover,
.acl-actions a:hover {
  text-decoration: underline;
}

.acl-publication-list {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.86em;
  line-height: 1.6;
}

.acl-publication-list li {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #e7edf4;
}

.acl-year {
  color: #163b63;
  font-weight: 700;
}

.acl-publication-note {
  margin: -2px 0 22px;
  color: #607286;
  font-size: 0.8em;
  line-height: 1.65;
}

.acl-publication-group {
  margin-top: 26px;
}

.acl-publication-group h3 {
  margin: 0 0 6px;
  color: #203f61;
  font-size: 1em;
}

.acl-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 36px 0 12px;
  padding-top: 20px;
  border-top: 1px solid #e6edf5;
}

@media (max-width: 900px) {
  .acl-hero,
  .acl-paper-card {
    grid-template-columns: 1fr;
  }

  .acl-paper-card img {
    width: 100%;
  }
}

@media (max-width: 720px) {
  .acl-kpis,
  .acl-paper-grid {
    grid-template-columns: 1fr;
  }

  .acl-step {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .acl-publication-list li {
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 8px;
  }
}
</style>

<div class="acl-page">
  <section class="acl-hero">
    <div>
      <div class="acl-eyebrow">特色研究分支</div>
      <h1>解析持续学习</h1>
      <p class="acl-lead">
        解析持续学习（Analytic Continual Learning, ACL）是 MIAA 实验室首创的持续学习分支，也是首个系统地以解析解（闭式解）解决持续学习问题的研究方向。该方向指出，持续的梯度更新会反复改写承载旧知识的模型参数，是造成灾难性遗忘的核心原因。为此，ACL 将增量学习重构为可递归求解的解析问题，通过递归最小二乘等递归解析更新吸收新知识，在不保存和回放历史样本的同时实现旧知识保持。
      </p>
    </div>
    <div class="acl-hero-image">
      <img src="/assets/images/research/CL/GACL.png" alt="解析持续学习概览">
    </div>
  </section>

  <div class="acl-kpis">
    <div class="acl-kpi">
      <strong>30+</strong>
      正式发表论文
    </div>
    <div class="acl-kpi">
      <strong>NeurIPS / ICML / CVPR</strong>
      发表在人工智能顶级会议
    </div>
    <div class="acl-kpi">
      <strong>大模型与具身智能</strong>
      从视觉持续学习继续向外拓展
    </div>
  </div>

  <section class="acl-section">
    <h2>核心思想</h2>
    <p>
      解析持续学习从灾难性遗忘的优化根源出发：当模型依靠梯度下降持续学习新任务时，新梯度会不断覆盖旧任务形成的参数，从而破坏已经获得的知识。ACL 不再依赖这种迭代式梯度更新，而是将增量学习转化为具有闭式解的解析学习问题；模型只需维护自相关矩阵、互相关矩阵等充分统计量，并通过递归最小二乘完成递归解析更新。在相应理论条件下，逐阶段递归学习得到的模型可与使用全部数据进行联合学习的模型等价，从而实现绝对记忆、无历史样本回放、隐私保护与高效训练。
    </p>
  </section>

  <section class="acl-section">
    <h2>方法脉络</h2>
    <div class="acl-timeline">
      <div class="acl-step">
        <div class="acl-step-year">2019–2022</div>
        <div>
          <div class="acl-step-title">解析学习基础与方向奠基</div>
          <div class="acl-step-body">低内存核投影、相关投影与 Blockwise Recursive Moore-Penrose Inverse（BRMP）建立了递归解析求解基础；ACIL 随后提出具有绝对记忆与隐私保护特性的解析类增量学习框架。</div>
        </div>
      </div>
      <div class="acl-step">
        <div class="acl-step-year">2023</div>
        <div>
          <div class="acl-step-title">小样本拓展：GKEAL</div>
          <div class="acl-step-body">GKEAL 将高斯核嵌入解析学习框架，使解析持续学习进入小样本类增量学习场景。</div>
        </div>
      </div>
      <div class="acl-step">
        <div class="acl-step-year">2024</div>
        <div>
          <div class="acl-step-title">广义、在线与多模态持续学习</div>
          <div class="acl-step-body">DS-AL、GACL、F-OAL、MMAL、RAIL 与 REAL 等工作进一步提升拟合能力，拓展到广义任务设置、在线学习、多模态任务和视觉语言模型等场景。</div>
        </div>
      </div>
      <div class="acl-step">
        <div class="acl-step-year">2025</div>
        <div>
          <div class="acl-step-title">基础模型与应用场景扩展</div>
          <div class="acl-step-body">Any-SSR、L3A、AnalyticKWS、CFSSeg、CrossACL、MICIL、ReFu、3D-AOCL 等工作将解析学习推进到大语言模型、多标签识别、语音、分割、遥感和三维点云等场景；AFL 则进一步开拓了解析联邦学习方向。</div>
        </div>
      </div>
      <div class="acl-step">
        <div class="acl-step-year">2026</div>
        <div>
          <div class="acl-step-title">深度解析学习</div>
          <div class="acl-step-body">PAL、DeepAFL 与解析学习次优性研究继续推进缺失模态、深度解析联邦学习和解析分类器理论，为更广泛的轻梯度学习系统打开新的空间。</div>
        </div>
      </div>
    </div>
  </section>

  <section class="acl-section">
    <h2>代表性工作</h2>
    <div class="acl-paper-grid">
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2022-1.png" alt="ACIL">
        <div>
          <h3>ACIL: Analytic Class-Incremental Learning with Absolute Memorization and Privacy Protection</h3>
          <p>NeurIPS 2022。解析持续学习方向的奠基工作。</p>
          <a href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/4b74a42fc81fc7ee252f6bcb6e26c8be-Abstract-Conference.html">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2023-6.png" alt="GKEAL">
        <div>
          <h3>GKEAL: Gaussian Kernel Embedded Analytic Learning for Few-Shot Class Incremental Task</h3>
          <p>CVPR 2023。面向小样本增量任务的核解析学习方法。</p>
          <a href="https://openaccess.thecvf.com/content/CVPR2023/html/Zhuang_GKEAL_Gaussian_Kernel_Embedded_Analytic_Learning_for_Few-Shot_Class_Incremental_CVPR_2023_paper.html">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2024-5.png" alt="GACL">
        <div>
          <h3>GACL: Exemplar-Free Generalized Analytic Continual Learning</h3>
          <p>NeurIPS 2024。将解析学习拓展到广义类增量场景。</p>
          <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/9713d53ee4f31781304b1ca43266f8d1-Abstract-Conference.html">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2024-6.png" alt="F-OAL">
        <div>
          <h3>F-OAL: Forward-only Online Analytic Learning with Fast Training and Low Memory Footprint in Class Incremental Learning</h3>
          <p>NeurIPS 2024。低内存、高效率的在线解析学习。</p>
          <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/48ffa38c13078d6ce26b328e7f373243-Abstract-Conference.html">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2024-9.png" alt="MMAL">
        <div>
          <h3>MMAL: Multi-Modal Analytic Learning for Exemplar-Free Audio-Visual Class Incremental Tasks</h3>
          <p>ACM MM 2024。将解析持续学习拓展到音视频多模态类增量任务。</p>
          <a href="https://doi.org/10.1145/3664647.3681607">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2024-4.png" alt="RAIL">
        <div>
          <h3>Advancing Cross-domain Discriminability in Continual Learning of Vision-Language Models</h3>
          <p>NeurIPS 2024。面向视觉语言模型跨域持续学习的递归岭回归方法。</p>
          <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/5c34c2a3462cbfd5e258c29974d60cca-Abstract-Conference.html">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2025-6.png" alt="AFL">
        <div>
          <h3>AFL: A Single-Round Analytic Approach for Federated Learning with Pre-trained Models</h3>
          <p>CVPR 2025。面向单轮联邦学习的解析聚合方法。</p>
          <a href="https://openaccess.thecvf.com/content/CVPR2025/html/He_AFL_A_Single-Round_Analytic_Approach_for_Federated_Learning_with_Pre-trained_CVPR_2025_paper.html">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2025-11.png" alt="Any-SSR">
        <div>
          <h3>Any-SSR: How Recursive Least Squares Works in Continual Learning of Large Language Models</h3>
          <p>ICCV 2025。递归最小二乘在大语言模型持续学习中的应用。</p>
          <a href="https://openaccess.thecvf.com/content/ICCV2025/html/Tong_Any-SSR_How_Recursive_Least_Squares_Works_in_Continual_Learning_of_ICCV_2025_paper.html">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/papers/2025-10.png" alt="AnalyticKWS">
        <div>
          <h3>AnalyticKWS: Towards Exemplar-Free Analytic Class Incremental Learning for Small-footprint Keyword Spotting</h3>
          <p>ACL Findings 2025。将解析持续学习拓展到小型关键词识别任务。</p>
          <a href="https://aclanthology.org/2025.findings-acl.728/">Paper</a>
        </div>
      </div>
      <div class="acl-paper-card">
        <img src="/assets/images/news/deepafl.png" alt="DeepAFL">
        <div>
          <h3>DeepAFL: Deep Analytic Federated Learning</h3>
          <p>ICLR 2026。进一步探索深度网络中的解析联邦学习机制。</p>
          <a href="https://openreview.net/forum?id=ve3EzAvMGe">Paper</a>
        </div>
      </div>
    </div>
  </section>

  <section class="acl-section">
    <h2>完整论文地图</h2>
    <p class="acl-publication-note">依据 Google Scholar 公开条目、DBLP、论文官网与实验室论文页交叉核对，仅列出正式发表版本。AOCIL→F-OAL、G-ACIL→GACL、ASR→Any-SSR、SegACIL→CFSSeg 等曾用题目不再单独列出。</p>

    <div class="acl-publication-group">
      <h3>解析学习与递归求解基础</h3>
      <ul class="acl-publication-list">
        <li><span class="acl-year">2019</span><span><a href="https://doi.org/10.1109/IJCNN.2019.8852122">A Low-Memory Learning Formulation for a Kernel-and-Range Network</a>. IJCNN 2019.</span></li>
        <li><span class="acl-year">2020</span><span><a href="https://doi.org/10.1016/j.jfranklin.2019.11.074">Training a multilayer network with low-memory kernel-and-range projection</a>. Journal of the Franklin Institute.</span></li>
        <li><span class="acl-year">2021</span><span><a href="https://doi.org/10.1007/s11063-021-10570-2">Correlation Projection for Analytic Learning of a Classification Network</a>. Neural Processing Letters.</span></li>
        <li><span class="acl-year">2021</span><span><a href="https://doi.org/10.1109/ISCAS51556.2021.9401126">Training Multilayer Neural Networks Analytically Using Kernel Projection</a>. ISCAS 2021.</span></li>
        <li><span class="acl-year">2022</span><span><a href="https://doi.org/10.1109/TSMC.2021.3064241">Blockwise Recursive Moore-Penrose Inverse for Network Learning</a>. IEEE TSMC.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1016/j.ins.2024.121317">An analytic formulation of convolutional neural network learning for pattern recognition</a>. Information Sciences.</span></li>
      </ul>
    </div>

    <div class="acl-publication-group">
      <h3>解析持续学习主线与场景拓展</h3>
      <ul class="acl-publication-list">
        <li><span class="acl-year">2022</span><span><a href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/4b74a42fc81fc7ee252f6bcb6e26c8be-Abstract-Conference.html">ACIL: Analytic Class-Incremental Learning with Absolute Memorization and Privacy Protection</a>. NeurIPS 2022.</span></li>
        <li><span class="acl-year">2023</span><span><a href="https://openaccess.thecvf.com/content/CVPR2023/html/Zhuang_GKEAL_Gaussian_Kernel_Embedded_Analytic_Learning_for_Few-Shot_Class_Incremental_CVPR_2023_paper.html">GKEAL: Gaussian Kernel Embedded Analytic Learning for Few-Shot Class Incremental Task</a>. CVPR 2023.</span></li>
        <li><span class="acl-year">2024</span><span><a href="https://doi.org/10.1609/aaai.v38i15.29670">DS-AL: A Dual-Stream Analytic Learning for Exemplar-Free Class-Incremental Learning</a>. AAAI 2024.</span></li>
        <li><span class="acl-year">2024</span><span><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/9713d53ee4f31781304b1ca43266f8d1-Abstract-Conference.html">GACL: Exemplar-Free Generalized Analytic Continual Learning</a>. NeurIPS 2024.</span></li>
        <li><span class="acl-year">2024</span><span><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/48ffa38c13078d6ce26b328e7f373243-Abstract-Conference.html">F-OAL: Forward-only Online Analytic Learning with Fast Training and Low Memory Footprint in Class Incremental Learning</a>. NeurIPS 2024.</span></li>
        <li><span class="acl-year">2024</span><span><a href="https://doi.org/10.1145/3664647.3681607">MMAL: Multi-Modal Analytic Learning for Exemplar-Free Audio-Visual Class Incremental Tasks</a>. ACM MM 2024.</span></li>
        <li><span class="acl-year">2024</span><span><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/5c34c2a3462cbfd5e258c29974d60cca-Abstract-Conference.html">Advancing Cross-domain Discriminability in Continual Learning of Vision-Language Models</a>. NeurIPS 2024.</span></li>
        <li><span class="acl-year">2024</span><span><a href="https://doi.org/10.1016/j.jfranklin.2024.107285">Class incremental learning with analytic learning for hyperspectral image classification</a>. Journal of the Franklin Institute.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1016/j.knosys.2025.114901">REAL: Representation enhanced analytic learning for exemplar-free class-incremental learning</a>. Knowledge-Based Systems.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1109/LSP.2024.3509338">Analytic Class Incremental Learning for Sound Source Localization With Privacy Protection</a>. IEEE Signal Processing Letters.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1109/TVT.2024.3483557">Online Analytic Exemplar-Free Continual Learning With Large Models for Imbalanced Autonomous Driving Task</a>. IEEE Transactions on Vehicular Technology.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://openaccess.thecvf.com/content/WACV2025/html/Yang_ReFu_Recursive_Fusion_for_Exemplar-Free_3D_Class-Incremental_Learning_WACV_2025_paper.html">ReFu: Recursive Fusion for Exemplar-Free 3D Class-Incremental Learning</a>. WACV 2025.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1016/j.aej.2024.10.037">3D-AOCL: Analytic online continual learning for imbalanced 3D point cloud classification</a>. Alexandria Engineering Journal.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://proceedings.mlr.press/v267/zhang25y.html">L3A: Label-Augmented Analytic Adaptation for Multi-Label Class Incremental Learning</a>. ICML 2025.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://proceedings.mlr.press/v267/he25d.html">Semantic Shift Estimation via Dual-Projection and Classifier Reconstruction for Exemplar-Free Class-Incremental Learning</a>. ICML 2025.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1109/LGRS.2025.3587593">CrossACL: Analytic Continual Learning via Feature Cross for Hyperspectral Image Classification</a>. IEEE GRSL.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1016/j.knosys.2025.114778">Multi-modality integrated class incremental learning networks for 3D object recognition</a>. Knowledge-Based Systems.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1145/3746027.3755023">CFSSeg: Closed-Form Solution for Class-Incremental Semantic Segmentation of 2D Images and 3D Point Clouds</a>. ACM MM 2025.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1145/3746027.3755545">Analytic Continual Test-Time Adaptation for Multi-Modality Corruption</a>. ACM MM 2025.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://aclanthology.org/2025.findings-acl.728/">AnalyticKWS: Towards Exemplar-Free Analytic Class Incremental Learning for Small-footprint Keyword Spotting</a>. ACL Findings 2025.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://openaccess.thecvf.com/content/ICCV2025/html/Tong_Any-SSR_How_Recursive_Least_Squares_Works_in_Continual_Learning_of_ICCV_2025_paper.html">Any-SSR: How Recursive Least Squares Works in Continual Learning of Large Language Models</a>. ICCV 2025.</span></li>
        <li><span class="acl-year">2026</span><span><a href="https://doi.org/10.1016/j.patcog.2026.113467">PAL: Prompting analytic learning with missing modality for multi-modal class-incremental learning</a>. Pattern Recognition.</span></li>
        <li><span class="acl-year">2026</span><span><a href="https://doi.org/10.1109/TCSVT.2025.3631593">Rethinking Obscured Sub-Optimality in Analytic Learning for Exemplar-Free Class-Incremental Learning</a>. IEEE TCSVT.</span></li>
      </ul>
    </div>

    <div class="acl-publication-group">
      <h3>解析联邦学习与持续服务拓展</h3>
      <ul class="acl-publication-list">
        <li><span class="acl-year">2025</span><span><a href="https://openaccess.thecvf.com/content/CVPR2025/html/He_AFL_A_Single-Round_Analytic_Approach_for_Federated_Learning_with_Pre-trained_CVPR_2025_paper.html">AFL: A Single-Round Analytic Approach for Federated Learning with Pre-trained Models</a>. CVPR 2025.</span></li>
        <li><span class="acl-year">2025</span><span><a href="https://doi.org/10.1145/3729473">CALM: A Ubiquitous Crowdsourced Analytic Learning Mechanism for Continual Service Construction with Data Privacy Preservation</a>. Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies.</span></li>
        <li><span class="acl-year">2026</span><span><a href="https://openreview.net/forum?id=ve3EzAvMGe">DeepAFL: Deep Analytic Federated Learning</a>. ICLR 2026.</span></li>
      </ul>
    </div>
  </section>

  <div class="acl-actions">
    <a href="/zh/research/continual-learning/">返回持续学习</a>
    <a href="/zh/publications/">查看论文列表</a>
    <a href="https://scholar.google.com.sg/citations?user=vCXxuLkAAAAJ&hl=en">Google Scholar</a>
  </div>
</div>
