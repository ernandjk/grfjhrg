<?php
$jugador_id = 1;

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: ". $conn->connect_error);
}

// Consulta SQL preparada para obtener todas las partidas de un jugador
$sql = "SELECT * FROM partidas WHERE jugador_id =?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $jugador_id);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Imprimir los datos de cada partida
    while($row = $result->fetch_assoc()) {
        echo "Fecha: ". $row["fecha"]. " - Puntuación: ". $row["puntuacion"]. " - Nivel: ". $row["nivel"]. "<br>";
    }
} else {
    echo "No se encontraron partidas para este jugador";
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>