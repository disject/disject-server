'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;
  const UserModel = app.model.define('user', {
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
      defaultValue: 0, // -1为封禁用户，0为普通用户，1为主播，2为管理员
    },
  }, {
    created_at: 'created_at',
    updated_at: 'updated_at',
    freezeTableName: true,
  });
  UserModel.findUser = async function(username) {
    return await this.findOne({
      where: {
        username,
      },
    });
  };
  UserModel.getAllUser = async function(limit, offset) {
    return await this.findAll({
      limit,
      offset,
      attributes: [ 'username', 'nickname', 'avatar', 'role', 'created_at', 'updated_at' ],
    });
  };
  UserModel.findUserByID = async function(userID) {
    return await this.findOne({
      where: {
        id: userID,
      },
    });
  };
  UserModel.associate = function() {
    UserModel.hasOne(app.model.LiveModel);
  };
  return UserModel;
};
