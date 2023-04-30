let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
function diagonalSum(array) {
    let mainDiag = 0
    let subDiag = 0
    for (let i in array) {
        mainDiag += array[i][i]
        subDiag += array[i][array.length - (Number(i) + 1)]
    }
    return Math.abs(mainDiag - subDiag)
}
console.log(diagonalSum(arr))