const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Multer para subir archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta para manejar la subida de juegos
app.post('/upload', upload.single('gameFile'), (req, res) => {
  // Aquí puedes manejar la lógica de almacenamiento de la información del juego en la base de datos
  // También puedes realizar validaciones del archivo subido antes de guardar la información

  res.send('Juego subido exitosamente');
});

// Escucha del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
// Ruta para manejar la búsqueda de juegos por nombre
app.get('/search', (req, res) => {
    const searchTerm = req.query.term.toLowerCase(); // Obtener el término de búsqueda de la consulta
  
    // Aquí puedes realizar la lógica para buscar juegos por nombre en la base de datos
    // y luego enviar los resultados como respuesta
  
    // Ejemplo de respuesta de búsqueda (simulado)
    const games = [
      { id: 1, name: 'Juego 1' },
      { id: 2, name: 'Juego 2' },
      { id: 3, name: 'Juego 3' },
    ];
  
    const results = games.filter(game => game.name.toLowerCase().includes(searchTerm));
    res.json(results);
  });
  