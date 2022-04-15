const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (!error) return console.log(desc);
  console.error("Error fetch details:", error);
});