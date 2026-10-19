# Blood pressure, cholesterol and an antihypertensive drug

**Evaluación: Estadística**

A statistical analysis of 100 patients, 40 young (Group 1) and 60 adults (Group 2), measuring systolic blood pressure before and 60 minutes after taking a drug, together with total cholesterol. All calculations are done in Excel.

## What it covers

- **Descriptive statistics by group:** mean, median, mode, standard deviation, range, coefficient of variation, skewness and kurtosis
- **Outlier detection** with quartiles and Tukey's rule (1.5 × IQR), boxplots and histograms
- **Linear regression** of blood pressure after the drug on total cholesterol, with R², F test and residuals
- **Confidence intervals and hypothesis tests** for a mean and for a difference of means

## Key findings

- Systolic pressure falls across the whole distribution after the drug: the median drops from 125 to 120 mmHg.
- Adults start with higher and more variable pressure than young patients (mean 127.5 vs 123.4 mmHg; coefficient of variation 10.9% vs 7.3%).
- After the drug there are five outliers, all adults: three with a much larger drop than the rest (to 77, 83 and 90 mmHg) and two whose pressure rose (to 158 and 161 mmHg).
- In young patients, total cholesterol explains 56% of the variation in blood pressure after the drug (r = 0.75): each extra 5 mg/dL is associated with about 3 mmHg more.
- The data are compatible with a mean pre-drug pressure of 130 mmHg in adults, and the difference between adults and young people after the drug is not statistically significant.

## Contents

| File | What it is |
| --- | --- |
| `informe.pdf` | Report with tables, charts and interpretation (in Spanish) |
| `analisis.xlsx` | Data and all calculations, with formulas |

---
Lama Jaber · Estadística, Master's in Data Science, Big Data & Business Analytics, UCM
