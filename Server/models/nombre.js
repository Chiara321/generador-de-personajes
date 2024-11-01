// models/Nombre.js
module.exports = (sequelize, DataTypes) => {
    const Nombre = sequelize.define('Nombre', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sexoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sexo',
          key: 'id'
        }
      }
    });
  
    Nombre.associate = (models) => {
      Nombre.belongsTo(models.Sexo, { foreignKey: 'sexoId' });
    };
  
    return Nombre;
  };
  