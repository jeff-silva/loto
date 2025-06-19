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

  tables = {
    main: {
      name: "Principal",
      data: [
        ["01", "02", "03", "04", "05"],
        ["06", "07", "08", "09", "10"],
        ["11", "12", "13", "14", "15"],
        ["16", "17", "18", "19", "20"],
        ["21", "22", "23", "24", "25"],
      ],
    },
  };

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
