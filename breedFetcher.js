const request = require('./node_modules/request');
const api = 'https://api.thecatapi.com/v1/';

const parseData = data => {
  if (data === "[]") return console.log("-breed not found-");
  const parsed = JSON.parse(data);
  console.log(`Results:\n${parsed[0].description}`);
};

const getCat = (url, breed) => {
  url += breed ? `breeds/search?q=${breed}` : "images/search";
  request(url, (error, response, body) => {
    if (!error) return parseData(body);
    console.log('statusCode:', response && response.statusCode);
    console.error("Error:", error);
  });
};

getCat(api, "siberian");