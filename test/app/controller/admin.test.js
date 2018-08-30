'use strict';

const {
  // app,
  mock,
  // assert,
} = require('egg-mock/bootstrap');

describe('test/controller/api/admin.test.js', () => {
  let app;
  let ctx;
  before(async function() {
    app = mock.app();
    await app.ready();
    ctx = app.mockContext();
    await ctx.model.sync({
      force: true,
    });
  });


});
