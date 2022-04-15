const request = require('./node_modules/request');
const api = 'https://api.thecatapi.com/v1/images/';

const parseData = data => {
  const parsed = JSON.parse(data);
  console.log(parsed);
}

const getCat = (url, breed) => {
  url += breed ? `?q=${breed}` : "";
  request(url, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);
    if (error) return console.error("Error:", error);
    parseData(body);
  });
};

getCat(api, "sib");