---
title: "大模型"
permalink: /zh/research/large-language-models/
layout: single
classes: wide
lang: zh-CN
---

<style>
  :root {
    --llm-primary: #0c5da8;
    --llm-primary-dark: #083d6d;
    --llm-accent: #e5f1ff;
    --llm-border: #d8e4f0;
    --llm-text: #2e3d4f;
    --llm-muted: #5d6e82;
    --llm-card: #ffffff;
    --llm-shadow: rgba(17, 45, 78, 0.1);
  }

  .project-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 10px 0 28px;
  }

  .project-description {
    margin-bottom: 30px;
    text-align: justify;
    line-height: 1.7;
    color: var(--llm-text);
    font-size: 0.86em;
  }

  .hero-box {
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.95fr);
    gap: 22px;
    padding: 26px;
    margin-bottom: 34px;
    border: 1px solid var(--llm-border);
    border-radius: 18px;
    background: linear-gradient(135deg, #fbfdff 0%, #f2f7ff 58%, #edf4ff 100%);
    box-shadow: 0 10px 26px var(--llm-shadow);
  }

  .hero-eyebrow {
    display: inline-block;
    margin-bottom: 10px;
    padding: 5px 12px;
    border-radius: 999px;
    background: #dcecff;
    color: var(--llm-primary-dark);
    font-size: 0.72em;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hero-title {
    margin: 0 0 12px;
    color: var(--llm-primary-dark);
    font-size: 1.45em;
    line-height: 1.3;
  }

  .hero-copy {
    margin: 0 0 18px;
    color: var(--llm-text);
    font-size: 0.84em;
    line-height: 1.7;
  }

  .focus-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .focus-chip {
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid #cfe0f2;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.82);
    color: var(--llm-primary-dark);
    font-size: 0.75em;
    font-weight: 600;
  }

  .hero-panel {
    display: grid;
    gap: 12px;
  }

  .signal-item {
    padding: 16px 18px;
    border: 1px solid #dbe7f3;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.88);
  }

  .signal-item strong {
    display: block;
    margin-bottom: 6px;
    color: var(--llm-primary-dark);
    font-size: 0.82em;
  }

  .signal-item span {
    display: block;
    color: var(--llm-muted);
    font-size: 0.75em;
    line-height: 1.55;
  }

  .section-title {
    margin: 0 0 14px;
    color: var(--llm-primary-dark);
    font-size: 1.12em;
  }

  .section-note {
    margin: 0 0 22px;
    color: var(--llm-muted);
    font-size: 0.8em;
    line-height: 1.65;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--llm-border);
    border-radius: 16px;
    overflow: hidden;
    background: var(--llm-card);
    box-shadow: 0 8px 22px rgba(15, 52, 96, 0.08);
  }

  .project-image {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 16 / 9;
    padding: 14px;
    background: linear-gradient(180deg, #f8fbff 0%, #eef5fd 100%);
    border-bottom: 1px solid #e5edf6;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  .project-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 18px 20px 20px;
  }

  .project-meta {
    margin-bottom: 10px;
    color: var(--llm-primary);
    font-size: 0.72em;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }

  .badge {
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--llm-accent);
    color: var(--llm-primary-dark);
    font-size: 0.72em;
    font-weight: 600;
  }

  .project-title {
    margin: 0 0 10px;
    font-size: 0.98em;
    line-height: 1.5;
  }

  .project-title a {
    color: var(--llm-primary-dark);
    text-decoration: none;
  }

  .project-title a:hover {
    color: var(--llm-primary);
    text-decoration: underline;
  }

  .project-copy {
    margin: 0 0 14px;
    color: var(--llm-text);
    font-size: 0.8em;
    line-height: 1.7;
    text-align: justify;
  }

  .project-points {
    margin: 0 0 16px;
    padding-left: 18px;
    color: var(--llm-muted);
    font-size: 0.76em;
    line-height: 1.6;
  }

  .project-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: auto;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 12px;
    border-radius: 999px;
    border: 1px solid #cfe0f2;
    color: var(--llm-primary-dark);
    background: #ffffff;
    font-size: 0.74em;
    font-weight: 600;
    text-decoration: none;
  }

  .project-link:hover {
    color: var(--llm-primary);
    border-color: #9ec1e6;
  }

  .project-link.primary {
    background: var(--llm-primary);
    border-color: var(--llm-primary);
    color: #ffffff;
  }

  .project-link.primary:hover {
    background: #0b4f8d;
    color: #ffffff;
  }

  .back-link {
    display: inline-block;
    margin-top: 32px;
    margin-bottom: 20px;
    color: var(--llm-primary);
    font-weight: 600;
    text-decoration: none;
  }

  .back-link:hover {
    color: var(--llm-primary-dark);
    text-decoration: underline;
  }

  @media screen and (max-width: 900px) {
    .hero-box,
    .project-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="project-container">
  <div class="project-description">
    本方向聚焦大模型在真实动态环境中的适应、对齐与部署问题。我们不仅关注模型能力本身，也强调它们在持续学习、隐私保护、多模态安全、推理融合与高效推理等关键环节的可落地性。下面精选的工作来自实验室近期文章与论文，代表了这一研究链路中更具展示度的成果。
  </div>

  <div class="hero-box">
    <div>
      <span class="hero-eyebrow">Selected Showcase</span>
      <h2 class="hero-title">大模型研究橱窗</h2>
      <p class="hero-copy">
        从“如何持续学而不忘”，到“如何在隐私和安全约束下可靠使用”，再到“如何让模型更擅长推理、更高效部署”，我们希望把大模型研究做成一条完整而清晰的能力链。这里挑选的成果兼具学术代表性与页面展示效果，适合作为该方向的核心展示。
      </p>
      <div class="focus-list">
        <span class="focus-chip">Continual Learning</span>
        <span class="focus-chip">Privacy Protection</span>
        <span class="focus-chip">Safety Alignment</span>
        <span class="focus-chip">Reasoning Merging</span>
        <span class="focus-chip">Efficient Inference</span>
        <span class="focus-chip">Multimodal Understanding</span>
      </div>
    </div>
    <div class="hero-panel">
      <div class="signal-item">
        <strong>持续适应</strong>
        <span>围绕增量学习与任务切换，探索不用回放历史数据的大模型适应机制。</span>
      </div>
      <div class="signal-item">
        <strong>安全与隐私</strong>
        <span>同时处理用户输入中的敏感信息保护，以及多模态大模型面临的安全对齐难题。</span>
      </div>
      <div class="signal-item">
        <strong>推理能力保真</strong>
        <span>让长链推理模型在吸收领域知识时，尽可能避免 reasoning 能力退化。</span>
      </div>
      <div class="signal-item">
        <strong>高效落地</strong>
        <span>关注训练无关的稀疏激活与部署效率，让大模型更容易在真实系统中使用。</span>
      </div>
    </div>
  </div>

  <h2 class="section-title">重点展示工作</h2>
  <p class="section-note">
    以下工作优先选择了图示清晰、方向覆盖广、并能直接体现实验室研究特色的代表成果。
  </p>

  <div class="project-grid">
    <div class="project-card">
      <div class="project-image">
        <img src="/assets/images/research/LLM/ASR.png" alt="Any-SSR overview" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">ICCV 2025</div>
        <div class="badge-row">
          <span class="badge">持续学习</span>
          <span class="badge">LoRA 路由</span>
          <span class="badge">解析更新</span>
        </div>
        <h3 class="project-title">
          <a href="https://openaccess.thecvf.com/content/ICCV2025/html/Tong_Any-SSR_How_Recursive_Least_Squares_Works_in_Continual_Learning_of_ICCV_2025_paper.html">Any-SSR: How Recursive Least Squares Works in Continual Learning of Large Language Model</a>
        </h3>
        <p class="project-copy">
          面向大语言模型持续学习，解析子空间路由（Any-SSR）为每个新任务构建独立的 LoRA 子空间，并利用基于递归最小二乘的动态路由器，在推理时自动选择最适合的任务适配器。
        </p>
        <ul class="project-points">
          <li>不依赖历史数据回放，突出零遗忘潜力。</li>
          <li>同时缓解参数干扰与适配容量不足问题。</li>
          <li>适合不断扩展能力边界的大模型系统。</li>
        </ul>
        <div class="project-footer">
          <a class="project-link primary" href="https://openaccess.thecvf.com/content/ICCV2025/html/Tong_Any-SSR_How_Recursive_Least_Squares_Works_in_Continual_Learning_of_ICCV_2025_paper.html">Paper</a>
          <a class="project-link" href="https://github.com/ZHUANGHP/Any-SSR">Code</a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image">
        <img src="/assets/images/news/PR.png" alt="PrivacyRestore illustration" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">ACL 2025</div>
        <div class="badge-row">
          <span class="badge">隐私保护</span>
          <span class="badge">在线推理</span>
          <span class="badge">Plug-and-Play</span>
        </div>
        <h3 class="project-title">
          <a href="https://aclanthology.org/2025.acl-long.532/">PrivacyRestore</a>
        </h3>
        <p class="project-copy">
          PrivacyRestore 面向客户端-服务端的大模型推理场景，在传输前去除输入中的隐私片段，再通过 restoration vector 在服务端恢复所需语义，实现更稳健的隐私保护。
        </p>
        <ul class="project-points">
          <li>避免隐私预算随敏感片段数量线性增长。</li>
          <li>兼顾医疗、法律等场景下的性能与效率。</li>
          <li>适合作为在线大模型服务的可插拔隐私模块。</li>
        </ul>
        <div class="project-footer">
          <a class="project-link primary" href="https://aclanthology.org/2025.acl-long.532/">Paper</a>
          <a class="project-link" href="https://github.com/wjw136/PrivacyRestore">Code</a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image">
        <img src="/assets/images/news/SEA.png" alt="SEA framework" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">ACL 2025</div>
        <div class="badge-row">
          <span class="badge">多模态安全</span>
          <span class="badge">低资源对齐</span>
          <span class="badge">Synthetic Embeddings</span>
        </div>
        <h3 class="project-title">
          <a href="https://aclanthology.org/2025.acl-long.1212/">SEA</a>
        </h3>
        <p class="project-copy">
          SEA 提出以 synthetic embeddings 扩展纯文本安全数据，使图像、视频、音频等多模态大模型即便缺乏成体系的多模态安全数据，也能进行有效的安全对齐。
        </p>
        <ul class="project-points">
          <li>单张 RTX3090 上可在 24 秒内合成高质量 embedding。</li>
          <li>显著增强 MLLM 面向额外模态输入的安全性。</li>
          <li>同步提出 VA-SafetyBench 评测视频与音频风险。</li>
        </ul>
        <div class="project-footer">
          <a class="project-link primary" href="https://aclanthology.org/2025.acl-long.1212/">Paper</a>
          <a class="project-link" href="https://github.com/ZeroNLP/SEA">Code</a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image">
        <img src="/assets/images/news/rcp.png" alt="RCP-Merging overview" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">AAAI 2026</div>
        <div class="badge-row">
          <span class="badge">模型融合</span>
          <span class="badge">长链推理</span>
          <span class="badge">领域知识</span>
        </div>
        <h3 class="project-title">
          <a href="https://arxiv.org/abs/2508.03140">RCP-Merging</a>
        </h3>
        <p class="project-copy">
          RCP-Merging 将推理能力视作模型融合中的先验，在融合长链推理模型与领域模型时，有选择地保留 reasoning 核心权重，从而兼顾思维链能力与领域表现。
        </p>
        <ul class="project-points">
          <li>面向 BioMedicine、Finance 等领域任务设计。</li>
          <li>在领域任务上相较现有方法提升 9.5% 和 9.2%。</li>
          <li>降低模型融合后出现 reasoning 崩塌的风险。</li>
        </ul>
        <div class="project-footer">
          <a class="project-link primary" href="https://arxiv.org/abs/2508.03140">Paper</a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image">
        <img src="/assets/images/news/wina.png" alt="WINA overview" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">ICLR 2026</div>
        <div class="badge-row">
          <span class="badge">高效推理</span>
          <span class="badge">稀疏激活</span>
          <span class="badge">Training-Free</span>
        </div>
        <h3 class="project-title">
          <a href="https://openreview.net/forum?id=l7Vb3yxmuz">WINA</a>
        </h3>
        <p class="project-copy">
          WINA 面向大语言模型推理加速，提出一种无需重新训练的稀疏激活策略，将隐藏状态幅值与权重矩阵结构共同纳入考量，在保持性能的同时进一步降低推理成本。
        </p>
        <ul class="project-points">
          <li>无需改模型结构，具备即插即用的部署价值。</li>
          <li>理论上给出更紧的近似误差界。</li>
          <li>在更高 sparsity 下依然能保持更稳健表现。</li>
        </ul>
        <div class="project-footer">
          <a class="project-link primary" href="https://openreview.net/forum?id=l7Vb3yxmuz">Paper</a>
          <a class="project-link" href="https://github.com/microsoft/wina">Code</a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image">
        <img src="/assets/images/news/WMG1.png" alt="WMarkGPT showcase" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">ICML 2025</div>
        <div class="badge-row">
          <span class="badge">多模态理解</span>
          <span class="badge">数字水印</span>
          <span class="badge">视觉问答数据集</span>
        </div>
        <h3 class="project-title">
          <a href="https://proceedings.mlr.press/v267/tan25f.html">WMarkGPT</a>
        </h3>
        <p class="project-copy">
          WMarkGPT 是面向水印图像理解的多模态大模型，能够在没有原图的情况下评估水印可见性，并进一步描述其位置、内容与对图像语义的影响。
        </p>
        <ul class="project-points">
          <li>突出“可解释的水印理解”，而不仅是分数评估。</li>
          <li>构建三类 VQA 数据集支撑精细化理解能力。</li>
          <li>兼具视觉展示性与多模态应用场景代表性。</li>
        </ul>
        <div class="project-footer">
          <a class="project-link primary" href="https://proceedings.mlr.press/v267/tan25f.html">Paper</a>
          <a class="project-link" href="https://github.com/TanSongBai/WMarkGPT">Code</a>
        </div>
      </div>
    </div>
  </div>

  <a href="/research" class="back-link">← 返回</a>
</div>
