'use strict';

const {
  // app,
  mock,
  // assert,
} = require('egg-mock/bootstrap');

describe('test/controller/api/user.test.js', () => {
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

  describe('POST /api/user/login', () => {
    beforeEach(async function() {
      app.mockService('userService', 'login', async function(username, password) {
        const testUser = {
          username: 'sansroman@foxmail.com',
          password: await ctx.genHash('password@1'),
          avatar: 'www.baidu.com',
          nickname: 'sansroman',
          role: 0,
        };

        const checked = await ctx.compare(password, testUser.password);
        if (username === testUser.username && checked) {
          return Promise.resolve({
            error: false,
            data: '登录成功',
          });
        }
        return Promise.resolve({
          error: true,
          data: '账号密码错误',
        });


      });
    });
    afterEach(function() {
      mock.restore();
    });
    it('should status 422', () => {
      // 对 app 发起 `GET /` 请求
      return app.httpRequest()
        .post('/api/user/login')
        .send({
          username: 'sansroman',
          password: 'password1',
        })
        .set('Accept', 'application/json')
        .expect(422);
    });

    it('should status 403', async () => {
      // 使用 generator function 方式写测试用例，可以在一个用例中串行发起多次请求
      await app.httpRequest()
        .post('/api/user/login')
        .send({
          username: 'sansroman@foxmail.com',
          password: 'password123',
        })
        .set('Accept', 'application/json')
        .expect(403);
    });

    it('should status 200 and rememberMe true', async () => {
      // 使用 generator function 方式写测试用例，可以在一个用例中串行发起多次请求
      await app.httpRequest()
        .post('/api/user/login')
        .send({
          username: 'sansroman@foxmail.com',
          password: 'password@1',
          rememberMe: true,
        })
        .set('Accept', 'application/json')
        .expect(200);
    });
  });
});
