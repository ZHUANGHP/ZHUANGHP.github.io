---
title: "We have 1 paper accepted by CVPR 2025!"
date: 2025-02-27
---

We have 1 paper accepted by CVPR 2025! This paper focuses on the federated learning and contributes to the traditional federated learning with pre-trained models. This paper extends the weight-invariance in the analytic continual learning and proposes the analytic federated learning, which provides closed-formed solutions to federated learning with invariance to data partitioning. Also, this paper achieves 150x-200x faster training speed when compared with existing methods. Detailed information is listed below. 

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
