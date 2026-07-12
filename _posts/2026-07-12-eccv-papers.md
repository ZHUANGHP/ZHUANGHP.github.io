---
title: "We have 2 papers accepted by ECCV 2026!"
date: 2026-07-12
---

We have two papers accepted by ECCV 2026! The two works advance efficient and trustworthy AI from different perspectives: AnaPFL introduces analytic closed-form solutions into personalized federated learning, while X-SGS develops a safe and generalizable watermarking framework for 3D Gaussian Splatting. Detailed information is provided below.

---

### Paper 1: AnaPFL: When Closed-Form Solutions Meet Generalization and Personalization in Personalized Federated Learning

**Authors**: Kejia Fan, Jianheng Tang, Zhirui Yang, Feijiang Han, Yajiang Huang, Run He, Jiaxu Li, Songning Lai, Anfeng Liu, Houbing Herbert Song, Yunhuai Liu, Huiping Zhuang

#### Abstract:

Personalized Federated Learning (PFL) has emerged as a prevalent paradigm to deliver personalized models to individual clients through collaborative training. Existing PFL methods often suffer from the issue of Non-IID data, due to their reliance on gradient-based updates. Recently, Analytic Learning (AL) has exhibited great potential to address this issue via analytical (i.e., closed-form) solutions in a gradient-free manner. However, there remains a significant gap in introducing AL into PFL, owing to the encountered generalization-personalization dilemma. In this paper, to bridge this gap and address the associated challenges, we propose an Analytic Personalized Federated Learning approach, named AnaPFL, for addressing the Non-IID issue in PFL by introducing and advancing AL. In AnaPFL, we develop dual-stream analytic models with closed-form solutions, including (1) a shared primary stream for global generalization across all clients, and (2) a dedicated refinement stream for local personalization of each client. Theoretically, we present two excellent properties of AnaPFL: (1) its invariance to heterogeneity and (2) its enhancement in personalization. Experimentally, we give comprehensive results to show AnaPFL's superior performance with over 99% efficiency advantages against gradient-based methods.

**Paper**: [https://openreview.net/forum?id=QINxiI8jrF](https://openreview.net/forum?id=QINxiI8jrF)

---

### Paper 2: X-SGS: Safe and Generalizable Gaussian Splatting with X-dimensional Watermarks

**Authors**: Zihang Cheng, Wentao Bao, Huiping Zhuang, Chun Li, Xin Meng, Ziqian Zeng, Cen Chen, Ming Li, Fei Yu

#### Abstract:

3D Gaussian Splatting (3DGS) has been widely used in 3D reconstruction and 3D generation. However, 3DGS training generally takes tremendous time, resources, and heuristics. More importantly, the increasing amount of 3DGS digital assets poses significant challenges to copyright protection, which is underexplored in 3DGS. In this paper, we propose a new framework X-SGS which can simultaneously inject 1D to 3D watermarks for copyright protection, while keeping the high fidelity of original 3DGS scenes. Specifically, we first split the watermarks into message patches. A self-adaptive gate is developed to select the injection positions of the watermark messages. Then, we use an XD (multi-dimensional) injection head to inject multi-modal messages into sorted 3DGS points. To restore watermarking messages, a learnable gate is developed to recognize the watermarked locations, from which our XD-extraction heads are used to restore hidden messages. Our method is capable of adding multi-modal watermarks simultaneously in the 3DGS model without changing any form of parameters and pipelines, but only introducing minimal interference to the 3DGS rendering output. X-SGS is the first to unify 1D to 3D watermarking for 3DGS and the first framework to add multi-modal watermarks simultaneously in one 3DGS. Extensive experiments demonstrate that X-SGS effectively preserves consistency between the watermark and the original 3DGS, exhibits robustness against model degradation, and maintains accurate judgment capabilities.

**Paper**: [https://openreview.net/forum?id=swmf7Wuv3o](https://openreview.net/forum?id=swmf7Wuv3o)

---
