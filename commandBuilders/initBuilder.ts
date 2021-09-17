import { YargsInstance } from "https://deno.land/x/yargs@v17.1.1-deno/build/lib/yargs-factory.js";
export default function (yargs: YargsInstance) {
  // 示例
  yargs.example("$0 init", "Initialize in current directory")
    .example(
      "$0 init C:\\Users\\Scott Lin\\Desktop\\My Notes",
      "Initialize in C:\\Users\\Scott Lin\\Desktop\\My Notes",
    );
  // 参数说明
  return yargs.positional("directory", {
    describe: "A specified directory path",
    default: "./",
  });
}
