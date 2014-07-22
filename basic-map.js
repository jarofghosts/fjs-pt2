module.exports = double

function double(numbers) {
  return numbers.map(function(x) {
    return x * 2
  })
}
