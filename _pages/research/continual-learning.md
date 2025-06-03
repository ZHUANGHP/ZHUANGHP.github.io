---
title: "Continual Learning"
permalink: /research/continual-learning/
layout: single
classes: wide
---

<style>
.project-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}

.project-description {
  margin-bottom: 30px;
  text-align: justify;
  line-height: 1.6;
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
  font-size: 1.4em;
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
</style>

<div class="project-description">
  Our research in Continual Learning focuses on developing AI systems that can continuously acquire and refine knowledge over time without forgetting previously learned information. We utilize analytical learning approaches to create methods that efficiently adapt to new data while preserving existing capabilities.
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/4b74a42fc81fc7ee252f6bcb6e26c8be-Abstract-Conference.html">ACIL: Analytic class-incremental learning with absolute memorization and privacy protection</a>
  </div>
  <div class="project-content">
    We introduce a novel approach to class-incremental learning (CIL) that addresses the challenges of catastrophic forgetting and data privacy. The proposed Analytic Class-Incremental Learning (ACIL) framework allows for absolute memorization of past knowledge without storing historical data, thereby ensuring data privacy. We theoretically validate that ACIL can achieve results identical to traditional joint-learning methods while only using current data. Empirical results demonstrate that ACIL outperforms existing state-of-the-art methods, particularly in large-phase scenarios (e.g., 25 and 50 phases).
  </div>
  <div class="project-image">
    <img src="/assets/images/papers/2022-1.png" alt="ACIL Paper">
  </div>
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="https://openaccess.thecvf.com/content/CVPR2023/html/Zhuang_GKEAL_Gaussian_Kernel_Embedded_Analytic_Learning_for_Few-Shot_Class_Incremental_CVPR_2023_paper.html">GKEAL: Gaussian Kernel Embedded Analytic Learning for Few-Shot Class Incremental Task</a>
  </div>
  <div class="project-content">
In this paper, we focus on few-shot class-incremental learning (FSCIL) and extend the analytic class-incremental learning (ACIL) to this realm. To tackle the few-shot issue, we propose the kernel analytic module with Gaussian kernels that conduct FSCIL in a recursive manner with analytic solutions, and the augmented feature concatenation module to balance the preference between old and new tasks. Our method demonstrates state-of-the-art performance on several datasets. 
  </div>
  <div class="project-image">
    <img src="/assets/images/research/CL/gkeal.png" alt="GKEAL Paper">
  </div>
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="https://ojs.aaai.org/index.php/AAAI/article/view/29670">DS-AL: A Dual-Stream Analytic Learning for Exemplar-Free Class-Incremental Learning</a>
  </div>
  <div class="project-content">
In this paper, we focus on the under-fitting issue of linear classifier used in analytic continual learning. To achieve better fitting performance, we propose a dual-stream structure for class-incremental learning. The main stream redefines the class-incremental learning (CIL) problem into a Concatenated Recursive Least Squares (C-RLS) task, allowing an equivalence between the CIL and its joint-learning counterpart. The compensation stream is governed by a Dual-Activation Compensation (DAC) module. This module re-activates the embedding with a different activation function from the main stream one, and seeks fitting compensation by projecting the embedding to the null space of the main stream's linear mapping. By introducing the dual-stream, our method achieves better fitting performance and performs improved results when compared with existing CIL methods.
  </div>
  <div class="project-image">
    <img src="/assets/images/research/CL/dsal.png" alt="DS-AL Paper">
  </div>
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/9713d53ee4f31781304b1ca43266f8d1-Abstract-Conference.html">GACL: Exemplar-Free Generalized Analytic Continual Learning</a>
  </div>
  <div class="project-content">
The generalized class-incremental learning (GCIL) aims to address the continual learning problem in a more real-world scenario, where incoming data have mixed data categories and unknown sample size distribution. In this paper, we propose a new exemplar-free GCIL technique named generalized analytic continual learning (GACL). The GACL extends analytic learning to the GCIL scenario. This solution is derived via decomposing the incoming data into exposed and unexposed classes, thereby attaining a weight-invariant property, a rare yet valuable property supporting an equivalence between incremental learning and its joint training. Such an equivalence is crucial in GCIL settings as data distributions among different tasks no longer pose challenges to adopting our GACL. Empirically, our GACL exhibits a consistently leading performance across various datasets and GCIL settings.
  </div>
  <div class="project-image">
    <img src="/assets/images/research/CL/gacl.png" alt="GACL Paper">
  </div>
</div>

<div class="project-box">
  <div class="project-heading">
    <a href="https://arxiv.org/abs/2405.16240">AFL: A Single-Round Analytic Approach for Federated Learning with Pre-trained Models</a>
  </div>
  <div class="project-content">
In this paper, we achieve the invariance to data partitioning in the realm of federated learning via a dual branch of utilization of analytic learning. Our AFL draws inspiration from analytic learning -- a gradient-free technique that trains neural networks with analytical solutions in one epoch. In the local client training stage, the AFL facilitates a one-epoch training, eliminating the necessity for multi-epoch updates. In the aggregation stage, we derive an absolute aggregation (AA) law. This AA law allows a single-round aggregation, reducing heavy communication overhead and achieving fast convergence by removing the need for multiple aggregation rounds. More importantly, the AFL exhibits a property that , meaning that regardless of how the full dataset is distributed among clients, the aggregated result remains identical. This could spawn various potentials, such as data heterogeneity invariance and client-number invariance. We conduct experiments across various FL settings including extremely non-IID ones, and scenarios with a large number of clients (e.g., ). In all these settings, our AFL constantly performs competitively.
  </div>
  <div class="project-image">
    <img src="/assets/images/research/CL/afl.png" alt="AFL Paper">
  </div>
</div>

<a href="/research" class="back-link">← Back to Research</a>
