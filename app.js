'use strict';
module.exports = app => {
  app.ready(() => {
    const nms = app.nms;
    const streamArr = [];
    nms.run();
    nms.on('postPublish', (id, StreamPath) => {
      const roomID = StreamPath.match(/\d+/g);
      streamArr[id] = roomID;
      app.controller.startLiveStream(roomID);
    });

    nms.on('donePublish', id => {
      const roomID = streamArr[id];
      app.controller.shutLiveStream(roomID);
    });
  });
};
