import { Container } from "inversify";
import { ArticleController } from "./controller";
import { DITypes } from "./diTypes";
import {
  ArticleRepository,
  DummyArticleRepository,
  IArticleRepository,
} from "./repository";

const container = new Container();
if (process.env.ENABLE_STUB) {
  container
    .bind<ArticleController>(DITypes.ArticleController)
    .to(ArticleController);
  container
    .bind<IArticleRepository>(DITypes.IArticleRepository)
    .to(DummyArticleRepository);
} else {
  container
    .bind<ArticleController>(DITypes.ArticleController)
    .to(ArticleController);
  container
    .bind<IArticleRepository>(DITypes.IArticleRepository)
    .to(ArticleRepository);
}

export { container };
