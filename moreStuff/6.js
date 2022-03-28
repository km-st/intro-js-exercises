let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

const allMatches = (words, regex) => {
  return words.filter((word) => regex.test(word));
};

console.log(allMatches(words, /lab/));
