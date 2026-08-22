---
title: "We have 1 paper accepted by EMNLP 2026 Main Conference!"
date: 2026-08-22
---

We have one paper accepted by EMNLP 2026 Main Conference! This work introduces triplet-level metrics and a matching optimization objective to evaluate and improve Semantic IDs for generative retrieval. Detailed information is provided below.

---

### Beyond Codebook Uniformity: Triplet-Level Metrics and Triplet-Driven Semantic IDs for Generative Retrieval

**Authors**: Xiang Tan, Dongliang Liao, Junwu Du, Haijun Wu, Run He, Shuquan Man, Ziqian Zeng, Huiping Zhuang

#### Abstract:

<p style="text-align: justify; text-justify: inter-word; line-height: 1.9; margin: 0 0 1.3em;">
Generative retrieval replaces item IDs with Semantic IDs (SIDs) decoded autoregressively by a sequence model. Playing the role of tokenizer, the codebook largely determines the quality of generative retrieval. Existing codebook metrics, however, only characterize the global uniformity of code usage and do not reveal whether an individual SID correctly represents its item or separates it from others. We address this problem with two metrics and a matching training objective. We build a query-centered triplet dataset (q, a, p, n) from large-scale user behavior, and based on which we define Overlap, a prefix-based distance between two SIDs, and Pairwise Overlap Ranking (POR), the fraction of triplets where a codebook places the positive closer to the anchor than the hard negative. Both metrics correlate strongly with downstream Hit Rate in generative retrieval. We then introduce the Differentiable Soft Overlap Loss (DSOL) to make these two metrics differentiable during codebook learning and optimize them directly. On a public e-commerce benchmark (ESCI-us) and a large-scale industrial video search dataset, DSOL improves HR and POR over standard SID baselines.
</p>

**Paper**: [To be added]

---
