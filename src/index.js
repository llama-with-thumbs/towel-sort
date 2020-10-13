
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) return []
  let arr = []
  let subArr = []
  for (let i = 0; i < matrix.length; i++) {
    subArr = []
    for (let j = matrix[i].length - 1; j >= 0; j--){
      subArr.push(matrix[i][j])
    }

    i % 2 ? arr.push(subArr) : arr.push(matrix[i])
  }
  return arr.flat();
}