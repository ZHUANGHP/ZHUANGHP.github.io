---
title: "我们有 1 篇论文被 ACL 2026 Main 录用！"
date: 2026-04-15
---

我们有 1 篇论文被 ACL 2026 Main 录用！该工作聚焦大语言模型长上下文推理中的效率问题，通过查询感知的混合精度 KV Cache 量化降低显存占用与推理延迟。论文详细信息如下。

---

### MixKVQ: Query-Aware Mixed-Precision KV Cache Quantization for Long-Context Reasoning

**Authors**: Tao Zhang, Ziqian Zeng, Hao Peng, Huiping Zhuang, Cen Chen

#### Abstract:
长链式思维（CoT）推理显著增强了大语言模型的复杂推理能力，但也带来了由 KV Cache 引起的显存占用和延迟开销。MixKVQ 提出一种轻量级、查询感知的混合精度 KV Cache 量化方法，能够识别并保留需要更高精度表示的关键 key 通道，同时对 value cache 进行逐 token 量化，从而在显著降低显存占用的同时保持强长上下文推理性能。

**Paper**: [To be added]

**Code**: [https://github.com/ZeroNLP/MixKVQ](https://github.com/ZeroNLP/MixKVQ)

---
