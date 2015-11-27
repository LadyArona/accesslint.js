import { axe } from "axe-core/axe.min.js";
import logger from "./logger.js";

export default function () {
  window.axe.a11yCheck(document, {}, (results) => {
    logger(results);
  });
}