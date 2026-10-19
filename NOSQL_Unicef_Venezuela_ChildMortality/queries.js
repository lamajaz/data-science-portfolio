// Análisis de Indicadores de Mortalidad Infantil y Perinatal en Venezuela utilizando MongoDB
// Lama Jaber · Bases de Datos NoSQL (profesor: Álvaro Bravo), UCM
// Uso: mongosh unicef queries.js  (tras importar datos/ con mongoimport, ver README)

const col = db.getCollection("Child Mortality");

// 0. Preparación: nombres de campo usados en el informe
col.updateMany({}, { $rename: { INDICATOR: "Indicator_code", Indicator: "Indicator_name", "Geographic area": "Country" } });
col.updateMany({ OBS_VALUE: { $type: "string" } }, [{ $set: { OBS_VALUE: { $toDouble: "$OBS_VALUE" } } }]);

// 1. Verificación de la carga
printjson(col.find().limit(10).toArray());
printjson(col.find({}).sort({ _id: -1 }).limit(10).toArray());

// 3.1 CREATE: registro adicional de SBR para Venezuela
col.insertOne({
  REF_AREA: "VEN",
  Country: "Venezuela (Bolivarian Republic of)",
  Indicator_code: "SBR",
  Indicator_name: "Stillbirth rate",
  SEX: "_T",
  Sex: "Total",
  WEALTH_QUINTILE: "_T",
  "Wealth Quintile": "Total",
  SERIES_NAME: "Vital Registration 2015 (VR) Any/Not Defined",
  "Series Name": "Vital Registration 2015 (VR) Any/Not Defined",
  SERIES_YEAR: "2015",
  "Series Year": "2015",
  TIME_PERIOD: "2000-06",
  OBS_VALUE: 8.094495957,
  OBS_STATUS: "EX",
  "Observation Status": "Excluded from IGME",
  UNIT_MEASURE: "SB_PER_1000_B",
  "Unit of measure": "Stillbirths per 1,000 total births",
  SERIES_CATEGORY: "VR",
  "Series Category": "VR",
  SERIES_TYPE: "VR",
  "Series Type": "VR",
  STD_ERR: 0.120278679130981,
  REF_DATE: 2000.5,
  SERIES_METHOD: "Any/Not Defined",
  "Series Method": "Vital Registration",
  source_type: "VR"
});

// 3.2 READ con filtrado
printjson(col.find({ Indicator_code: "SBR" }).toArray());

// 3.3 READ con proyección
printjson(col.find({ Indicator_code: "SBR" }, { _id: 0, TIME_PERIOD: 1, OBS_VALUE: 1 }).toArray());

// 3.4 UPDATE
printjson(col.updateOne({ Indicator_code: "SBR", TIME_PERIOD: "2000-06" }, { $set: { OBS_VALUE: 8.20 } }));

// 3.5 DELETE
printjson(col.deleteOne({ Indicator_code: "SBR", TIME_PERIOD: "2000-06" }));

// 4.1 Tendencia temporal de la mortalidad neonatal (MRM0)
printjson(col.aggregate([
  { $match: { Indicator_code: "MRM0" } },
  { $sort: { TIME_PERIOD: 1 } }
]).toArray());

// 4.2 Promedio de mortalidad neonatal
printjson(col.aggregate([
  { $match: { Indicator_code: "MRM0" } },
  { $group: { _id: "avg_neonatal_mortality", avg_rate: { $avg: "$OBS_VALUE" } } }
]).toArray());

// 4.3 Comparación entre mortalidad neonatal (MRM0) e infantil (MRY0)
printjson(col.aggregate([
  { $match: { Indicator_code: { $in: ["MRM0", "MRY0"] } } },
  { $sort: { TIME_PERIOD: 1, Indicator_code: 1 } }
]).toArray());

// 4.4 Tendencia de la tasa de mortinatos (SBR)
printjson(col.aggregate([
  { $match: { Indicator_code: "SBR" } },
  { $sort: { TIME_PERIOD: 1 } }
]).toArray());

// 4.5 Variación año a año de la mortalidad neonatal
printjson(col.aggregate([
  { $match: { Indicator_code: "MRM0" } },
  { $sort: { TIME_PERIOD: 1 } },
  {
    $setWindowFields: {
      sortBy: { TIME_PERIOD: 1 },
      output: { prev_value: { $shift: { output: "$OBS_VALUE", by: -1 } } }
    }
  },
  { $project: { TIME_PERIOD: 1, OBS_VALUE: 1, cambio_anual: { $subtract: ["$OBS_VALUE", "$prev_value"] } } }
]).toArray());
