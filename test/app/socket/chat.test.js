'use strict';

const { assert } = require('egg-mock/bootstrap');
const mm = require('egg-mock');
const ioc = require('socket.io-client');
const basePort = 7001;

function client(nsp = '', opts = {}) {
  let url = 'http://127.0.0.1:' + opts.port + (nsp || '');
  if (opts.query) {
    url += '?' + opts.query;
  }
  return ioc(url, opts);
}

describe('test/app/socket/chat.test.js', () => {

  it('should connect', function* () {
    const app = mm.app();
    app.ready().then(() => {
      const socket = client('/chat', { port: basePort, query: { room: 'room', userId: `Client_${Math.random()}` } });
      socket.on('connect', () => { console.log('success'); });
      socket.on('online', msg => { assert(msg !== null); });
    });
  });
});

