module.exports = arrayMap

function arrayMap(arr, fn) {
  return arr.reduce(function(a, x) {
    return a.concat(fn(x))
  }, [])
}
