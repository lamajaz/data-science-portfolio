# Predicting broken water pumps in Tanzania

**Pump it Up: Data Mining the Water Table**

A machine learning model that predicts whether a water point in Tanzania is functional, needs repair or is not functional, built for the [DrivenData Pump it Up competition](https://www.drivendata.org/competitions/7/pump-it-up-data-mining-the-water-table/). Knowing which pumps are likely to fail helps prioritise maintenance and keep communities' access to clean water.

## Key findings

- The final Random Forest reaches **81.7% accuracy** on validation, against 54.3% for always predicting the majority class.
- Seven models were compared with 5-fold cross-validation. Tree ensembles (Random Forest, Extra Trees, Gradient Boosting) clearly beat logistic regression and a single decision tree.
- **Water quantity** is the strongest signal: 96.9% of dry water points are not functional.
- **Location** matters: non-functional pumps range from 19.5% in Iringa to 64.2% in Lindi.
- **Age** matters: 63% of pumps built in the 1960s are not functional, against 22% of those built since 2010.
- Class weighting raises the recall of "functional needs repair" pumps from 0.30 to 0.47, at the cost of about 1.4 points of accuracy. That trade-off is worth it if the goal is sending repair teams before a pump breaks.

## Contents

| File | What it is |
| --- | --- |
| `bombas_agua_tanzania.ipynb` | Full analysis (in Spanish): exploration, cleaning, model comparison, tuning, evaluation and conclusions |
| `datos/` | Where to put the competition data (not included, see below) |
| `requirements.txt` | Python packages needed |

## Data

The data comes from Taarifa and the Tanzanian Ministry of Water through DrivenData. The competition rules do not allow redistributing it, so it is **not included** here. To run the notebook, sign up for the competition, download the three CSV files from the Data tab and save them in `datos/` (see [`datos/LEEME.md`](datos/LEEME.md)).

## How to run it

```bash
pip install -r requirements.txt
jupyter notebook bombas_agua_tanzania.ipynb
```

## License

The code is released under the [MIT License](LICENSE), as the competition rules require for publicly shared code.

---
Lama Jaber · Machine Learning, Master's in Data Science, Big Data & Business Analytics, UCM
