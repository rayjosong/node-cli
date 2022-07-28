const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0];

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  console.log(args);

  switch (cmd) {
    case "today":
      require("./cmds/today")(args);
      break;
    case "help":
      require("./cmds/help")(args);
      break;
    case "weather":
      require("./utils/weather")(args);
      break;
    case "forecast":
      require("./cmds/forecast")(args);
      break;
    case "version":
      require("./cmds/version")(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
