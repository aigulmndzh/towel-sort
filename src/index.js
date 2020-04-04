module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 === 1){
      matrix[i].reverse();
    }
  }
  let arr = (arr, subArray) => arr.concat(subArray);
  return matrix.reduce(arr, []);
}
