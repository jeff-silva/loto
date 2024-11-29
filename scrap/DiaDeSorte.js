import Base from "./Base.js";

export default class extends Base {
  id = "dia-de-sorte";
  name = "Dia de Sorte";
  rangeStart = 1;
  rangeFinal = 60;
  rangePerRow = 10;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=dia-de-sorte";

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