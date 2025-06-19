import Base from "./Base.js";

export default class extends Base {
  id = "milionaria";
  name = "+Milionária";
  color = "#00FF00";
  active = false;
  color = "#2e3078";
  rangeStart = 1;
  rangeFinal = 25;
  rangePerRow = 5;
  drawnNumbers = 6;
  selectMin = 6;
  selectMax = 6;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=milionaria";
  tutorials = ["mUdsIkRCqhM"];

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
        row["J"],
      ],
    };
  }
}
