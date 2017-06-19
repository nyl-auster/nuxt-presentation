export default {
  findAll () {
    return require('../presentations')
  },
  findOne (index) {
    return this.findAll()[index]
  }
}
