export default class {
  name = "Base";
  goods = [];
  bads = [];

  constructor(modalidade) {
    this.goods = this.getGoods(modalidade);
    this.bads = this.getBads(modalidade);
  }

  getGoods(modalidade) {
    return [];
  }

  getBads(modalidade) {
    return [];
  }

  static async all(modalidade) {
    return [
      await import("./RepeatedLasts.js").then((m) => new m.default(modalidade)),
    ];
  }
}
