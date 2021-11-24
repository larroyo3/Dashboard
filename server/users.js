const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'db',
     database: 'db', 
     user:'thib', 
     password: 'thib',
     connectionLimit: 5
});

exports.getUsers = async function getUsers() {
  let conn;
  try {
    // here we make a connection to MariaDB
    conn = await pool.getConnection();

    // create a new query to fetch all records from the table
    var query = "select username,password from users";

    // we run the query and set the result to a new variable
    var rows = await conn.query(query);
    rows.forEach(elems => console.log(elems));
  } catch (err) {
      throw err;
  } finally {
      if (conn) return conn.release();
  }
};
exports.createUser = async function createUser(username, password) {
  let conn;
  try {
    // here we make a connection to MariaDB
    conn = await pool.getConnection();
    // create a new query to insert record in MariaDB
    var query = "INSERT INTO `users` (username, password) VALUES ('" + username + "','" + password + "')";
    console.log(query)
    var rows = await conn.query(query);
  } catch (err) {
      console.log(err);
  } finally {
      if (conn) return conn.release();
  }
}