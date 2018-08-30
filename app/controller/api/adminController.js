

const Controller = require('egg').Controller;

class AdminController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.userService = ctx.service.userService;
    this.adminService = ctx.service.adminService;
  }
  // async login() {
  //     this.ctx.validate({
  //       username:{type: 'email'},
  //       password:{type: 'string',min:8,max:20},
  //       rememberMe:{type: 'boolean',required:false},
  //     })
  //   const {
  //     username,
  //     password
  //   } = this.ctx.request.body;
  //   const response = await this.userService.login(username, password);
  //   if(response.error) this.ctx.status = 403;
  //   this.ctx.body = response;

  // }
  // async logout() {
  //   this.ctx.session = null;
  //   this.ctx.body = "退出成功"
  // }

  async getUserList() {
    const { limit = 10, offset = 0 } = this.ctx.request.query;
    const response = await this.adminService.getUserList(limit, offset);
    this.ctx.body = response;
  }

  async getRoomList() {
    const { limit = 10, offset = 0 } = this.ctx.request.query;
    const response = await this.adminService.getRoomList(limit, offset);
    this.ctx.body = response;
  }

  async changeRoomStatus() {
    const { roomID, status } = this.ctx.request.body;
    const response = await this.adminService.changeRoomInfo(roomID, status);
    this.ctx.body = response;
  }

  async changeUserRole() {
    const { userID, role } = this.ctx.request.body;
    const response = await this.adminService.changeUserRole(userID, role);
    this.ctx.body = response;
  }

}

module.exports = AdminController;
