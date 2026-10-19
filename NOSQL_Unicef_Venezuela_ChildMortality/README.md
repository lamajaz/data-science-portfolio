# Child and perinatal mortality in Venezuela with MongoDB

**Análisis de Indicadores de Mortalidad Infantil y Perinatal en Venezuela utilizando MongoDB**

An analysis of UNICEF / UN IGME child mortality data for Venezuela, stored and queried in MongoDB: neonatal mortality (MRM0), infant mortality (MRY0) and stillbirth rate (SBR).

## Key findings

- Vital registration data show the stillbirth rate falling steadily from about 8 to just over 2 per 1,000 births between 2000 and 2012.
- UN IGME estimates show the stillbirth rate falling until 2012 and then rising again through 2023.
- Neonatal mortality was stable at around 10–11 per 1,000 live births from 2000 to 2014, then jumped in 2015 to above 14 and stayed high.
- Most infant deaths in recent years happen in the neonatal period, which points to the importance of care during pregnancy, birth and the first weeks of life.

These changes coincide with Venezuela's economic and health system crisis from the mid-2010s; the analysis describes trends and does not test causes.

## Contents

| File | What it is |
| --- | --- |
| `informe.pdf` | Full report with queries, results and charts (in Spanish) |
| `queries.js` | All MongoDB operations from the report: CRUD and five aggregation pipelines |
| `graficos.xlsx` | The charts in the report and the data behind them |
| `datos/` | Venezuela rows of the UNICEF child mortality and stillbirth datasets |

## Data

Source: [UNICEF Data Warehouse](https://data.unicef.org/), child mortality estimates from the UN Inter-agency Group for Child Mortality Estimation ([UN IGME](https://childmortality.org/)). The original downloads contain every country (about 65 MB); `datos/` keeps only the Venezuela rows (`REF_AREA = VEN`), which is what the analysis uses.

## How to run it

```bash
mongoimport --db unicef --collection "Child Mortality" --type csv --headerline --file datos/venezuela_mortalidad_infantil.csv
mongoimport --db unicef --collection "Child Mortality" --type csv --headerline --file datos/venezuela_mortinatos.csv
mongosh unicef queries.js
```

`queries.js` first renames the UNICEF columns to the field names used in the report (`Indicator_code`, `Indicator_name`, `Country`), then runs the operations in order.

---
Lama Jaber · Bases de Datos NoSQL (professor: Álvaro Bravo), Master's in Data Science, Big Data & Business Analytics, UCM
