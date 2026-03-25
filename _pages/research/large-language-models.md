---
title: "Large Models"
permalink: /research/large-language-models/
layout: single
classes: wide
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
    Our work on large models focuses on adaptation, alignment, and deployment in dynamic real-world settings. We care not only about making models stronger, but also about making them usable across continual learning, privacy preservation, multimodal safety, reasoning-aware merging, and efficient inference. The selected projects below are drawn from recent papers and lab articles that present these themes most clearly.
  </div>

  <div class="hero-box">
    <div>
      <span class="hero-eyebrow">Selected Showcase</span>
      <h2 class="hero-title">Large Model Research Highlights</h2>
      <p class="hero-copy">
        From continual adaptation without replay, to privacy-preserving online inference, to safer multimodal alignment and more deployable reasoning systems, we aim to build a coherent research pipeline for large models. The projects showcased here were selected for both research representativeness and strong visual presentation on the site.
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
        <strong>Continual Adaptation</strong>
        <span>We study how large models can keep learning new tasks without replaying historical data.</span>
      </div>
      <div class="signal-item">
        <strong>Privacy and Safety</strong>
        <span>We address sensitive input protection and safety alignment for multimodal large models.</span>
      </div>
      <div class="signal-item">
        <strong>Reasoning Preservation</strong>
        <span>We explore how reasoning models can absorb domain knowledge without losing long-CoT capability.</span>
      </div>
      <div class="signal-item">
        <strong>Practical Deployment</strong>
        <span>We care about training-free acceleration and efficient deployment in realistic inference systems.</span>
      </div>
    </div>
  </div>

  <h2 class="section-title">Featured Projects</h2>
  <p class="section-note">
    These works were selected because they are visually strong, cover complementary directions, and best represent the lab's current large-model research profile.
  </p>

  <div class="project-grid">
    <div class="project-card">
      <div class="project-image">
        <img src="/assets/images/research/LLM/ASR.png" alt="Any-SSR overview" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">ICCV 2025</div>
        <div class="badge-row">
          <span class="badge">Continual Learning</span>
          <span class="badge">LoRA Routing</span>
          <span class="badge">Analytic Update</span>
        </div>
        <h3 class="project-title">
          <a href="https://openaccess.thecvf.com/content/ICCV2025/html/Tong_Any-SSR_How_Recursive_Least_Squares_Works_in_Continual_Learning_of_ICCV_2025_paper.html">Any-SSR: How Recursive Least Squares Works in Continual Learning of Large Language Model</a>
        </h3>
        <p class="project-copy">
          Any-SSR tackles continual learning in LLMs by allocating an independent LoRA subspace to each incoming task and using a Recursive Least Squares based router to choose the most suitable adapter during inference.
        </p>
        <ul class="project-points">
          <li>Avoids historical replay while highlighting the potential for zero forgetting.</li>
          <li>Reduces parameter interference and adapter capacity conflict.</li>
          <li>Fits expanding large-model systems that need to accumulate skills over time.</li>
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
          <span class="badge">Privacy</span>
          <span class="badge">Online Inference</span>
          <span class="badge">Plug-and-Play</span>
        </div>
        <h3 class="project-title">
          <a href="https://aclanthology.org/2025.acl-long.532/">PrivacyRestore</a>
        </h3>
        <p class="project-copy">
          PrivacyRestore protects user inputs in client-server LLM inference by removing privacy spans before transmission and restoring the needed semantics on the server side with restoration vectors.
        </p>
        <ul class="project-points">
          <li>Prevents privacy budget from growing linearly with the number of sensitive spans.</li>
          <li>Balances privacy, utility, and efficiency in domains such as medicine and law.</li>
          <li>Works as a practical add-on module for online LLM services.</li>
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
          <span class="badge">Multimodal Safety</span>
          <span class="badge">Low-Resource Alignment</span>
          <span class="badge">Synthetic Embeddings</span>
        </div>
        <h3 class="project-title">
          <a href="https://aclanthology.org/2025.acl-long.1212/">SEA</a>
        </h3>
        <p class="project-copy">
          SEA enables multimodal safety alignment even when only text supervision is available by synthesizing embeddings for additional modalities such as images, video, and audio.
        </p>
        <ul class="project-points">
          <li>Can synthesize a high-quality embedding on a single RTX3090 in 24 seconds.</li>
          <li>Substantially improves the safety of MLLMs under cross-modal threats.</li>
          <li>Introduces VA-SafetyBench for video and audio safety evaluation.</li>
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
          <span class="badge">Model Merging</span>
          <span class="badge">Long-CoT</span>
          <span class="badge">Domain Knowledge</span>
        </div>
        <h3 class="project-title">
          <a href="https://arxiv.org/abs/2508.03140">RCP-Merging</a>
        </h3>
        <p class="project-copy">
          RCP-Merging treats reasoning capability as a prior when merging long chain-of-thought models with domain-specific models, aiming to preserve reasoning quality while improving domain performance.
        </p>
        <ul class="project-points">
          <li>Designed for settings such as biomedicine and finance.</li>
          <li>Improves domain task performance by 9.5% and 9.2% over prior methods.</li>
          <li>Reduces the risk of reasoning collapse after model merging.</li>
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
          <span class="badge">Efficient Inference</span>
          <span class="badge">Sparse Activation</span>
          <span class="badge">Training-Free</span>
        </div>
        <h3 class="project-title">
          <a href="https://openreview.net/forum?id=l7Vb3yxmuz">WINA</a>
        </h3>
        <p class="project-copy">
          WINA accelerates LLM inference with a training-free sparse activation strategy that combines hidden-state magnitude with weight-matrix structure to reduce approximation error.
        </p>
        <ul class="project-points">
          <li>Requires no retraining or architectural modification.</li>
          <li>Provides tighter theoretical approximation-error guarantees.</li>
          <li>Maintains stronger performance at high sparsity levels.</li>
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
          <span class="badge">Multimodal Understanding</span>
          <span class="badge">Digital Watermark</span>
          <span class="badge">VQA Datasets</span>
        </div>
        <h3 class="project-title">
          <a href="https://proceedings.mlr.press/v267/tan25f.html">WMarkGPT</a>
        </h3>
        <p class="project-copy">
          WMarkGPT is a multimodal large language model for watermarked image understanding that can assess watermark visibility without access to the original image and explain its semantic impact.
        </p>
        <ul class="project-points">
          <li>Moves beyond scalar evaluation to more interpretable watermark understanding.</li>
          <li>Builds three VQA datasets for fine-grained reasoning about location and content.</li>
          <li>Offers a visually strong showcase for multimodal LLM applications.</li>
        </ul>
        <div class="project-footer">
          <a class="project-link primary" href="https://proceedings.mlr.press/v267/tan25f.html">Paper</a>
          <a class="project-link" href="https://github.com/TanSongBai/WMarkGPT">Code</a>
        </div>
      </div>
    </div>
  </div>

  <a href="/research" class="back-link">← Back to Research</a>
</div>
