import Base from "./Base.js";

export default class extends Base {
  id = "dupla-sena";
  name = "Dupla Sena";
  color = "#a61324";
  active = false;
  rangeStart = 1;
  rangeFinal = 60;
  rangePerRow = 10;
  drawnNumbers = 12;
  selectMin = 6;
  selectMax = 15;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=dupla-sena";
  tutorials = ["6T4fyk6b3yE"];

  tables = {};

  parseRow(row) {
    return {
      contest: row["A"],
      date: row["B"].split("/").reverse().join("-"),
      numbers: [
        row["C"],
        row["D"],
        row["E"],
        row["F"],
        row["G"],
        row["H"],
        row["I"],
      ],
    };
  }
}
