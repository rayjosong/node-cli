require("dotenv").config();
const axios = require("axios");

module.exports = async (location) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const api_key = process.env.WEATHER_API_KEY;
  const date = new Date(Date.now()).toISOString();

  const results = await axios({
    method: "get",
    url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=${api_key}`,
    params: {
      format: "json",
      q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}")`,
    },
  });

  // console.log(results.data.days[0]);
  return results.data.days[0];
};
