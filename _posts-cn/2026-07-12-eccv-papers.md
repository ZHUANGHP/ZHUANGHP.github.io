---
title: "我们有 2 篇论文被 ECCV 2026 录用！"
date: 2026-07-12
---

我们有 2 篇论文被 ECCV 2026 录用！两项工作分别从高效学习与可信三维表示角度推进人工智能研究：AnaPFL 将解析式闭式解引入个性化联邦学习，X-SGS 面向 3D Gaussian Splatting 提出安全且具备泛化能力的水印框架。论文详细信息如下。

---

### 论文 1：AnaPFL: When Closed-Form Solutions Meet Generalization and Personalization in Personalized Federated Learning

**Authors**: Kejia Fan, Jianheng Tang, Zhirui Yang, Feijiang Han, Yajiang Huang, Run He, Jiaxu Li, Songning Lai, Anfeng Liu, Houbing Herbert Song, Yunhuai Liu, Huiping Zhuang

#### 摘要：

个性化联邦学习旨在通过协同训练为不同客户端提供个性化模型，但现有方法通常依赖梯度更新，在 Non-IID 数据下容易受到数据异质性影响。AnaPFL 将解析学习引入个性化联邦学习，设计了具备闭式解的双流解析模型：共享主流负责全局泛化，专属细化流负责本地个性化。理论上，该方法具有对异质性的稳定性并能增强个性化能力；实验中，AnaPFL 在保持优越性能的同时，相比基于梯度的方法展现出超过 99% 的效率优势。

**Paper**: [https://openreview.net/forum?id=QINxiI8jrF](https://openreview.net/forum?id=QINxiI8jrF)

---

### 论文 2：X-SGS: Safe and Generalizable Gaussian Splatting with X-dimensional Watermarks

**Authors**: Zihang Cheng, Wentao Bao, Huiping Zhuang, Chun Li, Xin Meng, Ziqian Zeng, Cen Chen, Ming Li, Fei Yu

#### 摘要：

3D Gaussian Splatting 已广泛用于三维重建与生成，但随之增长的 3DGS 数字资产也带来了版权保护挑战。X-SGS 提出一种面向 3DGS 的安全泛化水印框架，能够在保持原始场景高保真渲染质量的同时，同时注入 1D 到 3D 的多模态水印信息。该方法通过自适应门控选择水印注入位置，并利用多维注入与提取头完成水印隐藏和恢复，不需要改变 3DGS 的参数形式或训练流程。实验表明，X-SGS 能有效保持水印与原始 3DGS 的一致性，并在模型退化场景下保持较强鲁棒性和准确判别能力。

**Paper**: [https://openreview.net/forum?id=swmf7Wuv3o](https://openreview.net/forum?id=swmf7Wuv3o)

---
