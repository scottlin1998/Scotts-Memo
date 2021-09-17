import { join } from "https://deno.land/std@0.107.0/path/mod.ts";
const ROOT_PATH = "@";
const EASY_PATH = join(ROOT_PATH, "EASY");
const HARD_PATH = join(ROOT_PATH, "HARD");
const DONE_PATH = join(ROOT_PATH, "DONE");
const CONF_PATH = join(ROOT_PATH, "conf.yaml");
const DATA_PATH = join(ROOT_PATH, "data.db");
export default {
  ROOT_PATH,
  EASY_PATH,
  HARD_PATH,
  DONE_PATH,
  CONF_PATH,
  DATA_PATH,
};
export { CONF_PATH, DATA_PATH, DONE_PATH, EASY_PATH, HARD_PATH, ROOT_PATH };
