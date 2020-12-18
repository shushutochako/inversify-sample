import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Article } from "./article";
import { IArticleRepository } from "./repository";
import { DITypes } from "./diTypes";

@injectable()
export class ArticleController {
  private _repo: IArticleRepository;

  public constructor(
    @inject(DITypes.IArticleRepository) repo: IArticleRepository
  ) {
    this._repo = repo;
  }

  async retrieveAll(): Promise<Article[]> {
    const articles = await this._repo.getAll();
    return articles;
  }
}
