import { YargsInstance } from "https://deno.land/x/yargs@v17.1.1-deno/build/lib/yargs-factory.js";
export default function (yargs: YargsInstance) {
  // 示例
  yargs.example(
    "$0 status Learning Deno.txt",
    "Display the status of Learning Deno.txt in current directory",
  )
    .example(
      "$0 status C:\\Users\\Scott Lin\\Desktop\\My Notes\\Learning Deno.txt",
      "Display the status of Learning Deno.txt in C:\\Users\\Scott Lin\\Desktop\\My Notes",
    );
  // 参数说明
  return yargs.positional("file", {
    describe: "A specified file path",
  });
}
