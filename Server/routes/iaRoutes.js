const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/generar-imagen', async (req, res) => {
    const { descripcion } = req.body;
    try {
        const response = await axios.post(
            'https://api.deepai.org/api/text2img',
            { text: descripcion },
            { headers: { 'Api-Key': '1580f747-0f48-4eeb-8af7-fec45fb6c6c2' } }
        );
        res.json({ imagenUrl: response.data.output_url });
    } catch (error) {
        console.error('Error al generar imagen:', error);
        res.status(500).json({ error: 'No se pudo generar la imagen' });
    }
});

module.exports = router;
