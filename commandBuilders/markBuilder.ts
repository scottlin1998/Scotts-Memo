import { YargsInstance } from "https://deno.land/x/yargs@v17.1.1-deno/build/lib/yargs-factory.js";
export default function (yargs: YargsInstance) {
  yargs
    .option("easy", {
      alias: "e",
      describe: "Mark the file as easy",
    })
    .option("hard", {
      alias: "h",
      describe: "Mark the file as hard",
    })
    .option("done", {
      alias: "d",
      describe: "Mark the file as done",
    })
    .option("circle", {
      alias: "c",
      type: "number",
      requiresArg: true,
      describe: "Specify a circle",
    })
    .option("date", {
      alias: "D",
      type: "string",
      requiresArg: true,
      describe: "Specify a date",
    });
  return yargs.positional("file", {
    describe: "A specified file path",
  });
}
