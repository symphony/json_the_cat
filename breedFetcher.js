const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breed, callback) => {
  request(api + breed, (error, response, body) => {
    if (error) return callback(error, null);
    if (body === "[]") return callback("-breed not found-", null);
    callback(error, JSON.parse(body)[0].description);
  });
};

module.exports = { fetchBreedDescription };