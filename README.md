# Disject

[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

[travis-image]:https://travis-ci.org/disject/disject-server.svg?branch=master
[travis-url]: https://travis-ci.org/disject/disject-server

live video steaming

## Feature
- Cross platform support Windows/Linux/Unix
- Support https/wss
- Support Server Monitor
- Support Rtsp/Rtmp relay

## TODO
- [x] Use c++ expansion improve performance
- [x] stream monitor frontend
- [x] support WebRTC
- [x] room manager page
- [x] user anthorization manager
- [x] website statistical monitor frontend


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
