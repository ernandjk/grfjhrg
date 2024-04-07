// Objeto para almacenar datos de usuario y progreso del juego
var usuarios = {};

// Función para crear una nueva cuenta de usuario
function crearCuenta(nombreUsuario, contraseña) {
  // Verificar si el nombre de usuario ya existe
  if (usuarios.hasOwnProperty(nombreUsuario)) {
    return false; // Nombre de usuario ya existe
  } else {
    // Crear nueva cuenta de usuario con progreso de juego vacío
    usuarios[nombreUsuario] = {
      contraseña: contraseña,
      progresoJuego: {}
    };
    return true; // Cuenta creada exitosamente
  }
}

// Función para iniciar sesión
function iniciarSesion(nombreUsuario, contraseña) {
  // Verificar si el nombre de usuario existe y la contraseña es correcta
  if (usuarios.hasOwnProperty(nombreUsuario) && usuarios[nombreUsuario].contraseña === contraseña) {
    return true; // Inicio de sesión exitoso
  } else {
    return false; // Nombre de usuario o contraseña incorrectos
  }
}

// Función para guardar el progreso del juego para un usuario autenticado
function guardarProgresoJuego(nombreUsuario, progresoJuego) {
  // Verificar si el usuario está autenticado
  if (usuarios.hasOwnProperty(nombreUsuario)) {
    // Guardar el progreso del juego asociado al usuario
    usuarios[nombreUsuario].progresoJuego = progresoJuego;
    return true; // Progreso del juego guardado exitosamente
  } else {
    return false; // Usuario no autenticado
  }
}

// Función para cargar el progreso del juego para un usuario autenticado
function cargarProgresoJuego(nombreUsuario) {
  // Verificar si el usuario está autenticado
  if (usuarios.hasOwnProperty(nombreUsuario)) {
    // Devolver el progreso del juego asociado al usuario
    return usuarios[nombreUsuario].progresoJuego;
  } else {
    return null; // Usuario no autenticado
  }
}

// Ejemplo de uso
crearCuenta('usuario1', 'contraseña1');
iniciarSesion('usuario1', 'contraseña1');
guardarProgresoJuego('usuario1', {nivel: 5, puntuacion: 1000});
var progresoUsuario1 = cargarProgresoJuego('usuario1');
console.log(progresoUsuario1); // Mostrará el progreso del juego asociado al usuario1
