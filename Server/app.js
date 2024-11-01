const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

// Mapeo de los valores de texto a IDs numéricos
const generoSexoMap = {
  'femenino': 1,
  'masculino': 2,
  'no binario': 3
};

const generoLiterarioMap = {
  'fantasia': 1,
  'ciencia ficción': 2,
  'historia': 3,
  'terror': 4,
  'romance': 5
};

// Ruta para generar el personaje
app.post('/generar-personaje', async (req, res) => {
  const { generoSexo, generoLiterario } = req.body;

  // Mensajes de log para verificar los valores recibidos
  console.log('Parámetros recibidos:', { generoSexo, generoLiterario });

  // Aseguramos que los parámetros sean cadenas
  if (typeof generoSexo !== 'string' || typeof generoLiterario !== 'string') {
    console.error('Parámetros inválidos: Deben ser cadenas.');
    return res.status(400).json({ error: 'Parámetros inválidos, deben ser cadenas' });
  }

  // Convertimos los valores de texto a sus respectivos IDs
  const sexoId = generoSexoMap[generoSexo.toLowerCase()];
  const generoLiterarioId = generoLiterarioMap[generoLiterario.toLowerCase()];

  // Validar si los parámetros existen en los mapeos
  if (!sexoId || !generoLiterarioId) {
    console.error('Parámetros inválidos:', { sexoId, generoLiterarioId });
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  try {
    // Consulta SQL cruda para obtener un nombre aleatorio
    const [nombreResultado] = await sequelize.query(
      'SELECT nombre FROM Nombres WHERE sexoId = :sexoId ORDER BY RAND() LIMIT 1',
      { replacements: { sexoId }, type: sequelize.QueryTypes.SELECT }
    );
    console.log('Nombre encontrado:', nombreResultado);

    // Consulta SQL cruda para obtener una descripción aleatoria
    const [descripcionResultado] = await sequelize.query(
      'SELECT descripcion FROM Descripciones WHERE generoLiterarioId = :generoLiterarioId ORDER BY RAND() LIMIT 1',
      { replacements: { generoLiterarioId }, type: sequelize.QueryTypes.SELECT }
    );
    console.log('Descripción encontrada:', descripcionResultado);

    // Si no se encuentra ningún nombre o descripción, se devuelve un mensaje por defecto
    const nombre = nombreResultado ? nombreResultado.nombre : 'Sin nombre';
    const descripcion = descripcionResultado ? descripcionResultado.descripcion : 'Sin descripción';

    // Responder con el nombre y la descripción generados
    res.json({
      nombre,
      descripcion,
    });
  } catch (error) {
    console.error('Error al generar personaje:', error);
    res.status(500).json({ error: 'Ocurrió un error al generar el personaje.' });
  }
});

app.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001');
});



