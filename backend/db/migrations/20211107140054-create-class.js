'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaKelas: {
        type: Sequelize.STRING
      },
      tanggalMulai: {
        type: Sequelize.DATEONLY
      },
      tanggalSelesai: {
        type: Sequelize.DATEONLY
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      fotoKelas: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Classes');
  }
};