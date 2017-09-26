import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import indexRouter from './index/router';
const app = koa();

app.use(cors());
app.use(bodyParser({
  enableTypes: ['json', 'text']
}));

app
  .use(indexRouter.routes())
  .use(indexRouter.allowedMethods());

app.listen(8080);