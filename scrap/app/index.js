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
      if (!className.active) return;
      console.log(`Baixando resultados de ${className.name}`);

      let item = JSON.parse(JSON.stringify(className));

      item.tutorials = await Promise.all(
        className.tutorials.map(async (videoId) => {
          let video = await (
            await fetch(
              `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${videoId}&format=json`
            )
          ).json();
          return {
            id: videoId,
            title: video.title,
            thumbnail_url: video.thumbnail_url,
            embed_url: `https://www.youtube.com/embed/${videoId}`,
          };
        })
      );

      item.contests = await className.getData();
      indexData[item.id] = item;
    })
  );

  fs.writeFileSync(`./contests.json`, JSON.stringify(indexData));
})();
