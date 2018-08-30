

const Service = require('egg').Service;

class AdminService extends Service {
  constructor(ctx) {
    super(ctx);
    this.UserModel = ctx.model.UserModel;
    this.LiveModel = ctx.model.LiveModel;

  }

  async getUserList(limit, offset) {
    const data = await this.UserModel.getAllUser(limit, offset);
    return { error: false, data };
  }

  async getRoomList(limit, offset) {
    const data = await this.LiveModel.getAllRoom(limit, offset);
    return { error: false, data };

  }

  async changeRoomStatus(roomID, status) {
    const data = await this.LiveModel.update({
      status,
    }, {
      where: {
        roomID,
      },
    });
    return { error: false, data };
  }

  async changeUserRole(userID, role) {
    const data = await this.UserModel.update({
      role,
    }, {
      where: {
        id: userID,
      },
    });
    const message = data !== 0 ? '修改成功' : '修改失败';
    return { error: data === 0, data: message };
  }


}

module.exports = AdminService;
