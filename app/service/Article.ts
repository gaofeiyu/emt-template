import { Service } from 'egg';
import { Article as EntityArticle } from '../entity/t_article';
import { BaseEntity } from 'typeorm';

type CommonResponse = {
  code: number;
  message?: string;
  data?: unknown;
};

// 通过排除掉 BaseEntity 类下的属性来快速生成当前实例的类型，就不用单独写类型了
type ArticleType = Omit<typeof EntityArticle.prototype, keyof BaseEntity>;
type ArticleReqType = Omit<ArticleType, 'id' | 'updateTime' | 'createTime'>;

export default class Article extends Service {
  public async index(params?: ArticleType): Promise<ArticleType[]> {
    const { ctx } = this;
    const articleRepository = ctx.db.getRepository(EntityArticle);
    return await articleRepository.findBy({
      ...(params || {}),
    });
  }

  public async create(params: ArticleReqType): Promise<CommonResponse> {
    const { ctx } = this;
    const articleRepository = ctx.db.getRepository(EntityArticle);
    const newArticle = articleRepository.create(params);
    await articleRepository.save(newArticle);

    return {
      code: 0,
      message: 'success',
    };
  }

  public async update(id: number | string, params: ArticleReqType): Promise<CommonResponse> {
    const { ctx } = this;
    const articleRepository = ctx.db.getRepository(EntityArticle);
    const result = await articleRepository.update(id, params);
    const code = result.affected === 1 ? 0 : 1;
    const message = code === 0 ? 'success' : 'entry not found';

    return {
      code,
      message,
    };
  }

  public async destroy(id: number | string): Promise<CommonResponse> {
    const { ctx } = this;
    const articleRepository = ctx.db.getRepository(EntityArticle);
    const result = await articleRepository.delete(id);
    const code = result.affected && result.affected > 0 ? 0 : 1;
    const message = code === 0 ? 'success' : 'entry not found';

    return {
      code,
      message,
    };
  }
}
