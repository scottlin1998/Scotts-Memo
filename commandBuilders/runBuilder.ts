import { YargsInstance } from "https://deno.land/x/yargs@v17.1.1-deno/build/lib/yargs-factory.js";
export default function (yargs: YargsInstance) {
  // 示例
  yargs.example("$0 run", "Initialize in current directory")
    .example(
      "$0 run C:\\Users\\Scott Lin\\Desktop\\My Notes",
      "Run in C:\\Users\\Scott Lin\\Desktop\\My Notes",
    );
  // 参数说明
  return yargs.positional("directory", {
    describe: "A specified directory path",
    default: "./",
  });
}
