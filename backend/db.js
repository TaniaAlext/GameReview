const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rengoku20',
  database: 'videogame_reviews_db',
  port: 3306
});


// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;
