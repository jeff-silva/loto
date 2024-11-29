import path from "path";
import fs from "fs";

import DiaDeSorte from "./DiaDeSorte.js";
import DuplaSena from "./DuplaSena.js";
import Lotofacil from "./Lotofacil.js";
import MegaSena from "./MegaSena.js";
import Milionaria from "./Milionaria.js";
import Quina from "./Quina.js";
import SuperSete from "./SuperSete.js";

const items = [
  DiaDeSorte,
  DuplaSena,
  Lotofacil,
  MegaSena,
  Milionaria,
  Quina,
  SuperSete,
];

(async () => {
  let indexData = {};

  await Promise.all(
    items.map(async (className) => {
      className = new className();
      let item = {
        id: className.id,
        name: className.name,
        rangeStart: className.rangeStart,
        rangeFinal: className.rangeFinal,
        rangePerRow: className.rangePerRow,
        contests: [],
      };

      item.contests = await className.getData();
      indexData[item.id] = item;
    })
  );

  fs.writeFileSync(`./nuxt3/contests.json`, JSON.stringify(indexData));
})();
