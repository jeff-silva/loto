import DiaDeSorte from "./DiaDeSorte.js";
import DuplaSena from "./DuplaSena.js";
import Lotofacil from "./Lotofacil.js";
import MegaSena from "./MegaSena.js";
import Milionaria from "./Milionaria.js";
import Quina from "./Quina.js";
import SuperSete from "./SuperSete.js";

[DiaDeSorte, DuplaSena, Lotofacil, MegaSena, Milionaria, Quina, SuperSete].map(
  async (className) => {
    className = new className();
    // const content = await className.getData();
    console.log(`${className.id}.js`);
  }
);
