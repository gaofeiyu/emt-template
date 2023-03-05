import { Controller } from 'egg';

export default class ArticleController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log('im in')
    ctx.body = await ctx.service.article.index();
  }
}
