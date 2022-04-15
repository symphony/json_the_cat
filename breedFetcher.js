const request = require('./node_modules/request');
const breed = process.argv[2];
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

const parseData = data => {
  if (data === "[]") return console.log("-breed not found-");
  const parsed = JSON.parse(data);
  console.log(`Results:\n${parsed[0].description}`);
};

const getCat = (breed, callback) => {
  request(api + breed, (error, response, body) => {
    if (!error) return callback(body);
    console.log('statusCode:', response && response.statusCode);
    console.error("Error:", error);
  });
};

getCat(breed, parseData);

module.exports = { getCat };