module.exports = spy

function spy(obj, method) {
  var self = this
    , original

  self.count = 0

  original = obj[method]

  obj[method] = function() {
    self.count++

    return original.apply(obj, arguments)
  }

  return self
}
