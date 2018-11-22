
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
};

// Two Sum
Array.prototype.twoSum = function() {
  let result = [];
  let i;
  for (i = 0; i < this.length - 1; i++) {
    let j;
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {

        let pair = [i,j];
        result.push(pair);
      }
    }
  }
  return result;
};

// // Transpose
// Array.prototype.myTranspose = function() {
//   // debugger;
//   let n;
//   let result = new Array(this[0].length);
//   for (n = 0; n < this.length; n++) {
//     result.push(new Array(this.length).fill(null));
//   }
//   let i;
//   for (i = 0; i < this.length; i++) {
//     let j;
//     for (j = 0; j < this[0].length; j++) {
//       result[i][j] = this[j][i];
//     }
//   }
//   return result;
// };
// [[1,2,3],[4,5,6]].myTranspose();


Array.prototype.myTranspose = function() {
  let result = new Array(this[0].length).fill([]);
  let row;
  for (row = 0; row < this.length; row++) {
    let col;
    for (col = 0; col < this[0].length; col++) {
      debugger;
      result[col].push(this[col][row]);
    }
  }
  return result;
};
