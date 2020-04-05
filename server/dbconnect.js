// // db연결
module.exports=function(){

    const mysql = require('mysql');
    const dbConfig = {
        user: 'root',
        port: 3306,
        password: 'babmukda2020',
        database: 'babmukda'
    }
    const conn = mysql.createConnection(dbConfig);
return conn;
}

