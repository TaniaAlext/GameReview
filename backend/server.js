const cors = require('cors');
const express = require('express');
const app = express();


// Middleware para manejar JSON y permitir CORS
app.use(express.json());
app.use(cors());

// Importa la conexión a la base de datos
const connection = require('./db');

// Ruta de prueba para verificar si el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor backend está funcionando correctamente');
});

// Ruta para insertar un nuevo administrador
app.post('/admins', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nombre de usuario y contraseña son requeridos' });
  }

  const sql = 'INSERT INTO admins (username, password) VALUES (?, ?)';
  connection.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error al insertar administrador:', err);
      return res.status(500).send('Error al insertar administrador');
    }
    res.json({ message: 'Administrador creado exitosamente', adminId: result.insertId });
  });
});


// Ruta de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nombre de usuario y contraseña son requeridos' });
  }

  const sql = 'SELECT * FROM admins WHERE username = ? AND password = ?';
  connection.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error al buscar el usuario:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length === 0) {
      return res.json({ success: false, message: 'Credenciales incorrectas' });
    }

    return res.json({ success: true, redirect: '/admin-dashboar' });
  });
});



// Configuración del puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
