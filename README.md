# Disject

[![build status][travis-image]][travis-url]

[travis-image]:https://travis-ci.org/disject/disject-server.svg?branch=master
[travis-url]: https://travis-ci.org/disject/disject-server

Live Video Stream on a Node.js Server

## Feature
- Cross platform support Windows/Linux/Unix
- Support https/wss
- Support Real-time barrage

## TODO
- [ ] Room manager frontendÍ
- [ ] Stream monitor frontend
- [ ] Website statistical monitor frontend
- [ ] User anthorization system
- [ ] Further improvement the communication between the media server and the http server
- [ ] Support video recording
- [ ] Support WebRTC
- [ ] Use c++ expansion improve performance
- [ ] Unit test coverage exceeds 80%
- [ ] Make a demo and official guide

## Dependencies

- egg.js
- Node-Media-Server
- socket.io

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
