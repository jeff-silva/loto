import Base from "./Base.js";

export default class extends Base {
  id = "quina";
  name = "Quina";
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=quina";

  parseRow(row) {
    return {
      contest: row["A"],
      date: row["B"].split("/").reverse().join("-"),
      numbers: [row["C"], row["D"], row["E"], row["F"], row["G"], row["H"]],
    };
  }
}
