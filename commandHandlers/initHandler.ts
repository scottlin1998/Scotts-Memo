import { ensureDirSync } from "https://deno.land/std@0.107.0/fs/mod.ts";
import {
  DONE_PATH,
  EASY_PATH,
  HARD_PATH,
  ROOT_PATH,
} from "../utils/constants.ts";
type InitStdin = {
  _: ["init"];
  directory: string;
  $0: string;
};
export default function ({ _, directory, $0 }: InitStdin) {
  // Todo
  ensureDirSync(DONE_PATH);
  ensureDirSync(EASY_PATH);
  ensureDirSync(HARD_PATH);
  ensureDirSync(ROOT_PATH);
}
