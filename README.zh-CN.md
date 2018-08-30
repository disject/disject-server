# Disject

基于nodejs和node-media-server实现的直播平台

[![build status][travis-image]][travis-url]

[travis-image]:https://travis-ci.org/disject/disject-server.svg?branch=master
[travis-url]: https://travis-ci.org/disject/disject-server


## Feature
- 跨平台支持 Windows/Linux/Unix
- 支持 https/wss
- 支持实时弹幕


## TODO
- [ ] 房间管理
- [ ] 视频流监控
- [ ] 网站统计
- [ ] 用户权限认证系统
- [ ] 进一步改善流媒体服务器与http服务器之间的通信
- [ ] 支持视频录制
- [ ] 支持WebRTC
- [ ] 使用c++模块改善转码的速度
- [ ] 单元测试覆盖率超过80%
- [ ] 制作一个demo以及官方指南

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
