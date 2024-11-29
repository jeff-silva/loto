import Base from "./Base.js";

export default class extends Base {
  id = "lotofacil";
  name = "Lotofácil";
  color = "#930089";
  active = true;
  rangeStart = 1;
  rangeFinal = 25;
  rangePerRow = 5;
  drawnNumbers = 15;
  selectMin = 15;
  selectMax = 20;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=lotofacil";
  tutorials = ["BS26FRQdAJw"];

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
      ],
    };
  }
}
