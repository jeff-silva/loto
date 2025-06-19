import Base from "./Base.js";

export default class extends Base {
  id = "dia-de-sorte";
  name = "Dia de Sorte";
  color = "#cb852b";
  active = true;
  rangeStart = 1;
  rangeFinal = 60;
  rangePerRow = 10;
  drawnNumbers = 7;
  selectMin = 7;
  selectMax = 15;
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=dia-de-sorte";
  tutorials = ["k9IJ_Vh9gHQ"];

  tables = {
    main: {
      name: "Principal",
      data: [
        ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
        ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
        ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
        ["41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],
        ["51", "52", "53", "54", "55", "56", "57", "58", "59", "60"],
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
      ],
    };
  }
}
