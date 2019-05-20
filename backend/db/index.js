const mysql = require('mysql')

const sqls = `
CREATE TABLE   IF NOT EXISTS  \`user_info\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`email\` varchar(255) DEFAULT NULL,
  \`password\` varchar(255) DEFAULT NULL,
  \`name\` varchar(255) DEFAULT NULL,
  \`nick\` varchar(255) DEFAULT NULL,
  \`detail_info\` longtext DEFAULT NULL,
  \`create_time\` varchar(20) DEFAULT NULL,
  \`modified_time\` varchar(20) DEFAULT NULL,
  \`level\` int(11) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO \`user_info\` set name='admin001', email='admin001@example.com', password='123456';
`
const sqlArr = sqls.trim().split(';').filter(sql => sql).map(sql => sql+';');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '13033872249',
  database: 'koa_login',
})


function query(sql) {
  return new Promise(function (resolve,reject) {
    connection.query(sql,function (err,result,field) {
      if(err){
        reject(err);
      }
      resolve(result);
      console.log(result);
    })
  })
}

async function excuteSqls(){
  try {
    for(let sql of sqlArr){
      await query(sql)
    }
    connection.end()
  } catch (error) {
    connection.end()
    throw error
  }
}

exports.excuteSqls = excuteSqls;