// models/Descripcion.js
module.exports = (sequelize, DataTypes) => {
    const Descripcion = sequelize.define('Descripcion', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      generoLiterarioId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'GeneroLiterario',
          key: 'id'
        }
      }
    });
  
    Descripcion.associate = (models) => {
      Descripcion.belongsTo(models.GeneroLiterario, { foreignKey: 'generoLiterarioId' });
    };
  
    return Descripcion;
  };
  