import XLSX from "xlsx";

export default class Base {
  id = "id";
  name = "Name";
  color = "#00FF00";
  active = false;
  rangeStart = 0;
  rangeFinal = 0;
  rangePerRow = 0;
  drawnNumbers = 6;
  selectMin = 0;
  selectMax = 0;
  tutorials = [];
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=xxx";

  tables = {};

  async getData() {
    const resp = await (await fetch(this.url)).arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(resp), { type: "array" });
    const workSheet = workbook.Sheets[workbook.SheetNames[0]];

    let data = [];
    for (let i in workSheet) {
      const [col, row] = i.split(/([A-Z]*)([0-9]*)/g).filter((v) => v);
      if (typeof data[row] == "undefined") data[row] = {};
      data[row][col] = workSheet[i]["v"];
    }
    data = data.filter((v) => v);
    data.splice(0, 1);
    return data.map(this.parseRow).map((row) => {
      row.numbers = row.numbers.map((n) => n.toString().padStart(2, "0"));
      return row;
    });
  }

  parseRow(row) {
    return {
      number: row["A"],
      date: row["B"].split("/").reverse().join("-"),
      numbers: [],
    };
  }

  getTables() {
    return {};
  }

  chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }
}
