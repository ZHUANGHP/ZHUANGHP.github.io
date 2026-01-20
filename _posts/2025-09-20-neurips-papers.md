---
title: "We have 1 paper accepted by NeurIPS 2025 !"
date: 2025-09-20
---
We have 1 paper accepted by NeurIPS 2025! This work focuses on graph domain-incremental learning (Domain-IL), a critical yet unexplored setting amid the development of graph foundation models (GFMs), and addresses catastrophic forgetting in cross-domain sequential learning scenarios caused by embedding shifts and decision boundary deviations.  Detailed information about each publication is provided below.

---

### GraphKeeper: Graph Domain-Incremental Learning via Knowledge Disentanglement and Preservation

**Authors**: Zihao Guo, Qingyun Sun, Ziwei Zhang, Haonan Yuan, Huiping Zhuang, Xingcheng Fu, Jianxin Li

#### Abstract:
Graph incremental learning (GIL), which continuously updates graph models by sequential knowledge acquisition, has garnered significant interest recently. However, existing GIL approaches focus on task-incremental and class-incremental scenarios within a single domain. Graph domain-incremental learning (Domain-IL), aiming at updating models across multiple graph domains, has become critical with the development of graph foundation models (GFMs), but remains unexplored in the literature. In this paper, we propose Graph Domain-Incremental Learning via Knowledge Dientanglement and Preservation (GraphKeeper), to address catastrophic forgetting in Domain-IL scenario from the perspectives of embedding shifts and decision boundary deviations. Specifically, to prevent embedding shifts and confusion across incremental graph domains, we first propose the domain-specific parameter-efficient fine-tuning together with intra- and inter-domain disentanglement objectives. Consequently, to maintain a stable decision boundary, we introduce deviation-free knowledge preservation to continuously fit incremental domains. Additionally, for graphs with unobservable domains, we perform domain-aware distribution discrimination to obtain precise embeddings. Extensive experiments demonstrate the proposed GraphKeeper achieves state-of-the-art results with 6.5%~16.6% improvement over the runner-up with negligible forgetting. Moreover, we show GraphKeeper can be seamlessly integrated with various representative GFMs, highlighting its broad applicative potential. 

<div style="text-align: center; margin: 20px 0;">
  <img src="/assets/images/news/AAAI2026.png" alt="Paradigm of proposed analytic continual learning" style="max-width: 100%; height: auto; border: 1px solid #ddd; padding: 5px;">
  <p><em>The overall framework of GraphKeeper</em></p>
</div>

**Paper**: [https://arxiv.org/abs/2511.00097](https://arxiv.org/abs/2511.00097)

**Code**: [https://github.com/RingBDStack/GraphKeeper](https://github.com/RingBDStack/GraphKeeper)

---
