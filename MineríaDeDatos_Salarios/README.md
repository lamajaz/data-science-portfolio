# Data mining on employee salaries

**Evaluación final: Minería de Datos**

A full data mining workflow on 6,684 employees (age, gender, education level, job title, years of experience, salary, country and race). The same dataset is used for three different goals: predicting salary, classifying gender and finding employee profiles.

## What it covers

- **Data understanding and preparation:** exploratory analysis, correlations and Cramér's V, missing values (with a Mann-Whitney test to decide how to impute *Gender*), outliers with Z-score and IQR, winsorisation, and grouping 129 job titles into 9 categories
- **Linear regression** to predict salary, with a full check of the regression assumptions (linearity, homoscedasticity, normality, independence and multicollinearity), 10-fold cross-validation, forward feature selection and principal component regression
- **Logistic regression** to predict gender, with factor analysis (Kaiser criterion, varimax rotation, communalities) and LASSO regularisation, evaluated with a confusion matrix and ROC curve
- **Hierarchical clustering** with Ward and Complete linkage to identify employee profiles

## Key findings

- Years of experience is the strongest driver of salary. The linear model explains 75% of the variation in salary, with the same R² on the test set.
- Checking the assumptions showed that salary does not grow linearly with experience: each extra year adds less than the one before. Adding a squared experience term fixed the linearity problem (Ramsey RESET p = 0.40) and raised test R² from 0.754 to 0.785.
- The residual variance is not constant (Breusch-Pagan p < 0.001): junior salaries are very similar, senior salaries vary much more. With heteroscedasticity-robust (HC3) standard errors, the HR and Marketing & Sales categories turn out to pay significantly less, which the classical standard errors missed.
- Forward selection keeps the same predictive power with 18 of the 26 variables. Principal component regression removes multicollinearity but explains less (R² 0.71) and loses interpretability.
- Gender is hard to predict from the other variables (accuracy 62%, pseudo-R² 0.07). The model finds 80% of men but only 40% of women.
- Both clustering methods find three profiles: junior employees with little experience and low salaries, mid-career employees, and senior employees with the highest salaries.

## Contents

| File | What it is |
| --- | --- |
| `mineria_datos_salarios.ipynb` | Notebook with code, charts and interpretation (in Spanish) |
| `datos/Salary_MD.csv` | Dataset with missing values and outliers, used for the regression and classification models |
| `datos/Salary.csv` | Clean version of the same dataset, used for clustering |
| `requirements.txt` | Python packages needed to run the notebook |

To run it, install the requirements and open the notebook from this folder:

```
pip install -r requirements.txt
jupyter notebook mineria_datos_salarios.ipynb
```

---
Lama Jaber · Minería de Datos, Master's in Data Science, Big Data & Business Analytics, UCM
