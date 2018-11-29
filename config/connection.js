var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'wilkinson',
        database: 'burgers_db'
    });
};

// connection.connect(function(err){
//     if(err)throw err;
//     console.log("connected as id: "+ connection.threadId);
// });

connection.connect();
module.exports = connection;