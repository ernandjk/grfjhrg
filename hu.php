<?php
// Verificar que se hayan enviado los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario de registro
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    // Hash de la contraseña antes de almacenarla en la base de datos (para mayor seguridad)
    $contrasenaHash = password_hash($contrasena, PASSWORD_DEFAULT);

    // Crear la consulta de inserción
    $sql = "INSERT INTO jugadores (nombre, correo, contrasena) VALUES (?,?,?)";

    // Preparar la consulta
    $stmt = $conn->prepare($sql);

    // Verificar que la consulta se haya preparado correctamente
    if ($stmt === false) {
        echo "Error al preparar la consulta: ". $conn->error;
        exit;
    }

    // Enlazar los parámetros a la consulta
    $stmt->bind_param("sss", $nombre, $correo, $contrasenaHash);

    // Ejecutar la consulta
    if ($stmt->execute() === true) {
        echo "Nuevo jugador registrado exitosamente";
    } else {
        echo "Error al registrar al jugador: ". $stmt->error;
    }

    // Cerrar la consulta
    $stmt->close();
}

// Cerrar la conexión a la base de datos
$conn->close();
?>