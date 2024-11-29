export default class {
  name = "";
  goods = [];
  bads = [];
  data = [];

  constructor(data) {
    this.data = data;
  }

  static async all(data) {
    return [
      await import("./RepeatedLasts.js").then((m) => new m.default(data)),
    ];
  }
}
