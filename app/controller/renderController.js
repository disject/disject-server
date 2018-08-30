

const Controller = require('egg').Controller;
class RenderController extends Controller {
  async index() {
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, ''),
    });
  }
}
module.exports = RenderController;
