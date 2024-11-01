const { Nombre, Descripcion } = require('../models'); // Importamos los modelos

// Función para obtener un nombre aleatorio directamente desde la base de datos
async function obtenerNombreAleatorio(sexoId) {
  try {
    const nombre = await Nombre.findOne({
      where: { sexoId: sexoId },
      order: [['RAND()']], // Usamos SQL para seleccionar uno aleatorio
    });
    
    if (!nombre) {
      throw new Error('No se encontraron nombres para el género de sexo seleccionado.');
    }

    return nombre.nombre; // Devolvemos el nombre encontrado
  } catch (error) {
    console.error('Error obteniendo nombre aleatorio:', error);
    throw error;
  }
}

// Función para obtener una descripción aleatoria directamente desde la base de datos
async function obtenerDescripcionAleatoria(generoLiterarioId) {
  try {
    const descripcion = await Descripcion.findOne({
      where: { generoLiterarioId: generoLiterarioId },
      order: [['RAND()']], // Usamos SQL para seleccionar una aleatoria
    });
    
    if (!descripcion) {
      throw new Error('No se encontraron descripciones para el género literario seleccionado.');
    }

    return descripcion.descripcion; // Devolvemos la descripción encontrada
  } catch (error) {
    console.error('Error obteniendo descripción aleatoria:', error);
    throw error;
  }
}

// Función principal para generar el personaje aleatorio
async function generarPersonajeAleatorio(sexoId, generoLiterarioId) {
  try {
    const nombreAleatorio = await obtenerNombreAleatorio(sexoId);
    const descripcionAleatoria = await obtenerDescripcionAleatoria(generoLiterarioId);

    return {
      nombre: nombreAleatorio,
      descripcion: descripcionAleatoria
    };
  } catch (error) {
    console.error('Error generando personaje aleatorio:', error);
    throw error;
  }
}

module.exports = {
  generarPersonajeAleatorio
};

