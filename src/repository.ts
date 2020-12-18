import "reflect-metadata";
import { injectable } from "inversify";
import { Article } from "./article";

export interface IArticleRepository {
  getAll(): Promise<Article[]>;
}

@injectable()
export class ArticleRepository implements IArticleRepository {
  async getAll(): Promise<Article[]> {
    // 本当はデータベースからAPI経由でデータ取得する
    throw new Error("働きたくないでござる");
  }
}

@injectable()
export class DummyArticleRepository implements IArticleRepository {
  getAll(): Promise<Article[]> {
    return Promise.resolve([
      {
        title: "ダミー記事１",
        description: "ダミー記事１の説明だよ",
      },
      {
        title: "ダミー記事２",
        description: "ダミー記事２の説明だよ",
      },
    ]);
  }
}
