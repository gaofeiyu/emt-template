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
    const indexSpy = vi.spyOn(service, 'index');
    indexSpy.mockImplementationOnce(async () => mock.index);
    const list = await service.index();
    expect(list).toBe(mock.index);
  });
});
