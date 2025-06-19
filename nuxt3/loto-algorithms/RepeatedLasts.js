import Base from "./Base.js";

export default class extends Base {
  name = "Números repetidos nos últimos 3 sorteios";

  getBads(modalidade) {
    const contests = modalidade.contests
      .sort((a, b) => (a.contest < b.contest ? 1 : -1))
      .slice(0, 3);

    let count = {};

    contests.map((contest) => {
      contest.numbers.map((number) => {
        if (typeof count[number] == "undefined") count[number] = 0;
        count[number]++;
      });
    });

    for (let n in count) {
      if (count[n] <= 1) {
        delete count[n];
      }
    }

    return Object.keys(count);
  }
}
