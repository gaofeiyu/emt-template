import { beforeEach, describe, expect, test, vi } from 'vitest';
import egg from 'egg';

import ArticleService from '../service/article';
import * as mock from './mock/article.mock';

describe('article', () => {
  let service;
  beforeEach(async () => {
    const app = await egg.start({ ignoreWarning: true });
    const ctx = app.createAnonymousContext();
    service = new ArticleService(ctx);
    ctx.service.article = service;
  });

  test('index', async () => {
    const spy = vi.spyOn(service, 'index');
    spy.mockImplementationOnce(async () => mock.index);
    const list = await service.index();
    expect(list).toEqual(mock.index);
  });

  test('create', async () => {
    const spy = vi.spyOn(service, 'create');
    spy.mockImplementationOnce(async () => {
      return {
        code: 0,
        message: 'success',
      };
    });
    const list = await service.create();
    expect(list).toEqual({
      code: 0,
      message: 'success',
    });
  });
});
