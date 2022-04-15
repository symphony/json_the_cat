const { getCat } = require('./breed-fetcher');
const breed = process.argv[2];

const printDescription = data => {
  if (data === "[]") return console.log("-breed not found-");
  const parsed = JSON.parse(data);
  console.log(`Results:\n${parsed[0].description}`);
};

getCat(breed, (error, result) => {
  if (!error) return printDescription(result);
  console.error("Error fetch details:", error);
});