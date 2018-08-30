'use strict';
const ms = require('ms');
const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.userService = ctx.service.userService;
  }
  async login() {
    this.ctx.validate({
      username: { type: 'email' },
      password: { type: 'string', min: 8, max: 20 },
      rememberMe: { type: 'boolean', required: false },
    });
    const {
      username,
      password,
      rememberMe,
    } = this.ctx.request.body;
    const response = await this.userService.login(username, password);
    if (response.error) this.ctx.status = 403;
    if (!response.error && rememberMe) this.ctx.session.maxAge = ms('30d');
    this.ctx.body = response;

  }
  async register() {
    this.ctx.validate({
      username: { type: 'email' },
      password: { type: 'string', min: 8, max: 20 },
      nickname: { type: 'string', min: 1, max: 20 },
      avatar: { type: 'url', required: false },
    });
    const {
      username,
      password,
      nickname = 'guest',
      avatar = null,
    } = this.ctx.request.body;
    const response = await this.userService.register(username, password, nickname, avatar);
    if (response.error) this.ctx.status = 409;
    this.ctx.body = response;
  }

  async logout() {
    this.ctx.session = null;
    this.ctx.body = '退出成功';
  }

  async modifyInfo() {
    this.ctx.validate({
      nickname: { type: 'string', min: 1, max: 50 },
      avatar: { type: 'url', required: false },
    });
    const { nickname, avatar } = this.ctx.request.body;
    const userID = this.ctx.session.user.userID;
    const response = await this.userService.modifyInfo(userID, nickname, avatar);
    if (response.error) this.ctx.status = 403;
    this.ctx.body = response;
  }
  async changePwd() {
    this.ctx.validate({
      oldPwd: { type: 'string', min: 8, max: 20 },
      changedPwd: { type: 'string', min: 8, max: 20 },
    });
    const { changedPwd, oldPwd } = this.ctx.request.body;
    const userID = this.session.user.userID;
    const response = await this.userService.changedPwd(userID, oldPwd, changedPwd);
    if (response.error) this.ctx.status = 403;
    this.ctx.body = response;
  }
  async forgetPwd() {
    this.ctx.validate({
      nickname: { type: 'string', min: 1, max: 20 },
    });
    const { nickname } = this.ctx.request.body;
    const response = await this.userService.forgetPwd(nickname);
    this.ctx.body = response;
  }
}

module.exports = UserController;
