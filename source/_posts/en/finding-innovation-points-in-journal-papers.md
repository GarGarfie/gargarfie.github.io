---
title: Methods and Tips for Finding Innovation Points in Academic Journal Papers
date: 2024/4/10 12:42
updated: 2024/4/10 12:42
lang: en
i18n: 学术期刊论文寻找创新点的方法和技巧
toc: true
mathjax: true
tag:
    - Academic
    - Engineering
    - Journal Paper Tips
    - Writing Skills
    - Innovation
categories: Academic
---

# Methods and Tips for Finding Innovation Points in Academic Journal Papers

## Core Requirements and Types of Innovation (Innovation Points of a Paper)

### Core Concept

Research is the process of discovering a problem and finding a solution to it, and writing a research journal paper is usually the process of turning that real activity into an article. When you submit a journal paper, editors usually expect it to contain enough innovation points. If the innovation is insufficient, the result may be a rejection or a major revision.

$$
\text{Innovation} = \text{Discovering a problem} + \text{Creating a solution}
$$

How to find innovation points, how to write them, or, put bluntly, how to add innovation points you had not thought of to a paper that is already finished: these are questions worth thinking about.

### Types of Innovation and Choosing the Journal Tier

Put simply, innovation falls into four types, and we can use them to decide the scope of our submission and the tier of the target journal:

|     Type of innovation     |                      Novelty                      |       Target journals        |
| :--------------: | :----------------------------------------------: | :-------------------: |
| 1. New problem + new method |                      Very strong                      |    Top-tier journals     |
| 2. Old problem + new method | Addresses a problem the field has long recognized; good novelty | Top-tier / mainstream journals |
| 3. New problem + old method |    Uses an existing method on a problem you discovered; moderate novelty    |     Mainstream journals      |
| 4. Old problem + old method |                    Very weak novelty                    |       Low-quality journals        |

## How to Find Innovation Points and Ideas

### Method Ⅰ. Read the Literature, Innovate by Application

Read papers and specialist books to learn the old and new methods used in your field, and the old and new problems that still exist.

Then choose one of the following ways to apply them:

1. An old method you already know →(applied to) a known new problem / a new problem you discovered
2. A new method →(applied to) a known old problem

The paper must also <u>verify</u> **the effectiveness of the method** and **the plausibility of the results**.

Together, these make a solid journal paper.

Example: the currently popular artificial intelligence / machine learning can be applied to many long-standing engineering problems.

### Method Ⅱ. Innovate by Improvement

Propose an improvement to an existing solution that is <u>fairly new / widely used / well regarded (published in top or high-level journals)</u>. (Between us, it is more of a modification, since your "improvement" may not actually improve anything.)

Even an improvement that <u>adds unnecessary parts / uses a heavy tool for a light job / makes the process more complicated but increases the accuracy or reliability of the results</u> is acceptable.

For example, this paper: [An enhanced empirical Fourier decomposition method for bearing fault diagnosis](https://journals.sagepub.com/doi/full/10.1177/14759217231178653) [[1]](https://journals.sagepub.com/doi/full/10.1177/14759217231178653)

Its title is "An enhanced empirical Fourier decomposition method for bearing fault diagnosis". It uses an empirical formula to improve the well-known Fourier decomposition method so it can be used for bearing fault diagnosis, which is itself a form of innovation by modification.

Another example:

A well-known expert proposed a theoretical model of some response mechanism. Feeding data into the model F(x,y,z) gives the response X+Y+Z. Based on this model we could make one of the following improvements:

1. Add to the model, changing it to F(x,y,z,u). Applying it gives the response X+Y+Z (more accurate) or X+Y+Z+U. It can then be applied to a new scenario, add a response to the original scenario, or serve a special application scenario (**this scenario is a must**).
2. Or, for a specific application, we may not need such a complex model and only need the response X. Then we simplify: remove the redundant factors from the original model, F(x) → X.

### Method Ⅲ. The Academic "Patchwork"

Instead of working on a single existing theory or solution, take several existing theories or solutions and stitch them together, like an academic tailor.

For a given type of problem, we use theory A for the first part, theory B for the second part, theory C for the third part...

And so on. Here is an example:

[Structural damage detection based on variational mode decomposition and kernel PCA-based support vector machine](https://www.sciencedirect.com/science/article/pii/S0141029622016418#b3) [[2]](https://www.sciencedirect.com/science/article/pii/S0141029622016418#b3)

We discussed this paper in the previous post.

The paper proposes a new structural damage detection method that combines variational mode decomposition (VMD) and kernel principal component analysis (KPCA). The method aims to overcome the effects of environmental variation and detect structural damage accurately. The proposed monitoring and identification workflow can be summarized in the following key steps:

1. **Data decomposition**: First, the variational mode decomposition (VMD) algorithm decomposes the structure's vibration response data to obtain intrinsic mode functions (IMFs) and time-frequency features.

2. **Feature extraction**: Next, spectral centroid (SC) features are extracted from selected IMF components. These features correspond to statistical properties of the spectral shape in the short-time Fourier transform (STFT) and are used to build a damage feature matrix. Only the IMF components that carry damage information are used, to remove redundant (or irrelevant) features.

3. **Dimensionality reduction**: Then kernel principal component analysis (KPCA) is applied to the feature matrix to overcome the effects of operational and environmental variation and obtain damage-sensitive indicators.

4. **Decision making**: A support vector machine (SVM) is used as the decision-making tool to compare how effectively this method and existing methods extract damage features.

Looking at this workflow, we can see that the paper uses the ultimate patchwork approach. Data decomposition uses the VMD model; feature extraction uses IMF components to extract statistical properties of the spectral shape from the well-known short-time Fourier transform (STFT) (wavelet transform), which is a patchwork within the patchwork; data normalization uses KPCA on the feature matrix. Finally, a decision and evaluation mechanism is needed to show whether the proposed model beats existing solutions (this mechanism will of course favour the paper), so an SVM is stitched in as well, with parameters tuned until the proposed model comes out ahead.

### Method Ⅳ. Innovate by Comparison

What if my brain has completely crashed: I can't think of a new problem or a new solution, and I don't even want to stitch together other people's theories? Then I can propose an evaluation framework and become a good reviewer of methods.

Take the many theories / methods / models the field has proposed for a problem, put them side by side and analyse them against the problem: what are the strengths and weaknesses of each method, what scenarios suit each one, when is method A better and when is method B better. Score the effectiveness of each method in several scenarios, propose a scoring scheme and build a table. You can also discuss potential improvements and future directions for each method.

### Method Ⅴ. Hard-core Innovation

Once you have built up enough research in your own field and have some experience reproducing how earlier experts derived their models, you propose a completely original solution to a new or old problem and derive your own model. Hard-core innovation shows that your academic foundation is solid; it marks the step from junior to senior research, and it brings a great sense of achievement as others cite and learn from the model or theory you created.

## <u>References</u>

1. Zhu D, Liu G, Wu X, Yin B. An enhanced empirical Fourier decomposition method for bearing fault diagnosis. Structural Health Monitoring. 2023;23(2):903-923. doi:[10.1177/14759217231178653](https://doi.org/10.1177/14759217231178653).
2. Bisheh HB, Amiri GG. Structural damage detection based on variational mode decomposition and kernel PCA-based support vector machine. Engineering Structures. 2023;278:115565. doi:[10.1016/j.engstruct.2022.115565](https://doi.org/10.1016/j.engstruct.2022.115565).
