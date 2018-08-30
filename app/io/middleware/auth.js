'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { app, socket, logger } = ctx;
    const id = socket.id;
    const LiveModel = ctx.model.LiveModel;
    const nsp = app.io.of('/');
    const query = socket.handshake.query;
    const { room, userId } = query;

    const rooms = [ room ];
    const tick = (id, msg) => {
      logger.debug('#tick', id, msg);

      // 踢出用户前发送消息
      socket.emit(id, msg);

      // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件

      socket.emit('pissoff', 'room not found');
    };
    const hasRoom = await LiveModel.findOne({
      where: {
        roomID: room,
        status: true,
      },
    });

    if (!hasRoom) {
      tick(id, {
        type: 'deleted',
        message: 'deleted, room has been deleted.',
      });
      return;
    }
    socket.join(room);
    // 在线列表
    nsp.adapter.clients(rooms, (err, clients) => {

      // 更新在线用户列表
      nsp.to(room).emit('online', {
        clients,
        action: 'join',
        message: `User(${userId}) joined.`,
      });
    });
    await next();

    nsp.adapter.clients(rooms, (err, clients) => {


      // 更新在线用户列表
      nsp.to(room).emit('online', {
        clients,
        action: 'leave',
        message: `User(${userId}) leaved.`,
      });
    });
    // execute when disconnect.
    console.log('disconnection!');

  };
};
