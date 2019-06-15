const dbUtil = require('../utils/db-util')
const userTable = 'user_info'

const user = {
  async create(model) {
    const res = await dbUtil.insertData(userTable,model)
    return res
  },
  async getExsistOne({phone,name}) {
    console.log(name);
    const sql = `
      select * from user_info where name="${name}" limit 1;
    `
    let result = await dbUtil.query(sql,[]);
    if(Array.isArray(result) && result.length){
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  async getOneByNameAndPassword({name,password}){
    const sql = `select * from user_info where name="${name}" and password="${password}" limit 1;`
    let result = await dbUtil.query(sql,[]);
    // console.log(result,'res');
    if(Array.isArray(result) && result.length){
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  async getUserInfo({id}){
    const sql = `select * from user_info where id="${id}" limit 1;`
    let result = await dbUtil.query(sql,[]);
    // console.log(result,'res');
    if(Array.isArray(result) && result.length){
      result = result[0]
    } else {
      result = null
    }
    return result
  },
}

module.exports = user