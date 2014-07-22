module.exports = count

function count(strings) {
  return strings.reduce(function(obj, str) {
    obj[str] = obj[str] || 0
    ++obj[str]

    return obj
  }, {})
}
