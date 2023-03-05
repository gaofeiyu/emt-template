import { Controller } from 'egg';

export default class ArticleController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.index();
  }

  public async create() {
    const { ctx } = this;
    const requestBody = ctx.request.body;
    ctx.body = await ctx.service.article.create(requestBody);
  }
}
