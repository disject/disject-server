'use strict';

const Controller = require('egg').Controller;

class LiveController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.live = ctx.service.liveService;
  }
  async getLiveList() {
    const { offset, limit } = this.ctx.params;
    const response = await this.live.getLiveList(offset, limit);
    this.ctx.body = response;
  }
  async startLiveStream(roomID) {
    const response = await this.live.startLiveStream(roomID);
    this.ctx.body = response;
  }
  async shutLiveStream(roomID) {
    const response = await this.live.shutLiveStream(roomID);
    this.ctx.body = response;
  }
  async applicationRoom() {
    const userID = this.ctx.session.user.userID;
    const { title, cover } = this.ctx.request.body;
    const response = await this.live.applicationRoom(userID, title, cover);
    this.ctx.body = response;
  }

  async deleteRoom() {
    const { roomID } = this.ctx.params;
    const response = await this.live.deleteRoom(roomID);
    this.ctx.body = response;
  }
  async changeRoomInfo() {
    const { roomID } = this.ctx.params;
    const { title, cover } = this.ctx.request.body;
    const response = await this.live.changeRoomInfo(roomID, title, cover);
    this.ctx.body = response;
  }
  // async search() {

  // }

}

module.exports = LiveController;
