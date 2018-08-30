

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;
  const LiveModel = app.model.define('live', {
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
      type: STRING(200),
      allowNull: false,
      defaultValue: 'welcome to my room',
    },
    status: {
      type: INTEGER(3),
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    created_at: 'created_at',
    updated_at: 'updated_at',
    freezeTableName: true,
  });
  LiveModel.getAllRoom = async function(limit, offset) {
    return await this.findAll({
      limit,
      offset,
    });
  };
  LiveModel.associate = function() {
    LiveModel.belongsTo(app.model.UserModel, {
      foreignKey: 'user_id',
    });
  };
  return LiveModel;
};
