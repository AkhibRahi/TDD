const add = require("./calculator");

try {
  console.log(add("")); 
  console.log(add("1")); 
  console.log(add("1,5")); 
  console.log(add("1\n2,3")); 
  console.log(add("//;\n1;2")); 
  console.log(add("//|\n1|2|3")); 
} catch (e) {
  console.error(e.message); 
}
