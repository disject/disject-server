'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const {

      STRING,
      INTEGER,
      DATE,

    } = Sequelize;
    await queryInterface.createTable('user', {
      id: {
        type: INTEGER(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: STRING(50),
        allowNull: false,
      },
      nickname: {
        type: STRING(50),
        allowNull: true,
        defaultValue: 'guest',
      },
      password: {
        type: STRING(100),
        allowNull: false,
      },
      avatar: {
        type: STRING(200),
        allowNull: true,
      },
      role: {
        type: INTEGER(3),
        allowNull: false,
        defaultValue: 0,
      },
      created_at: DATE,
      updated_at: DATE,

    });
    await queryInterface.createTable('live', {
      roomID: {
        type: INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      cover: {
        type: STRING(200),
        allowNull: false,
        defaultValue: '',
      },
      title: {
        type: STRING(100),
        allowNull: false,
        defaultValue: 'welcome to my room',
      },
      status: {
        type: INTEGER(3),
        allowNull: false,
        defaultValue: 0,
      },
      user_id: {
        type: INTEGER(20),
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('live');
    await queryInterface.dropTable('user');
  },
};
