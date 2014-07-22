module.exports = shorts

function shorts(xs) {
  return xs.map(function(x) {
    return x.message
  }).filter(function(x) {
    return x.length < 50
  })
}
