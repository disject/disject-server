// {app_root}/app/io/controller/default.js


const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async message() {
    const { ctx } = this;

    const { room, userID } = ctx.socket.handshake.query;
    const message = ctx.args[0];
    console.log(userID, message);
    await ctx.socket.to(room).emit('msg', userID, message);
  }


}

module.exports = DefaultController;
