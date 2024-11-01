require('dotenv').config();  // Esto carga las variables del archivo .env

const { Sequelize } = require('sequelize');

// Configuración de Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// Probar la conexión
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexión a MySQL establecida con éxito.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    } finally {
        await sequelize.close();
    }
}

testConnection();

