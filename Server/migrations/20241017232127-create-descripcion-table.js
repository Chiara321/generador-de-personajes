module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Descripciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      generoLiterarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'GeneroLiterarios',
          key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Descripciones');
  }
};
