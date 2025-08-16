---
title: "我们共用 3 篇论文被 NeurIPS 2024 录用！"
date: 2024-09-26
---

我们的团队在 NeurIPS 2024 上提交了 3 篇论文，这些论文都与持续学习相关，涵盖了在线持续学习、广义类增量学习和视觉-语言模型的持续学习。详细信息如下。

---

### Paper 1: F-OAL: Forward-only Online Analytic Learning with Fast Training and Low Memory Footprint in Class Incremental Learning

**Authors**: Huiping Zhuang, Yuchen Liu, Run He, Kai Tong, Ziqian Zeng, Cen Chen, Yi Wang, Lap-Pui Chau

#### Abstract:
Online Class Incremental Learning (OCIL) aims to train models incrementally, where data arrive in mini-batches, and previous data are not accessible. A major challenge in OCIL is Catastrophic Forgetting, i.e., the loss of previously learned knowledge. Among existing baselines, replay-based methods show competitive results but requires extra memory for storing exemplars, while exemplar-free (i.e., data need not be stored for replay in production) methods are resource friendly but often lack accuracy. In this paper, we propose an exemplar-free approach—Forward-only Online Analytic Learning (F-OAL). Unlike traditional methods, F-OAL does not rely on back-propagation and is forward-only, significantly reducing memory usage and computational time. Cooperating with a pre-trained frozen encoder with Feature Fusion, F-OAL only needs to update a linear classifier by recursive least square. This approach simultaneously achieves high accuracy and low resource consumption. Extensive experiments on bench mark datasets demonstrate F-OAL's robust performance in OCIL scenarios.

<div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/FOAL.png" alt="Paradigm of proposed F-OAL" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
  <p><em>Paradigm of proposed F-OAL</em></p>
</div>

**Paper**: [https://proceedings.neurips.cc/paper_files/paper/2024/hash/48ffa38c13078d6ce26b328e7f373243-Abstract-Conference.html](https://proceedings.neurips.cc/paper_files/paper/2024/hash/48ffa38c13078d6ce26b328e7f373243-Abstract-Conference.html)

**Code**: [https://github.com/liuyuchen-cz/F-OAL](https://github.com/liuyuchen-cz/F-OAL)

---

### Paper 2: GACL: Exemplar-Free Generalized Analytic Continual Learning

**Authors**: Huiping Zhuang, Yizhu Chen, Di Fang, Run He, Kai Tong, Hongxin Wei, Ziqian Zeng, Cen Chen

#### Abstract:
Class incremental learning (CIL) trains a network on sequential tasks with separated categories in each task but suffers from catastrophic forgetting, where models quickly lose previously learned knowledge when acquiring new tasks. The generalized CIL (GCIL) aims to address the CIL problem in a more real-world scenario, where incoming data have mixed data categories and unknown sample size distribution. Existing attempts for the GCIL either have poor performance or invade data privacy by saving exemplars. In this paper, we propose a new exemplar-free GCIL technique named generalized analytic continual learning (GACL). The GACL adopts analytic learning (a gradient-free training technique) and delivers an analytical (i.e., closed-form) solution to the GCIL scenario. This solution is derived via decomposing the incoming data into exposed and unexposed classes, thereby attaining a weight-invariant property, a rare yet valuable property supporting an equivalence between incremental learning and its joint training. Such an equivalence is crucial in GCIL settings as data distributions among different tasks no longer pose challenges to adopting our GACL. Theoretically, this equivalence property is validated through matrix analysis tools. Empirically, we conduct extensive experiments where, compared with existing GCIL methods, our GACL exhibits a consistently leading performance across various datasets and GCIL settings.

<div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/GACL.png" alt="An overview of our proposed GACL" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
  <p><em>An overview of our proposed GACL</em></p>
</div>

**Paper**: [https://proceedings.neurips.cc/paper_files/paper/2024/hash/9713d53ee4f31781304b1ca43266f8d1-Abstract-Conference.html](https://proceedings.neurips.cc/paper_files/paper/2024/hash/9713d53ee4f31781304b1ca43266f8d1-Abstract-Conference.html)

**Code**: [https://github.com/CHEN-YIZHU/GACL](https://github.com/CHEN-YIZHU/GACL)

---

### Paper 3: Advancing Cross-domain Discriminability in Continual Learning of Vision-Language Models

**Authors**: Yicheng Xu, Yuxin Chen, Jiahao Nie, Yusong Wang, Huiping Zhuang, Manabu Okumura

#### Abstract:
Continual learning (CL) with Vision-Language Models (VLMs) has overcome the constraints of traditional CL, which only focuses on previously encountered classes. During the CL of VLMs, we need not only to prevent the catastrophic forgetting on incrementally learned knowledge but also to preserve the zero-shot ability of VLMs. However, existing methods require additional reference datasets to maintain such zero-shot ability and rely on domain-identity hints to classify images across different domains. In this study, we propose Regression-based Analytic Incremental Learning (RAIL), which utilizes a recursive ridge regression-based adapter to learn from a sequence of domains in a non-forgetting manner and decouple the cross-domain correlations by projecting features to a higher-dimensional space. Cooperating with a training-free fusion module, RAIL absolutely preserves the VLM's zero-shot ability on unseen domains without any reference data. Additionally, we introduce Cross-domain Task-Agnostic Incremental Learning (X-TAIL) setting. In this setting, a CL learner is required to incrementally learn from multiple domains and classify test images from both seen and unseen domains without any domain-identity hint. We theoretically prove RAIL's absolute memorization on incrementally learned domains. Experiment results affirm RAIL's state-of-the-art performance in both X-TAIL and existing Multi-domain Task-Incremental Learning settings.

<div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/RAIL1.png" alt="Comparison of different CL settings in vision-language models" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
  <p><em>Comparison of different CL settings in vision-language models</em></p>
</div>

<div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/RAIL2.png" alt="Overview of proposed RAIL" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
  <p><em>Overview of proposed RAIL</em></p>
</div>

**Paper**: [https://openreview.net/forum?id=boGxvYWZEq](https://openreview.net/forum?id=boGxvYWZEq)

**Code**: [https://github.com/linghan1997/Regression-based-Analytic-Incremental-Learning](https://github.com/linghan1997/Regression-based-Analytic-Incremental-Learning)

---
