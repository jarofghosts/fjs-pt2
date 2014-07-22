module.exports = duck

function duck() {
  return [].slice.call(arguments).filter(hasQuack).length

  function hasQuack(obj) {
    return {}.hasOwnProperty.call(obj, 'quack')
  }
}
