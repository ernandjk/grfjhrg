// Ruta para manejar el código de inserción de juegos
app.post('/embed', (req, res) => {
    const embedCode = req.body.embedCode;
  
    // Aquí puedes realizar la lógica para manejar el código de inserción, por ejemplo, guardar en una base de datos
  
    // Envía una respuesta al cliente (simulada)
    res.send('El juego ha sido insertado correctamente');
  });
  