const { generarPersonajeAleatorio } = require('../services/personajeService');

async function generarPersonaje(req, res) {
  const { sexoId, generoLiterarioId } = req.body;

  try {
    const personaje = await generarPersonajeAleatorio(sexoId, generoLiterarioId);
    res.json(personaje);
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el personaje' });
  }
}

module.exports = {
  generarPersonaje
};
