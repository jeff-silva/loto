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
        ["61", "62", "63", "64", "65", "66", "67", "68", "69", "70"],
        ["71", "72", "73", "74", "75", "76", "77", "78", "79", "80"],
      ],
    },
  };

  parseRow(row) {
    return {
      contest: row["A"],
      date: row["B"].split("/").reverse().join("-"),
      numbers: [row["C"], row["D"], row["E"], row["F"], row["G"], row["H"]],
    };
  }
}
