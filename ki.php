<?php
// Suponiendo que ya tienes los datos de la partida y el jugador
$jugador_id = 1;
$juego_id = 123;
$puntuacion = 1000;
$nivel = 5;

// Crear la conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: ". $conn->connect_error);
}

// Preparar la consulta de inserción
$stmt = $conn->prepare("INSERT INTO partidas (jugador_id, juego_id, puntuacion, nivel) VALUES (?,?,?,?)");

// Vincular los parámetros a la consulta
$stmt->bind_param("iiii", $jugador_id, $juego_id, $puntuacion, $nivel);

// Establecer los valores de los parámetros
$jugador_id = 1;
$juego_id = 123;
$puntuacion = 1000;
$nivel = 5;

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Datos de partida guardados correctamente";
} else {
    echo "Error: ". $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>