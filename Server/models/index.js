const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config.js'); // Cambia a config.js

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

let sequelize;
if (config[env]) {
  sequelize = new Sequelize(config[env]);
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; // Exporta cada modelo
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Asegúrate de que todos los modelos se exporten
const Nombre = require('./nombre')(sequelize, Sequelize.DataTypes);
const Descripcion = require('./descripcion')(sequelize, Sequelize.DataTypes);
const Sexo = require('./sexo')(sequelize, Sequelize.DataTypes);
const GeneroLiterario = require('./generoLiterario')(sequelize, Sequelize.DataTypes);

db.Nombre = Nombre;
db.Descripcion = Descripcion;
db.Sexo = Sexo;
db.GeneroLiterario = GeneroLiterario;

module.exports = db;

