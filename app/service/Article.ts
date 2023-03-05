import { Service } from 'egg';
import { Article as EntityArticle } from '../entity/t_article';


type ArticleType = typeof EntityArticle.prototype;

export default class Article extends Service {
  public async index(): Promise<ArticleType[]> {
    const { ctx } = this;
    const manager = ctx.db.manager;
    return await manager.find(EntityArticle);
  }
}
