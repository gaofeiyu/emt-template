import { Service } from 'egg';
import { Article as EntityArticle } from '../entity/t_article';

type CommonResponse = {
  code: number;
  message?: string;
  data?: unknown;
};

type ArticleType = typeof EntityArticle.prototype;

export default class Article extends Service {
  public async index(): Promise<ArticleType[]> {
    const { ctx } = this;
    const manager = ctx.db.manager;
    return await manager.find(EntityArticle);
  }

  public async create(params: ArticleType): Promise<CommonResponse> {
    const { ctx } = this;
    const manager = ctx.db.manager;
    const articleTable = new EntityArticle();
    manager.merge(EntityArticle, articleTable, params);
    await manager.create(EntityArticle, articleTable);
    await manager.save(articleTable);

    return {
      code: 0,
    };
  }
}
