const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'mydb.com', 
     user:'admin', 
     password: 'adminpass',
     connectionLimit: 5
});

if(!pool){
    console.log('conección falló');

}else{
    console.log('good conección');   
}

let userModel = {};

userModel.getUsers = (callback) => {
    pool.getConnection()
    .then(conn => {

      conn.query('SELECT * FROM `users order by id`')
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
          callback(rows);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          conn.end();
        })

    }).catch(err => {
      //not connected
    });
};


module.exports = userModel;