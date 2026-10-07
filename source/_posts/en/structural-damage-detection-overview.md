---
title: A Brief Overview of Structural Damage and Defect Detection and Identification Techniques
date: 2024/4/4 06:42
updated: 2024/4/4 06:42
lang: en
i18n: 对结构损坏或缺陷检测和识别技术的简单梳理
toc: true
mathjax: true
tag:
    - Academic
    - Civil Engineering
    - Structural Damage
    - Health Monitoring
    - Deep Learning
    - Machine Learning
categories: Academic
---

![The crabapple blossoms in Changsha are out 🦁](https://s1.imagehub.cc/images/2024/04/04/0fa7ae004fadf0e5b6c0ddae062cc3c9.png)
The crabapple blossoms in Changsha are out 🦁

# A Brief Overview of Damage and Defect Detection and Identification Techniques for Civil Engineering Structures

## 1. [Structural Health Monitoring](https://www.sciencedirect.com/topics/engineering/structural-health-monitoring) (SHM)

### 1.1 Concept and Steps

Damage identification in existing bridges plays a vital role in the operational safety of civil infrastructure systems. Structural damage that is not identified in time can lead to economic losses and casualties. It is therefore essential to research and develop [structural health monitoring](https://www.sciencedirect.com/topics/engineering/structural-health-monitoring) (SHM) techniques that detect damage accurately and early in an [automated manner](https://www.sciencedirect.com/topics/engineering/automatic-manner), saving [repair and maintenance](https://www.sciencedirect.com/topics/earth-and-planetary-sciences/repair-and-maintenance) costs.

> In an operational environment, structures degrade with age and use. Long-term SHM periodically outputs updated information about the structure's ability to continue performing its intended function. After extreme events such as earthquakes or blast loading, SHM can be used for rapid condition screening. SHM aims to provide reliable information about structural integrity in near real time. [[1]](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Dawson%2C+Brian+%281976%29.+%22Vibration+condition+monitoring+techniques+for+rotating+machinery%22.+The+Shock+and+Vibration+Digest.+&btnG=)

Structural health monitoring (SHM) is the strategic process of making informed decisions about a structure's health based on continuously collected data. To monitor, detect and identify the state of the system directly, features must be identified in the acquired data that distinguish undamaged from damaged structures. One of the most common feature extraction methods is to correlate measured [system response quantities](https://en.wikipedia.org/wiki/Fault_detection_and_isolation) (such as vibration amplitude or frequency) with observations of the degrading system. Damage accumulation tests can also be used to identify suitable features: important structural components of the system under study are degraded under realistic loading conditions. This may involve induced-damage tests, fatigue tests, corrosion growth or temperature cycling to accelerate the accumulation of certain types of damage.

SHM involves several steps, in order:

1. Selecting the excitation methods

2. Selecting the sensor types / data types to collect

3. Selecting the number and locations of sensors, and the data acquisition/storage/transmittal hardware (often called a [health and usage monitoring system](https://en.wikipedia.org/wiki/Health_and_usage_monitoring_systems))

4. Acquiring data from the sensors installed on the structure

5. Normalizing and cleansing the data to ensure reliability

6. Extracting features to identify indicative damage patterns, and compressing the data

7. Developing statistical models

8. Analysing these patterns to distinguish damage states/patterns

   Among these steps, "5. Normalizing and cleansing the data" can be classed as **data management**, while 6, 7 and 8 belong to **data interpretation and diagnosis**. The elements of **data interpretation and diagnosis** can be summarized in four items:

   1) System identification
   2) Structural model updating
   3) Structural condition assessment
   4) Prediction

### 1.2 Excitation Methods

Excitation methods can be roughly divided into three types:

1) **Natural excitation**: natural events such as wind, rain and earthquakes act as external excitation sources; the structure's health is assessed by analysing its response to them.
2) **Artificial excitation**: equipment such as shaking tables, impact hammers and vibration exciters applies controlled excitation to the structure and its response is measured. This allows more accurate simulation and analysis of the structure's dynamic properties.
3) **Environmental excitation**: besides natural excitation, man-made environmental changes (such as changes in temperature or humidity) can also serve as excitation. Monitoring the structure's response to these changes shows its adaptability and durability.

### 1.3 Types of Monitoring

The source data, or data type, determines the type of monitoring. The two most common techniques are wave-propagation-based techniques [[2]](https://deepblue.lib.umich.edu/handle/2027.42/77498) and vibration-based techniques [[3]](https://doi.org/10.1177%2F1475921704047500) [[4]](https://eprints.bournemouth.ac.uk/24581/) [[5]](https://doi.org/10.1177/1475921710365419). Common monitoring techniques include:

1) **Wave-propagation-based techniques**: these use the propagation properties of waves (acoustic, ultrasonic or electromagnetic) in a material to detect internal damage. When waves pass through a structure such as a reinforced concrete slab, a metal member or a composite, their speed, amplitude or other properties change when they meet cracks, voids or inclusions. Analysing these changes identifies and locates the damage.

**Example**: ultrasonic testing to check welds in large steel structures. A small ultrasonic transmitter sends waves from one end, and a receiver at the other end records their arrival time and intensity. If a weld contains a crack, the wave path is interrupted or altered, the received signal becomes abnormal, and a potential structural problem is revealed.

2) **Vibration-based techniques**: these assess structural health by measuring the vibration response of the structure under natural or artificial excitation. Comparing the current vibration pattern with the known healthy pattern reveals changes or damage.

**Example**: bridge vibration monitoring. Accelerometers installed at key locations on a bridge record its vibration under everyday traffic and wind loads in real time. From these data engineers can identify changes in structural performance, such as shifts in natural frequency caused by bearing ageing or cable slackening. Such monitoring helps detect problems early and avoid catastrophic failure.

3) **Fibre-optic sensing**: fibre-optic sensors use the propagation of light in optical fibres to detect changes in a structure, such as strain, temperature and pressure. They can be laid over very long distances, provide continuous monitoring and are highly resistant to environmental interference, which makes them ideal for large structures (bridges, high-rise buildings, tunnels). They usually work on the principle that properties of the light (intensity, phase, polarization or frequency) change with the environment around the fibre; measuring these changes reveals the state of the structure. The fibre Bragg grating (FBG) sensor is a common type that detects strain and temperature changes by measuring shifts in wavelength.

**Example**: FBG sensors installed on a high-speed railway bridge can monitor tiny deformations as trains pass and catch early signs of damage caused by stress concentration or fatigue. Their high sensitivity to temperature and strain makes them ideal for monitoring large infrastructure.

4) **Resistance strain gauges and strain sensors**: resistance strain gauges measure the deformation of a material or structure under load. They rely on the principle that a conductor's resistance changes when it is stretched or compressed. This change can be measured precisely and converted into strain, giving data on the stress state of the structure. Strain gauges are usually bonded to the surface and detect small deformations under applied or natural loads, which is very useful for assessing structural health, especially crack growth, local stress concentration or loss of prestress.

**Example**: strain gauges installed on wind turbine blades measure bending and twisting under wind, providing key data on blade performance and structural integrity. This information is vital for predictive maintenance and avoiding failures.

5) **Thermal and infrared imaging**: infrared cameras capture thermal radiation images and measure temperature distributions without contact. The surface temperature distribution can reveal problem areas, based on a key principle: damage (cracks, delamination, voids or moisture ingress) changes the thermal properties of the material and therefore the surface temperature. Infrared imaging can monitor these changes remotely and without contact, providing an effective early-warning system.
**Example**: crack detection. In concrete structures, cracks can lead to corrosion of the reinforcement and affect overall stability. Thermal imaging helps detect cracks early, especially fine cracks that are hard to see.
**Another example**: moisture ingress. Moisture is a serious problem for structures and can cause material deterioration such as concrete swelling or rebar corrosion. Infrared imaging can detect humidity changes on or inside the structure because moisture changes thermal conductivity, which shows up in the thermal image.
**Yet another example**: delamination or voids in roads, bridge decks and airport runways can cause failure. Thermal imaging identifies them because heat propagates through defective areas differently from sound areas.
**And another**: machine learning can be combined with infrared techniques, or machine learning + Geographic Information Systems (GIS) + infrared, to identify building defects.

**Case studies**:
Bridge inspection: thermal imaging of bridges identifies potential structural problems caused by the environment or age. For example, a thermal scan of a bridge deck can reveal abnormal hot spots caused by water seepage or cracks, which may be precursors of further damage.
Concrete monitoring: in large concrete dams or buildings, thermal imaging of the concrete temperature distribution reveals possible cracks, delamination or moisture accumulation. During curing in particular, an uneven temperature distribution may indicate problems with the pour, such as early cracking.

6) **Digital image processing and computer vision**: these techniques monitor structural health by analysing images collected by cameras or other imaging devices. They can detect cracks, corrosion, deformation and other visible indicators on structural surfaces. High-resolution images give detailed information about surface condition, and computer vision algorithms identify and quantify these features automatically. The approach is especially useful for structures that need regular visual inspection, such as bridges, roads and building façades.

Principle:
Digital image processing includes image enhancement, feature extraction and image segmentation, aiming to improve image quality and extract useful information. Computer vision then interprets this information to understand the image content, for example by using pattern recognition to detect cracks, corrosion or other anomalies automatically.

**Applications and examples**:
Crack detection: by analysing images of buildings, bridges or roads, computer vision algorithms can identify the presence, location and size of cracks. For example, a drone with a high-resolution camera photographs a bridge, and image processing then marks crack locations precisely and estimates crack width.
Corrosion detection: corrosion of steel structures or reinforcement can cause serious problems. Surface images reveal signs of corrosion such as colour and texture changes. This matters especially for bridges, pipelines and other structures in corrosive environments.
Deformation and displacement monitoring: time-series analysis of images taken over time can reveal small deformations or displacements. This suits monitoring the stability of dams, high-rise buildings and foundations; comparing images from different times shows deformation trends and reveals risks early.
Concrete surface defects: surface defects such as holes, honeycombing and cracks affect durability and load capacity. Image processing can identify them automatically from high-resolution images, helping engineers assess structural integrity.
It can also be combined with GIS to detect hazards or cracks.

7) **Environmental monitoring**: real-time monitoring of environmental factors that affect structural performance and durability, such as temperature, humidity, corrosive chemicals, salt, wind speed and wind direction. Analysing changes in these parameters helps us understand how materials degrade, predict service life, and plan repairs or strengthening in advance to avoid failure.

Principle:
Environmental monitoring relies on sensors that record data on specific environmental factors continuously or periodically. The data are then analysed to assess their effect on structural health. For example, continuous temperature and humidity monitoring helps estimate the hydration rate inside concrete or the corrosion rate of steel.

**Applications and examples**
Temperature and humidity: monitoring buildings, bridges or tunnels to assess the long-term effect of environmental conditions on materials. For example, crack formation and growth in concrete can be influenced by temperature changes, while high humidity accelerates rebar corrosion.
Chemicals and salt: for bridges and marine structures exposed to salt water or corrosive chemicals, monitoring their concentrations is essential for predicting corrosion rates and taking protective measures.
Wind speed and direction: monitoring high-rise buildings, long-span bridges or wind turbine towers ensures safety in strong winds. Wind load data allow the dynamic response to be simulated and the design optimized against vibration under extreme winds.
Corrosion: corrosion sensors on bridges, pipelines and other metal structures monitor corrosion rate and environmental corrosivity, which is essential for effective maintenance planning and extending service life.

## 2. Health Assessment of Bridges, Buildings and Other Infrastructure

Section 1 described the broad concept of **structural health monitoring**. Health assessment or monitoring applied to infrastructure and structures of all kinds is usually called Structural Health Assessment (SHA) or Structural Health Monitoring (SHM).

When infrastructure or structures are damaged, assessment involves four steps:
1) Detecting whether damage exists
2) Locating the damage
3) Identifying the type of damage
4) Quantifying the severity of the damage

   Signal processing and statistical classification methods are needed to turn sensor data about infrastructure health into damage information for assessment.

### 2.1 Assessment During Construction Management / the Building Life Cycle

1) Life-safety assessment of SHM
2) Economic assessment of SHM
3) How is damage defined for the system under investigation?
4) Of the many possible kinds of damage, which are of most concern?
5) What are the operational and environmental conditions under which the monitored system operates?
6) What are the limitations on acquiring data in the operational environment, and how can they be addressed?

### 2.2 Data Acquisition, Normalization and Cleansing

The data acquisition part of the SHM process involves selecting the excitation methods, the sensor types, numbers and locations, and the data acquisition/storage/transmittal hardware. Again, this process is application-specific, and economic considerations play a major role in these decisions. Another factor to consider is how often data should be collected.

Because data are measured under varying conditions, the ability to normalize them is very important for damage identification. In SHM, data normalization is the process of separating changes in sensor readings caused by damage from those caused by varying operational and environmental conditions. One of the most common procedures is to normalize the measured responses by the measured inputs. When environmental or operational variability is an issue, the data may need to be normalized in time so that data measured at similar points of the environmental or operational cycle can be compared. Sources of variability in data acquisition and in the monitored system need to be identified and minimized as far as possible. In general, not all sources of variability can be eliminated, so appropriate measurements are needed to quantify them statistically. Variability can arise from changing environmental and test conditions, changes in the data reduction process, and unit-to-unit inconsistencies.

Data cleansing is the process of selectively choosing data to pass on to, or reject from, the feature selection process. It is usually based on knowledge gained by the people directly involved in data acquisition. For example, inspecting the test setup may reveal that a sensor was loosely mounted, so, at the judgement of the person performing the measurement, that data set or the data from that sensor may be selectively removed from feature selection. Signal processing techniques such as filtering and resampling can also be regarded as data cleansing.

Finally, the data acquisition, normalization and cleansing parts of SHM should not be static. Insight gained from feature selection and statistical model development will feed back changes that improve data acquisition.

**Take this paper as an example:** [Structural damage detection based on variational mode decomposition and kernel PCA-based support vector machine](https://www.sciencedirect.com/science/article/pii/S0141029622016418#b3) [[6]](https://www.sciencedirect.com/science/article/pii/S0141029622016418#b3)

The paper proposes a new structural damage detection method that combines variational mode decomposition (VMD) and kernel principal component analysis (KPCA). It aims to overcome the effects of environmental variation and detect structural damage accurately. The proposed monitoring and identification workflow can be summarized in these key steps:

1. **Data decomposition**: first, VMD decomposes the structure's vibration response data to obtain intrinsic mode functions (IMFs) and time-frequency features.
2. **Feature extraction**: next, spectral centroid (SC) features are extracted from selected IMF components. They correspond to statistical properties of the spectral shape in the short-time Fourier transform (STFT) and are used to build a damage feature matrix. Only IMF components carrying damage information are used, to remove redundant (or irrelevant) features.
3. **Dimensionality reduction**: then KPCA is applied to the feature matrix to overcome operational and environmental variation and obtain damage-sensitive indicators.
4. **Decision making**: an SVM is used as the decision-making tool to compare how effectively this method and existing methods extract damage features.

Glossary

| Term | Full name | Principle |
| :---------------------------: | :----------------------------------------: | :----------------------------------------------------------: |
| VMD | Variational modal decomposition | An adaptive signal processing method that decomposes a complex signal into several intrinsic mode functions (IMFs), each with a specific bandwidth. VMD solves a predefined variational problem to obtain a set of band-limited mode components that are compact in the frequency domain. |
| IMFs | Intrinsic Mode Functions | Simple oscillation modes extracted from a complex signal. Each IMF represents one intrinsic oscillation mode, and together they form a complete representation of the original signal. It is a time-frequency analysis method especially suited to non-linear and non-stationary signals. |
| SC | Spectral Centroid Feature | A measure of the spectral properties of a signal, representing the "centre of gravity" of the spectrum. In music processing it usually describes the "brightness" of a timbre. In SHM, spectral centroid features extract information from the signal spectrum to identify the damage state of the structure. |
| STFT | Short-Time Fourier Transform | A time-frequency analysis method that splits a long signal into short segments and applies a Fourier transform to each, giving frequency information that changes over time. STFT suits non-stationary signals. |
| KPCA | Kernel Principal Component Analysis | A non-linear dimensionality reduction technique that maps the data into a high-dimensional feature space and performs ordinary principal component analysis (PCA) there. KPCA reveals non-linear structure in data and suits complex data analysis. |
| SVM | Support Vector Machine | A supervised learning model for classification and regression. SVM finds the optimal separating hyperplane in feature space to classify data with the maximum margin. It is particularly suited to high-dimensional data and non-linear problems. |

The paper also carries out numerical studies and experimental validation with existing finite element models, including a numerical model of a steel grid structure and full-scale benchmark studies of the Z24 bridge and the Yonghe cable-stayed bridge. The finite element results are fed into the proposed method to verify its robustness. The results show that the method can identify structural damage accurately under changing environmental conditions.

#### **Traditional** and **Common** Data Normalization and Processing Methods

Data normalization and processing transform raw data into a format better suited to algorithms, improving model accuracy and efficiency. Here are some common methods (**note: these methods are quite traditional and old**):

1. **Min-Max Normalization**
    Scales all features to a given range, usually [0, 1] or [-1, 1]:

	$$
	x' = \frac{x - \text{min}(x)}{\text{max}(x) - \text{min}(x)}
	$$

2. **Z-Score Normalization**

    Also called standardization or the standard score. It transforms the data to mean 0 and standard deviation 1:
    $$
    z = \frac{x - \mu}{\sigma}
    $$
    where `x` is the raw data, `\mu` is the mean and `\sigma` is the standard deviation.

    **Principle:** subtract the mean from the raw data and divide by the standard deviation, so the result has mean 0 and standard deviation 1.
    **Application:** widely used in statistics and machine learning, especially when data are normally distributed. It reduces the effect of different units across features so the model weighs each feature more fairly.

3. **Decimal Scaling**

    Scales data by moving the decimal point. The number of places moved depends on the largest absolute value:
    $$
    x' = \frac{x}{10^k}
    $$
    where `k` is the number of places moved, chosen so that the absolute value of `x'` lies in [0, 1].

    **Principle:** move the decimal point by a number of places based on the order of magnitude of the largest absolute value.
    **Application:** mainly used to simplify data representation and reduce complexity. It is simple but rarely used for training complex machine learning models.

4. **Log Transformation**

    Handles heavy-tailed data and brings the distribution closer to normal:
    $$
    x' = \log(x)
    $$
    It is very effective at reducing skewness.

    **Principle:** transform the data with the natural or base-10 logarithm, typically for long-tailed data.
    **Application:** improves normality and symmetry and the fit of linear regression models.

5. **Square Root Transformation**

    Another way to reduce skewness, especially for count data:
    $$
    x' = \sqrt{x}
    $$
    **Principle:** take the square root of the data, used for positively skewed distributions.
    **Application:** like the log transform, it improves normality and symmetry; common in environmental science.

6. **Box-Cox Transformation**

    A general method for bringing data closer to a normal distribution, defined as:
    $$
    x'(\lambda) = \begin{cases} 
    \frac{x^\lambda - 1}{\lambda} & \text{if } \lambda \neq 0 \\
    \log(x) & \text{if } \lambda = 0
    \end{cases}
    $$
    where `λ` is the transformation parameter.

    **Principle:** a parametric transform that, depending on λ, covers the log transform, square root transform and others, aiming to make data closer to normal.
    **Application:** widely used in statistical modelling and machine learning, especially for models that assume normality, such as linear regression and ANOVA.

7. **Normalization (unit norm)**
    **Principle:** scale the feature vector to unit norm (length 1), so each feature contributes equally to distance calculations.
    **Application:** common in text and image processing and in algorithms that compute similarity between vectors, such as cosine similarity.

    The exact formula varies, but when scaling a feature vector to unit norm it is usually:
    $$
    \text{Normalized} \; \mathbf{x} = \frac{\mathbf{x}}{\|\mathbf{x}\|}
    $$
    where `x` is the original feature vector and `|x|` is its norm (for example the L2 norm).

8. **Discretization and Binning**
    **Principle:** split a continuous feature into intervals (bins), turning it into a discrete feature.
    **Application:** common in preprocessing, especially for decision trees. Discretization simplifies the model, makes it easier to interpret and helps handle non-linear relationships of continuous variables.

    A simple binning example can be expressed through the bin boundaries:
    $$
    \text{Binned} \; x = 
    \begin{cases} 
    1 & \text{if } a \leq x < b \\
    2 & \text{if } b \leq x < c \\
    \vdots & \vdots \\
    n & \text{if } y \leq x \leq z
    \end{cases}
    $$
    where `a, b, c, ..., y, z` are the boundaries of the value range of the continuous feature `x`.

9. **One-Hot Encoding**
    **Principle:** convert a categorical variable into a form machine learning algorithms handle better by creating a new binary feature for each category.
    **Application:** used in almost every model that handles categorical data, including linear regression, logistic regression and neural networks.

· Newer methods are not covered here. I will summarize them in a future post and add a link here when it is published.

### 2.3 Feature Extraction and Data Compression

The area of SHM that receives the most attention in the technical literature is identifying data features that distinguish undamaged from damaged structures. Feature selection is essentially data compression, and the best features for damage identification are, again, application-specific.

One of the most common feature extraction methods is to correlate measured system response quantities (such as vibration amplitude or frequency) with first-hand observations of the degrading system. Another way to develop damage features is to apply engineered defects, similar to those expected in actual operating conditions, to the system and learn which parameters are sensitive to the expected damage. The flawed system can also be used to verify that the diagnostic measurements are sensitive enough to distinguish features from undamaged and damaged systems. Analytical tools such as experimentally validated finite element models can be a great asset here; in many cases they are used to run numerical experiments in which defects are introduced by computer simulation. Damage accumulation tests, in which important structural components are degraded under realistic loading, can also identify suitable features; they may involve induced-damage tests, fatigue tests, corrosion growth or temperature cycling to accumulate certain types of damage at an accelerated rate. Insight into suitable features can come from several kinds of analytical and experimental studies like these, and usually results from a combination of them.

The operational implementation and diagnostic measurement techniques needed for SHM produce more data than traditional uses of structural dynamics information. When comparing many feature sets obtained over a structure's life, data compression is advantageous and necessary. Moreover, because data will be acquired over long periods and in operational environments, robust data reduction techniques must be developed to keep features sensitive to the structural changes of interest despite environmental and operational variation. To further help extract and record the quality data needed for SHM, the statistical significance of the features should be characterized and used in compression.

**Let's return to the same paper:** [Structural damage detection based on variational mode decomposition and kernel PCA-based support vector machine](https://www.sciencedirect.com/science/article/pii/S0141029622016418#b3)

Recap of the paper's full workflow:

1. **Data decomposition**: first, the VMD algorithm decomposes the vibration response data to obtain IMFs and time-frequency features.
2. **Feature extraction**: next, spectral centroid (SC) features are extracted from selected IMF components; they correspond to statistical properties of the spectral shape in the Short-Time Fourier Transform (STFT) and are used to build a damage feature matrix. IMF components carrying damage information are considered, to remove redundant (or irrelevant) features.
3. **Data compression**: then KPCA is applied to the feature matrix to overcome operational and environmental variation and obtain damage-sensitive indicators.
4. **Decision making**: finally, a Support Vector Machine (SVM) is used as the decision tool to compare the effectiveness of this method with existing methods.

Steps 2 and 3 are the feature extraction and data compression.

· Methods for feature extraction and data compression are not covered here. I will summarize them in a future post and add a link here when it is published.

### 2.4 Statistical Model Development

The part of SHM that receives the least attention in the technical literature is developing statistical models that use the features to distinguish undamaged from damaged structures. Statistical model development is the implementation of algorithms that operate on the extracted features to quantify the damage state of the structure. These algorithms usually fall into three categories. When data from both undamaged and damaged structures are available, statistical pattern recognition algorithms fall under general classification, usually called supervised learning; group classification and regression analysis are categories of supervised learning. Unsupervised learning refers to algorithms applied to data that contain no examples from the damaged structure; outlier or novelty detection is the main class of algorithms in unsupervised applications. All of these algorithms analyse the statistical distributions of measured or derived features to enhance damage identification.

Methods for statistical model development are not covered here. I will summarize them in a future post and add a link here when it is published.

## <u>References</u>

1.  Dawson, Brian (1976). "Vibration condition monitoring techniques for rotating machinery". *The Shock and Vibration Digest*. **8** (12): 3–8. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1177/058310247600801203](https://doi.org/10.1177%2F058310247600801203).
2. Raghavan, A. and Cesnik, C. E., Review of guided-wave structural health monitoring," Shock and Vibration Digest, vol. 39, no. 2, pp. 91-114, 2007.
3. Carden, E; Fanning P (2004). "Vibration based condition monitoring: a review". *Structural Health Monitoring*. **3** (4): 355–377. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.118.3093](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.118.3093). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1177/1475921704047500](https://doi.org/10.1177%2F1475921704047500). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [14414187](https://api.semanticscholar.org/CorpusID:14414187).
4. Montalvao, D., Maia, N. M. M., and Ribeiro, A. M. R., A review of vibration- based structural health monitoring with special emphasis on composite materials," Shock and Vibration Digest, vol. 38, no. 4, pp. 295-326, 2006.
5. Fan, W. and Qiao, P. Z., Vibration-based damage identification methods: A review and comparative study," Structural Health Monitoring, vol. 10, no. 1, pp. 83-111, 2010.
6. Bisheh HB, Amiri GG. Structural damage detection based on variational mode decomposition and kernel PCA-based support vector machine. Engineering Structures. 2023;278:115565. doi:[10.1016/j.engstruct.2022.115565](https://doi.org/10.1016/j.engstruct.2022.115565)
