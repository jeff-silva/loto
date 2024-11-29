import Base from "./Base.js";

export default class extends Base {
  id = "mega-sena";
  name = "Mega-Sena";
  rangeStart = 1;
  rangeFinal = 60;
  rangePerRow = 10;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=mega-sena";

  parseRow(row) {
    return {
      contest: row["A"],
      date: row["B"].split("/").reverse().join("-"),
      numbers: [row["C"], row["D"], row["E"], row["F"], row["G"], row["H"]],
    };
  }
}
