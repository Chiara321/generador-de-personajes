// models/Sexo.js
module.exports = (sequelize, DataTypes) => {
    const Sexo = sequelize.define('Sexo', {
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
  
    Sexo.associate = (models) => {
      Sexo.hasMany(models.Nombre, { foreignKey: 'sexoId' });
    };
  
    return Sexo;
  };
  