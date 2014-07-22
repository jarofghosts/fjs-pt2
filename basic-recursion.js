module.exports = reduce

function reduce(arr, callback, initial) {
  var idx = 0

  return reduction(initial)

  function reduction(curr) {
    if(arr.length < idx + 1) return curr

    return reduction(callback(curr, arr[idx], idx++, arr))
  }
}
