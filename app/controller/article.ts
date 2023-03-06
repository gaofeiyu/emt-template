import { Controller } from 'egg';

export default class ArticleController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.index(ctx.query);
  }

  public async show() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.index({
      id: ctx.params.id,
      ...ctx.query,
    });
  }

  public async create() {
    const { ctx } = this;
    const requestBody = ctx.request.body;
    ctx.body = await ctx.service.article.create(requestBody);
  }

  public async update() {
    const { ctx } = this;
    const requestBody = ctx.request.body;
    ctx.body = await ctx.service.article.update(ctx.params.id, requestBody);
  }

  public async destroy() {
    const { ctx } = this;
    const requestBody = ctx.request.body;
    const param = requestBody && requestBody.length ? requestBody : ctx.params.id;
    console.log('destroy', param);
    ctx.body = await ctx.service.article.destroy(param);
  }
}
