const ora = require("ora");
// import ora from "ora";
const getWeather = require("../utils/weather");

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`Current conditions in ${location}:`);
    console.log(`\t${weather.temp}° ${weather.conditions}`);
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
