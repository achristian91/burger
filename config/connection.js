var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'shernette',
        database: 'burgers_db'
    });
};

connection.connect();
module.exports = connection;