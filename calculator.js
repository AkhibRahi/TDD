function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; 
  let match = numbers.match(/^\/\/(.+)\n/); 

  if (match) {
    delimiter = new RegExp(match[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")); 
    numbers = numbers.slice(match[0].length);
  }

  let numArray = numbers
    .split(delimiter)
    .filter((num) => num !== "") 
    .map((num) => parseInt(num, 10)); 

  let negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
