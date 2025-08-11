---
title: "我们共有 3 篇论文被 ACMMM 2025 录用!"
date: 2025-07-05
---
我们有3篇论文被 ACMMM 2025 录用。这3篇论文分别关注多媒体处理的不同方面，包括类别增量语义分割、小样本类别增量学习以及多模态持续测试时自适应。

---

### Paper 1: CFSSeg: Closed-Form Solution for Class-Incremental Semantic Segmentation of 2D Images and 3D Point Clouds

**Authors**: Jiaxu Li, Rui Li, Jianyu Qi, Songning Lai, Linpu Lv, Kejia Fan, Jianheng Tang, Yutao Yue, Dongzhan Zhou, Yuanhuai Liu, Huiping Zhuang

#### Abstract:
2D images and 3D point clouds are foundational data types for multimedia applications, including real-time video analysis, augmented reality (AR), and 3D scene understanding. Class-incremental semantic segmentation (CSS) requires incrementally learning new semantic categories while retaining prior knowledge. Existing methods typically rely on computationally expensive training based on stochastic gradient descent, employing complex regularization or exemplar replay. However, stochastic gradient descent-based approaches inevitably update the model’s weights for past knowledge, leading to catastrophic forgetting, a problem exacerbated by pixel/point-level granularity. To address these challenges, we propose CFSSeg, a novel exemplar-free approach that leverages a closed-form solution, offering a practical and theoretically grounded solution for continual semantic segmentation tasks. This eliminates the need for iterative gradient-based optimization and storage of past data, requiring only a single pass through new samples per step. It not only enhances computational efficiency but also provides a practical solution for dynamic, privacy-sensitive multimedia environments. Extensive experiments on 2D and 3D benchmark datasets such as Pascal VOC2012, S3DIS, and ScanNet demonstrate CFSSeg's superior performance.
**Paper**: To be added.

**Code**: To be added.
<!-- <div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/PR.png" alt="Illustration of PrivacyRestore" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
</div> -->

---

### Paper 2: Probabilistic Mixture of Hyperbolic Mamba for Few-Shot Class-Incremental Learning

**Authors**: Yawen Cui, Wenbin Zou, Huiping Zhuang, Yi Wang, Lap-Pui Chau

#### Abstract:
Few-shot class-incremental learning (FSCIL) grapples with the dual challenge of learning new classes from minimal labeled training data while alleviating catastrophic forgetting of previous learned classes. Compared with previous methods employing static adaptation on specific parameters, current works verify that dynamic weights and sequence modeling in Selective State Space Models (SSMs) can capture distinctive feature drifts in FSCIL. However, the flattening operation in SSMs fragments the latent semantic relationship, where the resulting task isolation and representation degeneration are detrimental to FSCIL. Toward this issue, this paper presents a novel framework named Probabilistic Mixture of Hyperbolic State Space Experts (PmH-SSE) for FSCIL. First, since SSMs rely on scanning as an alternative to self-attention, the Hyperbolic state space model with multi-scale hybrid scan is built to facilitate few-shot learning by providing an extra Hyperbolic geometry that encodes hierarchical relationships. Moreover, we propose the probabilistic mixture of Mamba to increase the model’s flexibility in handling non-stationary data streams in FSCIL and enhance the stability of high-parameter models in few-shot conditions. Finally, under the same experimental conditions, the proposed PmH-SSE demonstrates superior performance in comprehensive experiments. The code will be made publicly available to facilitate reproducible research.

<!-- <div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/GA.png" alt="Chosen and Rejected Response Generation Workflow" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
</div> -->

**Paper**: To be added.

**Code**: To be added.

---

### Paper 3: Analytic Continual Test-Time Adaptation for Multi-Modality Corruption

**Authors**: Yufei Zhang, Yicheng Xu, Hongxin Wei, Zhiping Lin, Xiaofeng Zou, Cen Chen, Huiping Zhuang

#### Abstract:
Test-Time Adaptation (TTA) enables pre-trained models to bridge the gap between source and target datasets using unlabeled test data, addressing domain shifts caused by corruptions like weather changes, noise, or sensor malfunctions in test time. Multi-Modal Continual Test-Time Adaptation (MM-CTTA), as an extension of standard TTA, further allows models to handle multi-modal inputs and adapt to continuously evolving target domains. However, MM-CTTA faces critical challenges such as catastrophic forgetting and reliability bias, which are rarely addressed effectively under multi-modal corruption scenarios. In this paper, we propose a novel approach, Multi-modality Dynamic Analytic Adapter (MDAA), to tackle MM-CTTA tasks. MDAA introduces analytic learning—a closed-form training technique—through Analytic Classifiers (ACs) to mitigate catastrophic forgetting. Furthermore, we design the Dynamic Late Fusion Mechanism (DLFM) to dynamically select and integrate reliable information from different modalities. Extensive experiments show that MDAA achieves state-of-the-art performance across the proposed tasks.

<!-- <div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/SEA.png" alt="The Overall Framework of SEA" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
</div> -->

**Paper**: To be added.

**Code**: To be added.

---