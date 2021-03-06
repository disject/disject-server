
const path = require('path');
module.exports = appInfo => {
  const config = exports = {
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'disject',
      host: 'localhost',
      port: '3306',
      username: 'library',
      password: '123456',
      timezone: 'Asia/Shanghai',
    },
    io: {
      init: {}, // passed to engine.io
      namespace: {
        '/': {
          connectionMiddleware: [ 'auth' ],
          packetMiddleware: [],
        },
        '/room': {
          connectionMiddleware: [ 'auth' ],
          packetMiddleware: [],
        },
      },
    },
    static: {
      prefix: '/public/',
      dir: path.join(appInfo.baseDir, 'public'),
    },
    security: {
      csrf: {
        enable: false,
      },

    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
    session: {
      key: 'EGG_SESS',
      maxAge: 24 * 3600 * 1000, // 1 天
      httpOnly: true,
      encrypt: true,
    },
    nms: {
      rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30,
      },
      http: {
        port: 9090,
        allow_origin: '*',
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523509508086_5913';

  // add your config here
  config.middleware = [];

  return config;
};

