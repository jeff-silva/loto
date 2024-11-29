import Base from "./Base.js";

export default class extends Base {
  id = "quina";
  name = "Quina";
  color = "#260085";
  active = true;
  rangeStart = 1;
  rangeFinal = 80;
  rangePerRow = 10;
  drawnNumbers = 6;
  selectMin = 5;
  selectMax = 15;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=quina";
  tutorials = ["E9b3-ZD-b9g"];

  parseRow(row) {
    return {
      contest: row["A"],
      date: row["B"].split("/").reverse().join("-"),
      numbers: [row["C"], row["D"], row["E"], row["F"], row["G"], row["H"]],
    };
  }
}
