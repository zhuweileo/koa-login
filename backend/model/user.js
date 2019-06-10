const dbUtil = require('../utils/db-util')
const userTable = 'user_info'

const user = {
  async create(model) {
    const res = await dbUtil.insertData(userTable,model)
    return res
  }
}

module.exports = user