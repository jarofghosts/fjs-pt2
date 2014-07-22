module.exports = repeat

function repeat(operation, num) {
  operation()
  if(--num) repeat(operation, num)
}
