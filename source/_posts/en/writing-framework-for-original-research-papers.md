---
title: A Writing Framework for Original Research Papers in SCI Journals
date: 2024/4/21 14:23
updated: 2024/4/21 14:23
lang: en
i18n: 创新研究型SCI期刊论文学术写作框架
toc: true
mathjax: true
mermaid: true
tag:
    - Paper Reading
    - Academic
    - Engineering
    - Journal Paper Tips
    - Writing Skills
    - Innovation
    - Health Monitoring
categories: Academic
---

# A Writing Framework for Original Research Papers in SCI Journals

> "Imitation is suicide."
>
> —— Ralph Waldo Emerson, "Self-Reliance"

## Preface

Without my noticing, it seems to be just as Thomas Kuhn described in *The Structure of Scientific Revolutions*: science works within a stable framework he called a "paradigm", and scientific progress often depends on following these paradigms.

Many scholars joke that SCI journal papers are "academic boilerplate", as if editors only accept manuscripts that follow the established template or read like a "journal paper". Admittedly, good papers and established templates both have smooth logic. But change your mood for a moment: imagine you are not a scholar, step outside the framework and look around as if from a mountaintop. You will find that the mountains all look alike; they are simply piled up there and become a mountain range. Newcomers standing at the foot look up at the towering peaks, want to climb them, and feel afraid of the height. Ordinary people in the cities beyond never touch these mountains, let alone understand the trails or think of crossing them.

So we can conclude that a good original research paper consists of <u>high-level logic</u> + <u>solid content</u>. I don't recommend rigidly filling in a template; I prefer free, uninhibited writing. In my view, the best journal paper is one that is full of imagination and well reasoned, yet never departs from scientific fact.

## Structure of an Original Research Paper in an SCI Journal

I usually divide an original research paper into 9 parts:

Abstract, Introduction, Methods, Derivation and Application, Experimental Validation, Results, Comparative Analysis, Discussion, Conclusion

I think they should be written in the following order:

1. **Methods**: describe the study design, materials, experimental methods, and data collection and analysis.

2. **Derivation & Application**: present the derivation and application of the theory, including model building, calculation methods and the details of the algorithm.

3. **Experimental Validation**: verify the accuracy of the theory with real data.

4. **Results**: present the experimental data and findings.

5. **Comparative Analysis**: compare the results with existing research to highlight the contribution of the new work.

6. **Discussion**: explain what the results mean and their impact on theory and practice.

7. **Conclusion**: summarize the main findings and propose directions for future research.

8. **Introduction**: set the research background, define the problem and its importance.

9. **Abstract**: give a high-level summary of the study, including its aim, methods, main results and conclusions.

To really understand how to write an SCI paper that fits the times and the editors, the first and most important step is still to **read a lot**, **read high-impact papers**, and learn the structure and **logic** of excellent papers.

In this post we analyse the following paper section by section, and from it we refine an ideal writing framework for original research papers:

[Unsupervised deep learning approach using a deep auto-encoder with a one-class support vector machine to detect damage](https://journals.sagepub.com/doi/full/10.1177/1475921720934051) [[1]](https://journals.sagepub.com/doi/full/10.1177/1475921720934051)

Using the method introduced in my earlier post "[Methods and Tips for Finding Innovation Points in Academic Journal Papers](/2024/04/10/en/finding-innovation-points-in-journal-papers/)" to deconstruct this paper, we can see that it is an original research paper of the "new method + old problem" type.

Old problem: structural damage monitoring

New methods: (1) an unsupervised deep learning method; (2) a new method, the "deep auto-encoder", nested in the "unsupervised deep learning method"; (3) a new method, the "one-class support vector machine", nested in the "unsupervised deep learning method with a deep auto-encoder"

Once we understand the paper's innovation mechanism, we can sketch its overall structure in our heads:

1. **Abstract**:

   - The paper opens with an abstract outlining the topic, the technique used (an unsupervised deep learning method), and the main contributions and findings.

2. **Introduction**:
   - Introduces the background, focusing on the limitations of existing damage detection methods, and argues for a new deep-learning-based method.
   - It also explains in detail why traditional vision-based methods cannot meet current needs, and why methods that can detect internal and invisible damage are needed.

3. **Proposed Method**:
   - Describes the proposed unsupervised deep learning method in detail, including its theoretical basis, key technical parameters and implementation steps.
   - Discusses how the deep auto-encoder and the one-class support vector machine (OC-SVM) are combined and used for damage detection.

4. **Numerical Simulation and Experimental Setups**:
   - Details the numerical simulations and experiments used to evaluate the method, including the data used, the model parameters and the experimental procedures.

5. **Case Studies**:

   - Shows applications of the method based on real data and simulation results, verifying its effectiveness.
   - Provides detailed data analysis and discussion, emphasizing the potential advantages and effects of the method in practice.

6. **Conclusion**:

   - Summarizes the main findings and emphasizes the advantages of the proposed unsupervised deep learning method for detecting structural damage.

   - Discusses the limitations and possible future research directions.

Seeing the whole through a single example, we will now go through each part in reading order (not writing order), proposing a writing framework for it and analysing its content.

## **Title**

The most immediate part of a journal paper is its title. A title should be <u>concise</u>, <u>reflect the core</u> and <u>be novel</u>.

Let's learn from a few examples.

First, the **wrong** way:

~~"An innovative approach to managing demolition waste via GIS (geographic information system): a case study in Shenzhen"~~

A title like this is too general: it gives no glimpse of the core of the paper, signals a paper without novelty, and is very likely to be rejected.

Now some good examples.

First, the research paper we are analysing: "Unsupervised deep learning approach using a deep auto-encoder with a one-class support vector machine to detect damage"

This title shows the core of the whole paper directly.

We can roughly divide research paper titles into two types:

|                          Concise type                          |                        Method-highlighting type                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| Characterizing the generation and flows of construction and demolition waste in China | Combining life cycle assessment and Building Information Modelling to account for carbon emission of building demolition waste: A case study |
| Cross-regional mobility of construction and demolition waste in Australia: An exploratory study | An approach integrating geographic information system and building information modelling to assess the building health of commercial buildings |

Learning from these examples, if you have no good idea for a title, writing it from a type template is fine. But a truly good title is one you write yourself: <u>concise</u>, <u>reflecting the core</u> and <u>novel</u>, yet also striking, imaginative and beyond the usual paradigm (look at the papers in Nature).

## **Abstract**

From a reader's point of view, the abstract and introduction are what we see right after the title. They are like the intro of a song: a good intro captures people's hearts, and the same goes for editors.

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1970998424&auto=1&height=66"></iframe>

An abstract contains:

1. … in recent years … State the background of the problem and recent hot topics.

2. However, … Existing solutions fall short / a problem lacks a solution.

3. This article proposes an ... What new method the paper proposes to solve the problem.

4. The proposed method/Model ... What methodology and workflow the method/model uses.

5. The ... problem still exists in the ..., By using ..., thereby achieving ..., thus solving the problem of ... What weaknesses the method still has, and what improvements solve them.

6. The proposed … in this work/article … What its advantages are and what problem it solves.

7. Technical results of the method (high accuracy / high … in terms of …, and the main experimental results).

8. (Comparative analysis) The results of this method are ..., accuracy/results improve by xxx compared with other methods, it outperforms them in xxx, and why.

9. The aim is achieved.

Here is a sentence-by-sentence analysis of the original abstract.

**Throwing light on the core innovation of this paper**:

   - "This article proposes an unsupervised deep learning–based approach to detect structural damage."
It states the topic at the start (you don't have to write it exactly this way): the paper proposes a new method that uses unsupervised deep learning to detect structural damage.

**Limitations of Current Supervised Methods**:

   - "Supervised deep learning methods have been proposed in recent years, but they require data from an intact structure and various damage scenarios of monitored structures for their training processes."
This part points out the limitation of current supervised deep learning methods: they need large amounts of varied training data, which may be impractical to collect.

**Challenges with Data Labeling**:

   - "However, the labeling work on the training data is typically time-consuming and costly, and sometimes collecting sufficient training data from various damage scenarios of infrastructures in service is impractical."
This sentence highlights the specific challenges of labeling in supervised learning: cost, time, and impracticality in some real scenarios. (In other words: a new technique has recently appeared, but it still has drawbacks, and I will propose an improvement.)

**Proposed Solution with Novel Methodology**:
   - "In this article, the proposed unsupervised deep learning method based on a deep auto-encoder with a one-class support vector machine only uses the measured acceleration response data acquired from intact or baseline structures as training data, which enables future structural damage to be detected."
It introduces the proposed solution, a novel unsupervised method that avoids these limitations. It uses only data from the intact structure, simplifying data collection and preparation.

**Main Contributions and Novelty**:
   - "The major contributions and novelties of the proposed method are as follows."
This lays the groundwork for detailing the new contributions and marks the transition to a more specific description.

**Specific Advantages and Validation**:

   - "First, an appropriate ..."
It describes the results, advantages and comparison of the method; I won't analyse it further here.

## **Introduction**

The main structure of an introduction:

1. **Background**: tell a story and raise the problem: in ..., problem "Q0" exists.

   Topic background and importance: the introduction first stresses the importance of problem Q0 and the need for ...

2. **Review and analysis of existing traditional solutions**: review the literature, then analyse the strengths and weaknesses of each method.

   Introduce the traditional methods and review them: because of limitations in ... and specific ..., such as low ... leading to ... (give concrete engineering or research cases), the traditional ... has problem Q1 / is limited by ....

   Then review each method that addresses Q1 and analyse its strengths and weaknesses.

3. **Emergence of a new technique**: introduce a new technique/method.

   In recent years, ... (new technique/method B) has appeared in .... Review method B, then describe and analyse its main advantages and what new functions it enables. Discuss specifically how method B solves problem Q1 of the traditional method A, or how it compensates for ....

4. **Deeper discussion of the new method** (however good it is, the new method must have shortcomings, i.e. a problem Q2):

   (Introduce more sophisticated new methods and their applications in ..., but point out their limitations in ....)

   However, ... of ... (method B) is usually ... (shortcoming) / the use of ... (method B) in ... is impractical. Use examples or citations to elaborate on the shortcomings of method B.

5. **Propose a solution to the new method's problem** (transition to the strong demand for a method that solves this problem, and introduce an improved method B or an even newer method):

   Therefore, the demand to develop a method that can solve ... (Q2) is high. (Example) Therefore, the demand to develop a method that can ... is high.

   First break down the principle of the new method further, then show that the root cause of method B's problem Q2 lies in its need for ....

   Through ..., with its ..., describe the steps in detail to solve method B's existing problem. Propose a solution to Q2, i.e. an improved method, stressing that the improved method C / a proposed solution C provides a reliable way to solve problem Q2 of method B. (Example) This shows that, using data collected from the structure through ..., these methods can effectively identify ..., because they rely on actually measured data rather than predefined model assumptions.

6. **Innovations of this paper**

   Describe the novel contributions of the proposed method in detail. List the specific innovations and contributions.

7. **Outline of the Article**

   "This article comprises … sections. …" How many parts the paper has and what each contains.

   Typically:

   <u>The "Introduction" section</u> introduces ... and briefly reviews ....

   <u>The "Methods" section</u> explains the proposed method in detail, including technical details and the reasoning behind design choices.

   <u>The "Numerical simulation and experiments" section</u> presents the numerical model and the experiments, describing the practical applications and experimental framework used to test and validate the method.

   <u>The "Case studies" section</u> provides case studies of ..., discussing real applications or simulations in detail to show how the method is applied and what it achieves.

   <u>The "Comparative analysis" section</u> compares the results with existing research to highlight the contribution of the new work.

   <u>The "Discussion" section</u> discusses the results, analyses them numerically, explains what they mean and their impact on theory and practice.

   <u>The "Conclusion" section</u> summarizes and reflects on the previous sections, gives an overall evaluation of the method's effectiveness, and discusses possible future work.

## **Proposed Method**

1. **Overview of the proposed method**: this is the first and essential part of the methods section. First give an overview of the new method, explain how it relates to the original problem and how it overcomes the limitations of .... Be sure to draw a good-looking **framework diagram** that shows the proposed method/model's <u>main parts</u>, <u>modules</u>, <u>add-on/plug-in modules</u>, <u>process order</u>, <u>the problems it addresses</u>, <u>functions</u> and so on, then describe the framework from the diagram (this is where you must state the innovations and highlights).

2. **Detail by module or step**: describe the framework from part 1 <u>module by module</u> or <u>step by step</u>, i.e. tell us how it is done and how the method works, explaining why where appropriate. This part can be split into several subsections.

3. **Finishing touches**: (1) Explain the data in detail: their type, form, how they were collected and what they consist of. (2) The case study (optional). (3) Research assumptions (optional). (4) Research limitations (optional).

## **Numerical Simulation and Experimental Setups**

1. **Overview of simulation and experiment goals**: first state the purpose of the simulations and experiments, i.e. to verify the method's effectiveness under controlled conditions.

2. **Description of the numerical model**: give details of the numerical model, including its physical parameters, simulation environment and type of simulation. Explain how the variables or control cases are introduced into the model to test the sensitivity and accuracy of the method.

3. **Experimental setup**: describe the preliminary design and test plan, preconditions, equipment and basic parameters. Present the test rig in detail: the physical structure, data collection instruments (such as sensors and their locations) and how excitation and measurement were done. Discuss data acquisition: how data were collected, stored and processed (stressing that this is essential for data quality and usability in training and testing the model).

4. **Integration of numerical and experimental data**: explain how data from simulations and physical experiments are combined and fed into the final model to solve the original problem, including data processing, feature extraction and algorithm application.

5. **Results and preliminary + extended observations**: present the preliminary results of simulations and experiments and give an initial assessment of the method's performance, including statistical analysis and visualizations showing its effectiveness in detecting various .... Then make **<u>preliminary</u> observations**: from the raw results, without further analysis, what small conclusions and correlations can be drawn. Then process the preliminary results mathematically (or otherwise) to see what further results emerge.

## **Comparative Analysis**

The comparative analysis section is structured to show effectively the contribution and advantages of the new method over existing methods for the original problem.

1. **Overview of the comparison**: begin by comparing the results of the proposed method with other established methods in the field. Give the background and rationale for the comparison, stressing the importance of benchmarking against current standards in structural health monitoring.

2. **Comparison criteria**: outline the specific criteria or metrics used, such as accuracy, sensitivity, detection time and computational efficiency. This is crucial: it sets the basis for evaluating the methods, ensures a fair comparison and covers aspects that matter in practice.

3. **Presenting comparative data**: usually in tables or charts, present detailed experimental and simulation results comparing the proposed method's performance with others visually and statistically. These data highlight the method's strengths and where it may need improvement.

4. **Analysis of results**: after presenting the data, analyse and discuss the results in depth. After an initial analysis of the comparison, as with the earlier experimental results, process the results further mathematically (or otherwise) to extend them and discuss deeper points. Finally, explain why certain results were obtained, which features of the method contributed to its performance, and how it compares with the others. This part is crucial: it analyses the practical meaning of the findings and validates the method.

5. **Emphasize contributions and progress**: finally, stress the new contributions of the method to the original problem area. Discuss the progress it brings (for example better detection, shorter processing time or less need for labeled data), which are significant improvements over existing methods.

## **Discussion**

1. **(Optional) Summarize the existing results first**: since the results are split into experimental and comparative results, you can first summarize both, then interpret them again: what they mean, how they confirm the method's effectiveness, and what they imply for its performance in real-world conditions.

2. **Theoretical implications**: turn to theory and analyse how the findings agree with or challenge existing theories in the field. This part usually explores the underlying principles that might explain the observations. For an improved structural monitoring method that uses new deep learning techniques, it typically discusses aspects of machine learning theory, the efficiency of unsupervised learning, or how deep auto-encoders and OC-SVM behave when detecting structural anomalies.

3. **Practical applications**: describe the practical applications of the method and how it could be implemented in real monitoring systems. This may cover scenarios or environments where the method is especially effective (for such a deep-learning-based monitoring method: monitoring large infrastructure, or situations where other monitoring techniques are impractical).

4. **Comparison with existing methods**: include a comparative discussion with existing methods, highlighting the advantages and possible drawbacks of the proposed method. This places the new method within the broader field and gives context to its contributions and limitations.

5. **Limitations and future research**: (every solution has limitations, and even after you improve it, the improved solution still has limitations; find them!) Discuss the limitations found during the research and propose areas for future work. These may include potential improvements, additional features to integrate, or untested applications.

## **Conclusion**

Don't try to expand on anything in the conclusion. All of your writing should be finished before it. The conclusion simply summarizes what is already there: the main findings, the value of the proposed method and the future research directions.

The conclusion of the paper we analysed is simple and direct:

1. **Summarize the research**: summarize the whole study: why the new method was developed and for what reasons, which experiments and simulations verified its effectiveness (briefly recap the experimental process), and what comparisons and extended analyses were made (a recap of the whole research workflow).
      Then state:
      "Therefore, the following conclusions have been drawn from the research conducted in this paper:"
      and list the conclusions, which include but are not limited to:

2. **Performance evaluation**: (1) Quantified results: list numerical results such as the high accuracy achieved in tests, proving the method works in real-world scenarios with inherent uncertainty. (2) Comparison with the original methods: for example, noting a slight drop in accuracy in the latter case while still validating the proposed method. (3) Feature sensitivity / feature parameters: discuss how three specific features were used to improve a certain performance, further improving the system's accuracy/efficiency.

3. **Point out the advantages of the new method**: "Unlike traditional methods that require extensive damage scenario data, our method utilizes only baseline data, simplifying the training process and reducing the operational complexity."
      This outlines a notable advantage over traditional methods. It stresses the efficiency of using only baseline data, which simplifies data preparation in sharp contrast to methods that need complex and extensive data sets. This reduces not only complexity but also operating cost and time.
      (Example) It argues that the new method is more effective than other state-of-the-art unsupervised methods, especially for detecting minor damage such as loose bolts in bridge structures.
      Advantages should really cover several aspects; here is one example of technical progress:
      Parameter efficiency: claims the method needs fewer parameters to study than existing methods, which helps improve damage detection accuracy.
      Experimental validation: describes validation on a 12-storey numerical building model and a laboratory-scale steel bridge, successfully detecting damage of different severities.

4. **What is the impact on the field?**: "This approach not only advances the field of structural health monitoring but also offers a robust tool for infrastructure management, potentially increasing safety and reducing maintenance costs."
   (Think big: connect the original field with other fields.) This widens the discussion and links the results to their larger impact on structural health monitoring and infrastructure management, positioning the method as a significant advance that can improve safety and cost-effectiveness, which are key considerations in practice.

5. **Limitations and future work**: (1) Acknowledge limitations: e.g. damage localization and quantification are challenging because the training data contain no damage information. (2) Future directions: e.g. suggest that future work focus on identifying structural states for various damage types and locations on large infrastructure.

Note: never make the conclusion identical to the abstract!

That completes the writing framework of a paper. On the journey of academic writing, the first step is often the hardest. Many people fear the blank page because they worry their work won't be perfect or good enough. Yet every great academic achievement starts with one simple action: starting. Starting to write, whatever the quality of the first draft, is the only path to learning, growing and finally excelling. Every paper you write is like your own child; every word and every sentence is a chance to explore ideas, sharpen arguments and show creativity. Taking that first step bravely means accepting the uncertainty and imperfection of the process, and giving yourself the chance to go from a rough first draft to a polished work. Remember, every step of writing is a step forward and a chance to learn and create from imperfection.

> "If you want to be a writer, you must do two things above all others: read a lot and write a lot. There's no way around these two things that I'm aware of, no shortcut."
>
> —— Stephen King, "On Writing: A Memoir of the Craft"

## <u>References</u>

1.  Wang, Z., & Cha, Y.-J. (2020). Unsupervised deep learning approach using a deep auto-encoder with a one-class support vector machine to detect damage. In Structural Health Monitoring (Vol. 20, Issue 1, pp. 406–425). SAGE Publications. https://doi.org/10.1177/1475921720934051
