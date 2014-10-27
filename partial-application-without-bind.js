module.exports = logger

function logger(namespace) {
  return function() {
    return console.log.apply(
        console
      , [namespace].concat([].slice.call(arguments))
    )
  }
}
