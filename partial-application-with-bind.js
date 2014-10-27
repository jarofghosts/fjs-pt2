module.exports = logger

function logger(namespace) {
  return console.log.bind(console, namespace)
}
