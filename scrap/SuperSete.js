import Base from "./Base.js";

export default class extends Base {
  id = "super-sete";
  name = "Super Sete";
  color = "#a8cf45";
  active = false;
  rangeStart = 1;
  rangeFinal = 60;
  rangePerRow = 10;
  drawnNumbers = 7;
  selectMin = 7;
  selectMax = 21;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=super-sete";
  tutorials = ["XQxIB8ewuxA"];

  tables = {
    col1: {
      name: "Coluna 1",
      data: [["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]],
    },
    col2: {
      name: "Coluna 2",
      data: [["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]],
    },
    col3: {
      name: "Coluna 3",
      data: [["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]],
    },
    col4: {
      name: "Coluna 4",
      data: [["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]],
    },
    col5: {
      name: "Coluna 5",
      data: [["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]],
    },
    col6: {
      name: "Coluna 6",
      data: [["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]],
    },
    col7: {
      name: "Coluna 7",
      data: [["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]],
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
      ],
    };
  }
}
