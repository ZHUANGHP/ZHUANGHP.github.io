---
permalink: /publications/
layout: collection
title: "Publications"
---

<style>
  :root {
    --pub-primary: #0b5aa2;
    --pub-primary-dark: #083a67;
    --pub-accent: #eef5ff;
    --pub-border: #d9e5f2;
    --pub-text: #2f3d4f;
    --pub-muted: #66768a;
    --pub-card: #ffffff;
    --pub-shadow: rgba(17, 45, 78, 0.08);
  }

  .pub-overview {
    display: none;
  }

  .pub-overview h2 {
    margin: 0 0 6px;
    color: var(--pub-primary-dark);
    font-size: 1.08em;
  }

  .pub-overview p {
    margin: 0;
    color: var(--pub-text);
    line-height: 1.6;
    font-size: 0.84em;
  }

  .pub-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 6px;
  }

  .pub-nav a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 9px;
    border-radius: 999px;
    border: 1px solid #cfe0f2;
    background: #ffffff;
    color: var(--pub-primary-dark);
    font-size: 0.72em;
    font-weight: 700;
    text-decoration: none;
  }

  .pub-nav a:hover {
    color: var(--pub-primary);
    border-color: #9ec1e6;
  }

  .pub-shell > h3,
  .pub-shell > h4 {
    scroll-margin-top: 88px;
  }

  .pub-year {
    margin: 14px 0 4px;
    padding-bottom: 3px;
    border-bottom: 1px solid #dfe8f2;
    color: var(--pub-primary-dark);
    font-size: 1.05em;
  }

  .pub-type {
    margin: 0 0 2px;
    color: #4d6074;
    font-size: 0.74em;
    letter-spacing: 0.01em;
    text-transform: none;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] {
    display: block !important;
    gap: 0;
    align-items: flex-start;
    padding: 4px 0;
    margin-bottom: 0 !important;
    border: none;
    border-bottom: 1px solid #e7edf5;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    transition: background-color 0.18s ease, border-color 0.18s ease;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"]:hover {
    background: #fcfdff;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] > div:first-child {
    display: none !important;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] > div:last-child {
    min-width: 0;
    color: var(--pub-text);
    line-height: 1.28;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] > div:last-child br {
    display: none;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] strong {
    display: inline;
    margin: 0;
    color: var(--pub-primary-dark);
    font-size: 0.84em;
    line-height: 1.28;
    font-weight: 700;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] strong::after {
    content: ". ";
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] em {
    display: inline;
    margin: 0;
    color: var(--pub-muted);
    font-style: normal;
    line-height: 1.28;
    font-size: 0.78em;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] em:first-of-type::after {
    content: ". ";
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] em:last-of-type::after {
    content: ". ";
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] a {
    display: inline;
    margin-top: 0;
    margin-right: 0;
    padding: 0;
    border: none;
    border-radius: 0;
    background: transparent;
    color: var(--pub-primary);
    font-size: 0.76em;
    font-weight: 600;
    text-decoration: none;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] a:hover {
    color: var(--pub-primary);
    text-decoration: underline;
  }

  .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] a + a {
    margin-left: 8px;
  }

  @media screen and (max-width: 768px) {
    .pub-year {
      font-size: 0.98em;
    }

    .pub-shell > div[style*="display: flex; margin-bottom: 20px;"] {
      padding: 3px 0;
    }
  }
</style>

<div class="pub-overview">
  <h2>Selected Publications</h2>
  <p>
    This page highlights representative papers from the lab across continual learning, large models, embodied intelligence, federated learning, and multimodal understanding. We refreshed the layout and added direct code links whenever a public repository is available, so the page works better both as a publication list and as a research showcase.
  </p>
</div>

<div class="pub-nav">
  <a href="#y2026">2026</a>
  <a href="#y2025">2025</a>
  <a href="#y2024">2024</a>
  <a href="#y2023">2023</a>
  <a href="#y2022">2022</a>
</div>

<div class="pub-shell">
<h3 id="y2026" class="pub-year">2026</h3>
<h4 class="pub-type">Conference Papers</h4>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/blank.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>X-SGS: Safe and Generalizable Gaussian Splatting with X-dimensional Watermarks</strong><br>
    <em>Zihang Cheng, Wentao Bao, Huiping Zhuang, Chun Li, Xin Meng, Ziqian Zeng, Cen Chen, Ming Li, Fei Yu</em><br>
    <em>ECCV 2026</em><br>
    <a href="https://openreview.net/forum?id=swmf7Wuv3o">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/blank.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>AnaPFL: When Closed-Form Solutions Meet Generalization and Personalization in Personalized Federated Learning</strong><br>
    <em>Kejia Fan, Jianheng Tang, Zhirui Yang, Feijiang Han, Yajiang Huang, Run He, Jiaxu Li, Songning Lai, Anfeng Liu, Houbing Herbert Song, Yunhuai Liu, Huiping Zhuang</em><br>
    <em>ECCV 2026</em><br>
    <a href="https://openreview.net/forum?id=QINxiI8jrF">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/news/deepafl.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>DeepAFL: Deep Analytic Federated Learning</strong><br>
    <em>Jianheng Tang, Yajiang Huang, Kejia Fan, Feijiang Han, Jiaxu Li, Jinfeng Xu, Run He, Anfeng Liu, Houbing Herbert Song, Huiping Zhuang, Yunhuai Liu</em><br>
    <em>ICLR 2026</em><br>
    <a href="https://openreview.net/forum?id=ve3EzAvMGe">Paper</a><a href="https://github.com/tangent-heng/DeepAFL">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/news/mani.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>ManipEvalAgent: Promptable and Efficient Evaluation Framework for Robotic Manipulation Policies</strong><br>
    <em>Yiteng Chen, Huiping Zhuang, Wenbo Li, Shiyi Wang, Xiangyu Zhao, Qingyao Wu</em><br>
    <em>ICLR 2026</em><br>
    <a href="https://openreview.net/forum?id=3u6AkbWEls">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/news/wina.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>WINA: Weight Informed Neuron Activation for Accelerating Large Language Model Inference</strong><br>
    <em>Sihan Chen, Dan Zhao, Jongwoo Ko, Colby Banbury, Huiping Zhuang, Luming Liang, Pashmina Cameron, Tianyi Chen</em><br>
    <em>ICLR 2026</em><br>
    <a href="https://openreview.net/forum?id=l7Vb3yxmuz">Paper</a><a href="https://github.com/microsoft/wina">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/news/rcp.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>RCP-Merging: Merging Long Chain-of-Thought Models with Domain-Specific Models by Considering Reasoning Capability as Prior</strong><br>
    <em>Junyao Yang, Jianwei Wang, Huiping Zhuang, Cen Chen, Ziqian Zeng</em><br>
    <em>AAAI 2026</em><br>
    <a href="https://arxiv.org/abs/2508.03140">Paper</a>
  </div>
</div>

<h3 id="y2025" class="pub-year">2025</h3>
<h4 class="pub-type">Conference Papers</h4>


<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-17.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Probabilistic Mixture of Hyperbolic Mamba for Few-Shot Class-Incremental Learning</strong><br>
    <em>Y Cui, W Zou, Huiping Zhuang, Y Wang, LP Chau</em><br>
    <em>Proceedings of the 33rd ACM International Conference on Multimedia (ACM MM 2025)</em><br>
    <a href="https://dl.acm.org/doi/10.1145/3746027.3755306">Paper</a><a href="https://github.com/yawencui/PmH-SSE">Code</a>
  </div>
</div>



<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-18.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>CFSSeg: Closed-Form Solution for Class-Incremental Semantic Segmentation of 2D Images and 3D Point Clouds</strong><br>
    <em>J Li, R Li, J Qi, S Lai, L Lv, K Fan, J Tang, Y Yue, D Zhou, Y Liu, Huiping Zhuang</em><br>
    <em>Proceedings of the 33rd ACM International Conference on Multimedia (ACM MM 2025)</em><br>
    <a href="https://arxiv.org/abs/2412.10834">Paper</a>
  </div>
</div>



<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-10.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>AnalyticKWS: Towards Exemplar-Free Analytic Class Incremental Learning for Small-Footprint Keyword Spotting</strong><br>
    <em>Yang Xiao, Tianyi Peng, Rohan Kumar Das, Yuchen Hu, Huiping Zhuang</em><br>
    <em>Findings of the Association for Computational Linguistics: ACL 2025</em><br>
    <a href="https://aclanthology.org/2025.findings-acl.728/">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-19.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>GenderAlign: An Alignment Dataset for Mitigating Gender Bias in Large Language Models</strong><br>
    <em>Tao Zhang, Ziqian Zeng, Yuxiang Xiao, Huiping Zhuang, Cen Chen, James R. Foulds, Shimei Pan</em><br>
    <em>Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)</em><br>
    <a href="https://aclanthology.org/2025.acl-long.553/">Paper</a><a href="https://github.com/ZeroNLP/GenderAlign">Code</a>
  </div>
</div>


<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-20.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>PrivacyRestore: Privacy-Preserving Inference in Large Language Models via Privacy Removal and Restoration</strong><br>
    <em>Ziqian Zeng, Jianwei Wang, Junyao Yang, Zhengdong Lu, Haoran Li, Huiping Zhuang, Cen Chen</em><br>
    <em>Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)</em><br>
    <a href="https://aclanthology.org/2025.acl-long.532/">Paper</a><a href="https://github.com/wjw136/PrivacyRestore">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-12.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Semantic Shift Estimation via Dual-Projection and Classifier Reconstruction for Exemplar-Free Class-Incremental Learning</strong><br>
    <em>Run He, Di Fang, Yicheng Xu, Yawen Cui, Ming Li, Cen Chen, Ziqian Zeng, Huiping Zhuang</em><br>
    <em>ICML 2025</em><br>
    <a href="https://proceedings.mlr.press/v267/he25d.html">Paper</a><a href="https://github.com/RHe502/ICML25-DPCR">Code</a>
  </div>
</div>


<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-21.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>L3A: Label-Augmented Analytic Adaptation for Multi-Label Class Incremental Learning</strong><br>
    <em>Xiang Zhang, Run He, Jiao Chen, Di Fang, Ming Li, Ziqian Zeng, Cen Chen, Huiping Zhuang</em><br>
    <em>ICML 2025</em><br>
    <a href="https://proceedings.mlr.press/v267/zhang25y.html">Paper</a><a href="https://github.com/scut-zx/L3A">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/news/WMG1.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>WMarkGPT: Watermarked Image Understanding via Multi-modal Large Language Models</strong><br>
    <em>Songbai Tan, Xuerui Qiu, Yao Shu, Gang Xu, Linrui Xu, Xiangyu Xu, Huiping Zhuang, Ming Li, Fei Yu</em><br>
    <em>ICML 2025</em><br>
    <a href="https://proceedings.mlr.press/v267/tan25f.html">Paper</a><a href="https://github.com/TanSongBai/WMarkGPT">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-11.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Any-SSR: How Recursive Least Squares Works in Continual Learning of Large Language Model</strong><br>
    <em>Kai Tong, Kang Pan, Xiao Zhang, Erli Meng, Run He, Yawen Cui, Nuoyan Guo, Huiping Zhuang</em><br>
    <em>ICCV 2025</em><br>
    <a href="https://openaccess.thecvf.com/content/ICCV2025/html/Tong_Any-SSR_How_Recursive_Least_Squares_Works_in_Continual_Learning_of_ICCV_2025_paper.html">Paper</a><a href="https://github.com/ZHUANGHP/Any-SSR">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-6.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>AFL: A Single-Round Analytic Approach for Federated Learning with Pre-trained Models</strong><br>
    <em>Run He, Kai Tong, Di Fang, Han Sun, Haoran Li, Tianyi Chen, Ziqian Zeng, Huiping Zhuang</em><br>
    <em>CVPR 2025</em><br>
    <a href="https://openaccess.thecvf.com/content/CVPR2025/html/He_AFL_A_Single-Round_Analytic_Approach_for_Federated_Learning_with_Pre-trained_CVPR_2025_paper.html">Paper</a><a href="https://github.com/ZHUANGHP/Analytic-federated-learning">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-14.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>SEA: Low-Resource Safety Alignment for Multimodal Large Language Models via Synthetic Embeddings</strong><br>
    <em>Weikai Lu, Hao Peng, Huiping Zhuang, Cen Chen, Ziqian Zeng</em><br>
    <em>Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)</em><br>
    <a href="https://aclanthology.org/2025.acl-long.1212/">Paper</a><a href="https://github.com/ZeroNLP/SEA">Code</a>
  </div>
</div>


<h4 class="pub-type">Journal Papers</h4>
<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-1.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Online weighted hashing for cross-modal retrieval</strong><br>
    <em>Zining Jiang, Zhenyu Weng, Runhao Li, Huiping Zhuang, Zhiping Lin</em><br>
    <em>Pattern Recognition 161, 111232</em><br>
    <a href="https://www.sciencedirect.com/science/article/abs/pii/S003132032400983X">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-2.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>DRViT: A Dynamic Redundancy-Aware Vision Transformer Accelerator via Algorithm and Architecture Co-design on FPGA</strong><br>
    <em>Xiangfeng Sun, Yuanting Zhang, Qinyu Wang, Xiaofeng Zou, Yujia Liu, Ziqian Zeng, Huiping Zhuang</em><br>
    <em>Journal of Parallel and Distributed Computing, 105042</em><br>
    <a href="https://www.sciencedirect.com/science/article/pii/S0743731525000097">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-3.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Subkv: Quantizing Long Context KV Cache for Sub‐Billion Parameter Language Models on Edge Devices</strong><br>
    <em>Ziqian Zeng, Tao Zhang, Zhengdong Lu, Wenjun Li, Huiping Zhuang, Hongen Shao, Sin G. Teo, Xiaofeng Zou</em><br>
    <em>Software: Practice and Experience</em><br>
    <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/spe.3422">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-4.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>3D-AOCL: Analytic online continual learning for imbalanced 3D point cloud classification</strong><br>
    <em>Ziqian Zeng, Jianwei Wang, Lin Wu, Weikai Lu, Huiping Zhuang</em><br>
    <em>Alexandria Engineering Journal 111, 530-539</em><br>
    <a href="https://www.sciencedirect.com/science/article/pii/S111001682401192X">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-5.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>An analytic formulation of convolutional neural network learning for pattern recognition</strong><br>
    <em>Huiping Zhuang, Zhiping Lin, Yimin Yang, Kar-Ann Toh</em><br>
    <em>Information Sciences 686, 121317</em><br>
    <a href="https://www.sciencedirect.com/science/article/pii/S0020025524012313">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2025-17.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>ResDecode: Accelerating Large Language Models Inference via Residual Decoding Heads</strong><br>
    <em>Ziqian Zeng, Jiahong Yu, Qianshi Pang, Zihao Wang, Huiping Zhuang, Fan Yu, Hongen Shao, Xiaofeng Zou</em><br>
    <em>Big Data Mining and Analytics 8 (4), 779-793</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/11002449">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-28.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>REAL: Representation Enhanced Analytic Learning for Exemplar-free Class-incremental Learning</strong><br>
    <em>Run He, Huiping Zhuang, Di Fang, Yizhu Chen, Kai Tong, Cen Chen</em><br>
    <em>Knowledge-Based Systems</em><br>
    <a href="https://arxiv.org/abs/2403.13522">Paper</a>
  </div>
</div>


<h3 id="y2024" class="pub-year">2024</h3>

<h4 class="pub-type">Conference Papers</h4>
<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-1.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Joint-Neighborhood Product Quantization for Unsupervised Cross-Modal Retrieval</strong><br>
    <em>Runhao Li, Zhenyu Weng, Yongming Chen, Huiping Zhuang, Yap-Peng Tan, Zhiping Lin</em><br>
    <em>2024 IEEE International Conference on Visual Communications and Image</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/10849920">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-4.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Advancing Cross-domain Discriminability in Continual Learning of Vision-Language Models</strong><br>
    <em>Yicheng Xu, Yuxin Chen, Jiahao Nie, Yusong Wang, Huiping Zhuang, Manabu Okumura</em><br>
    <em>NeurIPS 2024</em><br>
    <a href="https://arxiv.org/abs/2406.18868">Paper</a><a href="https://github.com/linghan1997/Regression-based-Analytic-Incremental-Learning">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-5.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>GACL: Exemplar-Free Generalized Analytic Continual Learning</strong><br>
    <em>Huiping Zhuang, Yizhu Chen, Di Fang, Run He, Kai Tong, Hongxin Wei, Zigian Zeng, Cen Chen</em><br>
    <em>NeurIPS 2024</em><br>
    <a href="https://arxiv.org/abs/2403.15706">Paper</a><a href="https://github.com/CHEN-YIZHU/GACL">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-6.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>F-OAL: Forward-only Online Analytic Learning with Fast Training and Low Memory Footprint in Class Incremental Learning</strong><br>
    <em>Huiping Zhuang, Yuchen Liu, Run He, Kai Tong, Ziqian Zeng, Cen Chen, Yi Wang, Lap-Pui Chau</em><br>
    <em>NeurIPS 2024</em><br>
    <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/48ffa38c13078d6ce26b328e7f373243-Abstract-Conference.html">Paper</a><a href="https://github.com/liuyuchen-cz/F-OAL">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-9.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>MMAL: Multi-Modal Analytic Learning for Exemplar-Free Audio-Visual Class Incremental Tasks</strong><br>
    <em>Xianghu Yue, Xueyi Zhang, Yiming Chen, Chengwei Zhang, Mingrui Lao, Huiping Zhuang, Xinyuan Qian, Haizhou Li</em><br>
    <em>Proceedings of the 32nd ACM International Conference on Multimedia, 2428-2437</em><br>
    <a href="https://dl.acm.org/doi/abs/10.1145/3664647.3681607">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-12.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Complex Motion Planning for Quadruped Robots Using Large Language Models</strong><br>
    <em>Xiang Zhang, Run He, Kai Tong, Shuquan Man, Jingyu Tong, Haodong Li, Huiping Zhuang</em><br>
    <em>2024 IEEE International Symposium on Circuits and Systems (ISCAS), 1-5</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/10558349">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-13.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Zero-shot Event Detection using a Textual Entailment Model as an Enhanced Annotator</strong><br>
    <em>Ziqian Zeng, Runyu Wu, Yuxiang Xiao, Xiaoda Zhong, Hanlin Wang, Zhengdong Lu, Huiping Zhuang</em><br>
    <em>Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)</em><br>
    <a href="https://aclanthology.org/2024.lrec-main.1552/">Paper</a><a href="https://github.com/ZeroNLP/Distar">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-14.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>DS-AL: A dual-stream analytic learning for exemplar-free class-incremental learning</strong><br>
    <em>Huiping Zhuang, Run He, Kai Tong, Ziqian Zeng, Cen Chen, Zhiping Lin</em><br>
    <em>Proceedings of the AAAI Conference on Artificial Intelligence 38 (15), 17237</em><br>
    <a href="https://ojs.aaai.org/index.php/AAAI/article/view/29670">Paper</a><a href="https://github.com/ZHUANGHP/Analytic-continual-learning">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-15.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Consistentee: A consistent and hardness-guided early exiting method for accelerating language models inference</strong><br>
    <em>Ziqian Zeng, Yihuai Hong, Hongliang Dai, Huiping Zhuang, Cen Chen</em><br>
    <em>Proceedings of the AAAI Conference on Artificial Intelligence 38 (17), 19506</em><br>
    <a href="https://ojs.aaai.org/index.php/AAAI/article/view/29922">Paper</a><a href="https://github.com/ZeroNLP/ConsistentEE">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-30.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Mitigating privacy risk in membership inference by convex-concave loss</strong><br>
    <em>Zhenlong Liu, Lei Feng, Huiping Zhuang, Xiaofeng Cao, Hongxin Wei</em><br>
    <em>ICML 2024</em><br>
    <a href="https://arxiv.org/abs/2402.05453">Paper</a>
  </div>
</div>

<h4 class="pub-type">Journal Papers</h4>
<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-2.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Class incremental learning with analytic learning for hyperspectral image classification</strong><br>
    <em>Huiping Zhuang, Yue Yan, Run He, Ziqian Zeng</em><br>
    <em>Journal of the Franklin Institute 361 (18), 107285</em><br>
    <a href="https://www.sciencedirect.com/science/article/pii/S0016003224007063">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-3.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Analytic class incremental learning for sound source localization with privacy protection</strong><br>
    <em>Xinyuan Qian, Xianghu Yue, Jiadong Wang, Huiping Zhuang, Haizhou Li</em><br>
    <em>IEEE Signal Processing Letters</em><br>
    <a href="https://link.springer.com/article/10.1007/s13042-024-02446-3">Paper</a><a href="https://github.com/ZeroNLP/Distar">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-7.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Zero-shot event argument extraction by disentangling trigger from argument and role</strong><br>
    <em>Zhengdong Lu, Ziqian Zeng, Jianwei Wang, Hanlin Wang, Weikai Lu, Huiping Zhuang</em><br>
    <em>International Journal of Machine Learning and Cybernetics</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/10771830">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-8.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Less confidence, less forgetting: Learning with a humbler teacher in exemplar-free Class-Incremental learning</strong><br>
    <em>Zijian Gao, Kele Xu, Huiping Zhuang, Li Liu, Xinjun Mao, Bo Ding, Dawei Feng, Huaimin Wang</em><br>
    <em>Neural Networks 179, 106513</em><br>
    <a href="https://www.sciencedirect.com/science/article/pii/S0893608024004374">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-10.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Online Analytic Exemplar-Free Continual Learning with Large Models for Imbalanced Autonomous Driving Task</strong><br>
    <em>Huiping Zhuang, Di Fang, Kai Tong, Yuchen Liu, Ziqian Zeng, Xu Zhou, Cen Chen</em><br>
    <em>IEEE Transactions on Vehicular Technology</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/10721370">Paper</a><a href="https://github.com/ZHUANGHP/Analytic-continual-learning">Code</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-11.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>A three-stream fusion and self-differential attention network for multi-modal crowd counting</strong><br>
    <em>Haihan Tang, Yi Wang, Zhiping Lin, Lap-Pui Chau, Huiping Zhuang</em><br>
    <em>Pattern Recognition Letters 183, 35-41</em><br>
    <a href="https://www.sciencedirect.com/science/article/pii/S016786552400134X">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-16.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Efficient Point Cloud Video Recognition via Spatio-Temporal Pruning for MEC-Based Consumer Applications</strong><br>
    <em>Cen Chen, Songyu Xie, Jing Liu, Zhongyao Cheng, Ziqian Zeng, Huiping Zhuang</em><br>
    <em>IEEE Transactions on Consumer Electronics, vol. 70, no. 1, pp. 4108-4119, Feb. 2024</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/10433077">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2024-17.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Explored seeds generation for weakly supervised semantic segmentation</strong><br>
    <em>Terence Chow, Haojin Deng, Yimin Yang, Zhiping Lin, Huiping Zhuang, Shan Du</em><br>
    <em>Neural Computing and Applications 36 (2), 1007-1022</em><br>
    <a href="https://link.springer.com/article/10.1007/s00521-023-09073-z">Paper</a>
  </div>
</div>







<h3 id="y2023" class="pub-year">2023</h3>

<h4 class="pub-type">Conference Papers</h4>
<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2023-3.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Neighborhood learning from noisy labels for cross-modal retrieval</strong><br>
    <em>Runhao Li, Zhenyu Weng, Huiping Zhuang, Yongming Chen, Zhiping Lin</em><br>
    <em>2023 IEEE International Symposium on Circuits and Systems (ISCAS), 1-5</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/10181441">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2023-2.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Mitigating memorization of noisy labels by clipping the model prediction</strong><br>
    <em>Hongxin Wei, Huiping Zhuang, Renchunzi Xie, Lei Feng, Gang Niu, Bo An, Yixuan Li</em><br>
    <em>International conference on machine learning, 36868-36886</em><br>
    <a href="https://proceedings.mlr.press/v202/wei23e.html">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2023-6.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>GKEAL: Gaussian Kernel Embedded Analytic Learning for Few-shot Class Incremental Task</strong><br>
    <em>Huiping Zhuang, Zhenyu Weng, Run He, Zhiping Lin, Ziqian Zeng</em><br>
    <em>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2023</em><br>
    <a href="https://ieeexplore.ieee.org/document/10204448">Paper</a><a href="https://github.com/ZHUANGHP/Analytic-continual-learning">Code</a>
  </div>
</div>

<h4 class="pub-type">Journal Papers</h4>
<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2023-1.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Few-Shot Contrastive Transfer Learning With Pretrained Model for Masked Face Verification</strong><br>
    <em>Zhenyu Weng, Huiping Zhuang, Fulin Luo, Haizhou Li, Zhiping Lin</em><br>
    <em>IEEE Transactions on Multimedia, vol. 26, pp. 3871-3883, 2024</em><br>
    <a href="https://ieeexplore.ieee.org/document/10255301">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2023-4.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Attention multihop graph and multiscale convolutional fusion network for hyperspectral image classification</strong><br>
    <em>Hao Zhou, Fulin Luo, Huiping Zhuang, Zhenyu Weng, Xiuwen Gong, Zhiping Lin</em><br>
    <em>IEEE Transactions on Geoscience and Remote Sensing 61, 1-14</em><br>
    <a href="https://ieeexplore.ieee.org/abstract/document/10098209">Paper</a>
  </div>
</div>

<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2023-5.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>Decoupled neural network training with re-computation and weight prediction</strong><br>
    <em>Jiawei Peng, Yicheng Xu, Zhiping Lin, Zhenyu Weng, Zishuo Yang, Huiping Zhuang</em><br>
    <em>PloS one 18 (2), e0276427</em><br>
    <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0276427">Paper</a>
  </div>
</div>



<h3 id="y2022" class="pub-year">2022</h3>

<h4 class="pub-type">Conference Papers</h4>
<div style="display: flex; margin-bottom: 20px;">
  <div style="flex: 0 0 220px; margin-right: 15px; display: flex; align-items: center;">
    <img src="/assets/images/papers/2022-1.png" style="width: 100%; height: auto; max-height: 100%; object-fit: contain;">
  </div>
  <div style="flex: 1;">
    <strong>ACIL: Analytic class-incremental learning with absolute memorization and privacy protection</strong><br>
    <em>Huiping Zhuang, Zhenyu Weng, Hongxin Wei, Renchunzi Xie, Kar-Ann Toh, Zhiping Lin</em><br>
    <em>Advances in Neural Information Processing Systems 35, 11602-11614</em><br>
    <a href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/4b74a42fc81fc7ee252f6bcb6e26c8be-Abstract-Conference.html">Paper</a><a href="https://github.com/ZHUANGHP/Analytic-continual-learning">Code</a>
  </div>
</div>

</div>
