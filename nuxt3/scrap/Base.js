import XLSX from "xlsx";

export default class Base {
  id = "id";
  name = "Name";
  url =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/resultados/download?modalidade=xxx";

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
    return data.map(this.parseRow);
  }

  parseRow(row) {
    return {
      number: row["A"],
      date: row["B"].split("/").reverse().join("-"),
      numbers: [],
    };
  }
}