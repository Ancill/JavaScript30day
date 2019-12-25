// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteens = inventors.filter(inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) return true;
});
console.log(fifteens);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const firstAndLast = inventors.map(
  inventor => (name = `${inventor.first} ${inventor.last}`)
);
console.log(firstAndLast);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => a.year - b.year);
console.log(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const livedAll = inventors.reduce((acc, item, index) => {
  let age = item.passed - item.year;
  return acc + age;
}, 0);
console.log(livedAll);

// 5. Sort the inventors by years lived
const sortedAge = inventors.sort((a, b) => {
  const lastguy = a.passed - a.year;
  const nextguy = b.passed - b.year;
  return lastguy > nextguy ? -1 : 1;
});
console.log("Sort the inventors by years lived:");
console.log(sortedAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")]; // if array.from()
// const de = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [lastA, firstA] = lastOne.split(", "); //destructoring
  const [lastB, firstB] = nextOne.split(", "); //destructoring
  return lastA > lastB ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0; // so if it's not exist we create a new one key with value 0
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
