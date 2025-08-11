---
title: "我们有 1 篇论文被 CVPR 2025 录用！"
date: 2025-02-27
---

我们有一篇论文被 CVPR 2025 录用！这篇论文关注于联邦学习，贡献于传统的联邦学习与预训练模型。这篇论文扩展了分析连续学习中的权重不变性，并提出了分析联邦学习（AFL），它为预训练模型的联邦学习提供了闭式解。同时，这篇论文在训练速度上实现了 150x-200x 的加速，与现有方法相比。详细信息如下。

---

### AFL: A Single-Round Analytic Approach for Federated Learning with Pre-trained Models

**Authors**: Run He, Kai Tong, Di Fang, Han Sun, Ziqian Zeng, Haoran Li, Tianyi Chen, Huiping Zhuang

#### Abstract:
In this paper, we introduce analytic federated learning (AFL), a new training paradigm that brings analytical (i.e., closed-form) solutions to the federated learning (FL) with pre-trained models. Our AFL draws inspiration from analytic learning---a gradient-free technique that trains neural networks with analytical solutions in one epoch. In the local client training stage, the AFL facilitates a one-epoch training, eliminating the necessity for multi-epoch updates. In the aggregation stage, we derive an absolute aggregation (AA) law. This AA law allows a single-round aggregation, reducing heavy communication overhead and achieving fast convergence by removing the need for multiple aggregation rounds. More importantly, the AFL exhibits a property that invariance to data partitioning, meaning that regardless of how the full dataset is distributed among clients, the aggregated result remains identical. This could spawn various potentials, such as data heterogeneity invariance and client-number invariance. We conduct experiments across various FL settings including extremely non-IID ones, and scenarios with a large number of clients (e.g., >1000). In all these settings, our AFL constantly performs competitively while existing FL techniques encounter various obstacles.

<div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/AFL.png" alt="Paradigm of proposed analytic continual learning" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
  <p><em>Paradigm of proposed analytic continual learning</em></p>
</div>

**Paper**: [https://arxiv.org/abs/2405.16240](https://arxiv.org/abs/2405.16240)

**Code**: [https://github.com/ZHUANGHP/Analytic-federated-learning](https://github.com/ZHUANGHP/Analytic-federated-learning)

---
