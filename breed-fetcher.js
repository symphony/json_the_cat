const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

const getCat = (breed, callback) => {
  request(api + breed, (error, response, body) => callback(error, body));
};

module.exports = { getCat };