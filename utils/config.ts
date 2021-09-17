import {
  parse,
  stringify,
} from "https://deno.land/std@0.63.0/encoding/yaml.ts";
import { ensureFileSync } from "https://deno.land/std@0.107.0/fs/ensure_file.ts";
import { CONF_PATH } from "./constants.ts";
type Config = {
  REVIEW_INTERVAL_SET?: number[];
  DELETE_INVALID_DATA?: boolean;
  DETECT_INTERVAL?: number;
};
// 文件编码处理
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();
// 保证配置文件的存在
ensureFileSync(CONF_PATH);
const parsedYamlFile = parse(decoder.decode(Deno.readFileSync(CONF_PATH)));
const config: Config =
  typeof parsedYamlFile === "object" && parsedYamlFile !== null
    ? parsedYamlFile
    : {};
// 初始化数据
if (!config.REVIEW_INTERVAL_SET) {
  config.REVIEW_INTERVAL_SET = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
}
if (!config.DELETE_INVALID_DATA) {
  config.DELETE_INVALID_DATA = true;
}
if (!config.DETECT_INTERVAL) {
  config.DETECT_INTERVAL = 10;
}
// 重写配置文件
Deno.writeFileSync(CONF_PATH, encoder.encode(stringify(config)));
export default config;
