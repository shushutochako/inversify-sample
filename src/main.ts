import { container } from "./container";
import { ArticleController } from "./controller";
import { DITypes } from "./diTypes";

(async () => {
  const controller = container.get<ArticleController>(
    DITypes.ArticleController
  );
  const articles = await controller.retrieveAll();
  console.dir(articles);
})().catch((err) => {
  console.error(err);
});
