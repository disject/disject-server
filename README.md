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
- [x] Room manager frontendÍ
- [x] Stream monitor frontend
- [x] Website statistical monitor frontend
- [x] User anthorization system
- [x] Further improvement the communication between the media server and the http server
- [x] Support video recording
- [x] Support WebRTC
- [x] Use c++ expansion improve performance

## Dependencies

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
