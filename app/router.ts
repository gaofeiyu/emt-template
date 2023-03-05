import 'reflect-metadata';
import { Application } from 'egg';
import { DataSource } from 'typeorm';

declare module 'egg' {
  interface Context {
    db: DataSource
  }
}

async function connectDB(dbConfig) {
  const AppDataSource = new DataSource(dbConfig);
  await AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch(err => {
      console.error('Error during Data Source initialization', err);
    });
  return AppDataSource;
}


export default async (app: Application) => {
  const { controller, router, config, context } = app;
  const db: DataSource = await connectDB(config.ormConfig);
  context.db = db;
  router.resources('article', '/api/article', controller.article);
};
