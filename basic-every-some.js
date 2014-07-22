module.exports = validation

function validation(goods) {
  return function(users) {
    return users.every(function(user) {
      return goods.some(function(good) {
        return user.id === good.id
      })
    })
  }
}
