import yargs from "https://deno.land/x/yargs/deno.ts";
import initHandler from "./commandHandlers/initHandler.ts";
import runHandler from "./commandHandlers/runHandler.ts";
import watchHanler from "./commandHandlers/watchHandler.ts";
import statusHandler from "./commandHandlers/statusHandler.ts";
import markHandler from "./commandHandlers/markHandler.ts";
import initBuilder from "./commandBuilders/initBuilder.ts";
import runBuilder from "./commandBuilders/runBuilder.ts";
import watchBuilder from "./commandBuilders/watchBuilder.ts";
import statusBuilder from "./commandBuilders/statusBuilder.ts";
import markBuilder from "./commandBuilders/markBuilder.ts";
yargs(Deno.args)
  .usage("Usage: $0 <cmd> [options]") // usage string of application.
  // 初始化指令
  .command(
    "init [directory]",
    "Initialize Scott's Memo in a given directory",
    initBuilder,
    initHandler,
  )
  // 运行指令
  .command(
    "run [directory]",
    "Run to commit new changes in a given directory",
    runBuilder,
    runHandler,
  )
  .command(
    "watch [directory]",
    "Watch changes and commit in real-time in a given directory",
    watchBuilder,
    watchHanler,
  )
  // 未来添加 服务器模式
  // .command("serve","Create a web serve allows you to modify things on pages")
  .command(
    "status <file>",
    "Display the status of a given file",
    statusBuilder,
    statusHandler,
  )
  // 标记指令
  .commands(
    "mark <file>",
    "Mark the status of the current review cycle of the file",
    markBuilder,
    markHandler,
  )
  .strictCommands()
  .demandCommand(1)
  // @ts-ignore arguments
  .argv;
