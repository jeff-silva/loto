import Base from "./Base.js";

export default class extends Base {
  id = "lotomania";
  name = "Lotomania";
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=lotomania";

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
        row["K"],
        row["L"],
        row["M"],
        row["N"],
        row["O"],
        row["P"],
        row["Q"],
        row["R"],
        row["S"],
        row["T"],
        row["U"],
        row["V"],
      ],
    };
  }
}
