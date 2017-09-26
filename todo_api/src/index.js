import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import indexRouter from './index/router';
const app = koa();

app.use(bodyParser({
  enableTypes: ['json', 'text']
}));

app
  .use(indexRouter.routes())
  .use(indexRouter.allowedMethods());

app.listen(8080);