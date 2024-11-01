// models/GeneroLiterario.js
module.exports = (sequelize, DataTypes) => {
    const GeneroLiterario = sequelize.define('GeneroLiterario', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    GeneroLiterario.associate = (models) => {
      GeneroLiterario.hasMany(models.Descripcion, { foreignKey: 'generoLiterarioId' });
    };
  
    return GeneroLiterario;
  };
  