
//My Uniq
Array.prototype.uniq = function()  {
  let result = [];
  let i;
  for(i = 0; i < this.length; i++) {
    if (result.includes(this[i]) === false) {
      result.push(this[i]);
    }
  }
  return result;
}


Array.prototype.twoSum = function() {
  let result = [];
  let i;
  for (i = 0; i < this.length - 1; i++) {
    let j;
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        console.log(`i = ${i}`);
        console.log(`j = ${j}`);
        let pair = [i,j];
        console.log(`pair = ${pair}`);
        result.push(pair);
      }
    }
  }
  return result;
}
// Two Sum
