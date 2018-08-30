

const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.UserModel = ctx.model.UserModel;
  }
  async register(username, password, nickname, avatar) {
    const pwdHash = await this.ctx.genHash(password);
    const result = await this.UserModel.findOrCreate({
      where: {
        username,
      },
      defaults: {
        password: pwdHash,
        nickname,
        avatar,
      },
    });
    if (result[result.length - 1]) {
      return {
        error: false,
        data: '创建成功',
      };
    }
    return {
      error: true,
      data: '已存在此用户',
    };
  }
  async login(username, password) {
    const user = await this.UserModel.findUser(username);
    if (user && this.ctx.compare(password, user.get('password'))) {
      const role = user.get('role');
      this.ctx.session.user = {
        userID: user.get('id'),
        isTeacher: role === 1,
        isAdmin: role === 2,
      };
      return {
        error: false,
        data: {
          text: '登录成功',
          user: {
            nickname: user.get('nickname'),
            avatar: user.get('avatar'),
            role,
          },
        },
      };
    } return {
      error: true,
      data: '账号密码错误',
    };
  }
  async modifyInfo(userID, nickname, avatar) {
    const result = this.UserModel.update({
      nickname,
      avatar,
    }, {
      where: {
        id: userID,
      },
    });
    return {
      error: false,
      data: result,
    };
  }
  async changePwd(id, oldPwd, changedPwd) {
    const user = this.UserModel.findUserByID(id);
    if (user && this.ctx.compare(oldPwd, user.get('password'))) {
      this.UserModel.update({
        password: this.ctx.genHash(changedPwd),
      }, {
        where: {
          id,
        },
      });
      return {
        error: false,
        data: '登录成功',
      };
    } return {
      error: true,
      data: '密码错误',
    };
  }
  // async forgetPwd() {

  // }
}

module.exports = UserService;
