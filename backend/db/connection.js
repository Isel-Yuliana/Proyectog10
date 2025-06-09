const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // ← pon tu contraseña de MySQL si tienes, si no, déjalo vacío
  database: 'db_ventas'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión a MySQL:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

module.exports = connection;
